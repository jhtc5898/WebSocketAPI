const model = require('./model')

function get_empresa(filtro_empresa) {
    let filtro = {}
    if (filtro_empresa) {
        filtro = { nombre: filtro_empresa }
    }
    const objeto = model.find(filtro)
    return objeto
}

function add_empresa(empresa) {
    const objeto = new model(empresa)
    objeto.save()
}

async function update_empresa(empresa) {
    const objeto = await model.findOne({ RUC: empresa.ruc })

    if (objeto) {
        objeto.RUC = empresa.ruc
        objeto.nombre = empresa.nombre
        objeto.domicilio = empresa.domicilio
        objeto.telefono = empresa.telefono

        return resultado = await objeto.save()
    } else {
        return null
    }
}

async function delete_empresa(empresa) {
    return await model.deleteOne({ ruc: empresa.ruc })
}

module.exports = {
    add: add_empresa,
    get: get_empresa,
    update: update_empresa,
    delete: delete_empresa,
}