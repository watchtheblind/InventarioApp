const ExcelJS = require('exceljs')
export const crearExcel = async (data: object) => {
  try {
    console.log('Inicio de la creación del archivo')
    const workbook = new ExcelJS.Workbook()
    workbook.created = new Date()
    const sheet = workbook.addWorksheet('Productos')

    sheet.columns = [
      {header: 'Serial/id', key: '_id', width: 30},
      {header: 'nombre', key: 'nombre', width: 30},
      {header: 'descripcion', key: 'descripcion', width: 60},
      {header: 'cantidad', key: 'cantidad', width: 10},
      {header: 'precio', key: 'precio', width: 10},
    ]

    sheet.addRows(data)
    console.log('Datos agregados al archivo')

    //creating file
    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'prueba.xlsx'
    a.click()
  } catch (error) {
    console.error('Error al crear el archivo:', error)
  }
}
