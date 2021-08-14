const models = require('../Models/');
const cleanObj = require('../Helpers/CleanObject');

const create = async (table, body) => {
    return models[table].create(body);
}

const updateById = async (table, id, body) => {
    const fields = Object.keys(body);
    const options = { where: {id}, fields };
    await models[table].update(body, options)
    return body
}

const updateWithWere = async (table, body, where) => {
    const fields = Object.keys(body);
    const options = { where, fields };
    return await models[table].update(body, options)
}

const bulkCreate = async (table, body) => {
    return models[table].bulkCreate(body)
}

const save = async (table, body) => {
    const {id} = body;

    if(!!id) return await updateById(table, id, cleanObj(body))

    return await create(table, body)
}

module.exports = { save, updateWithWere, bulkCreate }
