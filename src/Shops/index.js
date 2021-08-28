const models = require("../Models")

export const createShop = async body => {
    if (body.id === undefined || body.id === null) {
        const shop = await models.shops.create({
            name: body.name,
            brand: body.brand,
            validity: body.validity,
            amount: body.amount
        })

        return shop
    } else {
        const shop = await models.shops.findOne({ where: { id: body.id }})

        await shop.update({
            name: body.name,
            brand: body.brand,
            validity: body.validity,
            amount: body.amount
        })

        return shop
    }
}

export const getAllShops = async () => {
    const shops = await models.shops.findAll()

    return shops
}

export const getShopById = async id => {
    const shop = await models.shops.findOne({ where: { id: id }})

    return shop
}