const foodModel = require('../models/foodModel')
const fsPromises = require('fs').promises
const path = require('path')

const addFood = async(req,res)=>{
    let image_filename = `${req.file.filename}`

    try{
        await foodModel.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:image_filename
        })
        res.status(201).json({"message":"Food Added Successfully"})

    } catch (error){
        console.log(error)
        res.status(500).json({"message":"Can't Add the FOOD!!"})
    }
}

const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({data:foods})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"Can't list the FOOD!!"})
    }
}

const removeFood = async(req,res)=>{
    try {
        const {id} = req.query
        console.log(id);
        const food = await foodModel.findById(id)
        if(!food)
            return res.status(404).json({"message":"Food not found"})

        await fsPromises.unlink(path.join(__dirname,'..','uploads',`${food.image}`))
        await foodModel.deleteOne({_id:id})
        res.status(200).json({"message":"Food Deleted Successfully"})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({"message":"Unable to Delete the FOOD."})
    }
}

module.exports = {addFood,listFood,removeFood}