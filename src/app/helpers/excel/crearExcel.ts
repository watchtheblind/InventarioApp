const ExcelJS = require('exceljs')
export const crearExcel = async (data: object) => {
  try {
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
    //creando el archivo
    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    })
    //haciendo el archivo descargable mediante la creación de un link auto-clickeable
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Productos.xlsx'
    a.click()
    URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error al crear el archivo:', error)
  }
}
