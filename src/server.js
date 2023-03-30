import express from 'express';
import mock from '../mock.json'  assert { type: "json" };
import PdfPrinter from 'pdfmake';


const app = express();

app.get('/', (req, res) => {
  return res.json(mock)
})

app.get('/report', (req, res) => {
  var fonts = {
    Helvetica: {
      normal: 'Helvetica',
      bold: 'Helvetica-Bold',
      italics: 'Helvetica-Oblique',
      bolditalics: 'Helvetica-BoldOblique'
    },
  };

  
  const dataArray = [{
  "id": "1",
  "nome": "Fulano",
  "idade": 30,
  "valor": "20",
  "curso": "medicina",
  "nomeOrientador": "pedro henrique",
  }]

  const body = []
  for (let data of dataArray){
    const rows = new Array();
    rows.push(data.id)
    rows.push(data.nome)
    rows.push(data.nomeOrientador)
    rows.push(data.idade)

    body.push(rows)
  }

  const printer = new PdfPrinter(fonts)

  const docDefinitions = {
    defaultStyle: {
      font: "Helvetica"
    },
    content: [
      {
        text: "Dados Internacionais de Catalogação na Publicação Universidade CEUMA Rede de Bibliotecas CEUMA Gerada automaticamente mediante os dados fornecidos pelo(a) autor(a).",
        alignment: 'center',
        fontSize: 15,
        bold: true,
        lineHeight: 1.1
      },
      {
        table: {
          headerRows: 1,
          widths: [ '*', 'auto', 100, '*' ],
          
          body: [
            ["id", "name", "nomeOrientador", "idade"],
            ...body
          ],
          border: false,
        }
      }
    ]
  }

  const pdfDoc = printer.createPdfKitDocument(docDefinitions)

  // pdfDoc.pipe(fs.createWriteStream("Relatório.pdf"))

  const chunks = []

  pdfDoc.on('data', (chunk) => {
    chunks.push(chunk)
  })
  pdfDoc.end();

  pdfDoc.on('end', () => {
    const result = Buffer.concat(chunks)
    res.end(result)
  })


  // res.send('Relatório concluído')
})


app.listen(3000, () => console.log('server running'))