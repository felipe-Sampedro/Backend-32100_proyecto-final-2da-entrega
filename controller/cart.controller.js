const { HTTP_STATUS } = require('../constants/api.constants');
const { CartsDao } = require('../models/daos/app.daos');
const { successResponse } = require('../utils/api.utils');
const { ProductsDao } = require('../models/daos/app.daos');

const cartsDao= new CartsDao()
const productsDao= new ProductsDao()

class CartsControllers{

    getAllCart = async (req, res) => {
        const dataListC= await cartsDao.getAll()
        return res.send(dataListC);
    }


    getByIdCart= async (req,res) => {
        const {id} = req.params
        const filter_cart = await cartsDao.getById(id)
        if (!filter_cart){
        return res.status(404).send({state:"error", error:`the cart with id: ${id} doesn't exist!`})
        }
        return res.send({state:"Succses",filter_cart});
    }

    saveCart= async (req,res) => {
        const {productos} = req.body
        const newCart = await cartsDao.saveCart(productos)
        return res.send({state:"Succes",result: 'the id of de new cart is:' + newCart.id});
    };


    saveCartProd= async (req,res) => {
        const {id_cart,id_prod} = req.params
        const data_Cart = await cartsDao.saveCartProd(id_cart,id_prod) 
        return res.send({state:"Succes",result: data_Cart});
    };


    deleteByIdCart_Prods = async (req,res,next)=> {
        try {
            const {id_cart,id_prod} = req.params 
            const data_C = await cartsDao.deleteByIdCart_Prods(id_cart,id_prod) 
            return res.send({state:"success", resul:`the Item with id: ${id_prod} of the cart with id: ${id_cart} has been deleted`})
        } 
        catch (error) {
            next(error);
        }
    }


    deleteByIdCart = async (req,res)=> {
        const {id} = req.params 
        const data_C = await cartsDao.delete(id)
    
        return res.send({state:"success", resul:`the cart with id: ${id} has been deleted`})
    }

}

  
module.exports = CartsControllers;