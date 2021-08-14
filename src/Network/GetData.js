const models = require('../Models');

const getPagination = async (actualPage, limitValue = 20, table, options) => {

    const page = Number(actualPage);
    let limit = Number(limitValue);

    let totalItems = 0;

    if(options.where) {
        totalItems = await models[table].count({ where: options.where });
    } else {
        const count = await models[table].findAndCountAll(options)

        totalItems = count.count;
    }

    limit = totalItems < limit ? totalItems : limit;

    const totalPages = Math.ceil(totalItems/limit);
    const offset = (page * limit) - limit;

    return {page, limit, totalItems, totalPages, offset};
};

const getCount = async (table, options) => {
    const data = await models[table].findAndCountAll(options)
    return data.count
}

const getOnDb = async (table, optionsData, page = null, limit = null) => {
    let options = optionsData;

    if (page && limit) {
        const pagination = await getPagination(page, limit, table, options);
        options = {
            ...options,
            offset: pagination.offset,
            limit: pagination.limit
        };

        const data = await models[table].findAll(options);

        return { pagination, data };

    }

    return models[table].findAll(options);
};

const getOne = async (table, options) => {
    return models[table].findOne(options);
}

module.exports = { getPagination, getOnDb, getOne, getCount };
