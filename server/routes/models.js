const express = require('express')

const router = express.Router()

router.get("/found", async(req,res)=>{
    try {
        let result = await Product.find()
        res.send({Product:result,msg:"product founded"})

    } catch (error) {
        console.log(error)
    }

})

router.post("/add", async(req,res)=>{
    try {
        let newProduct = new Product(req.body)
        let result = await newProduct.save()
        res.send({Product:result,msg:"product added"})

    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async(req,res)=>{
    try {
        let result = await Product.findById({_id:req.params.id})
        res.send({Product:result,msg:"product updated"})

    } catch (error) {
        console.log(error)
    }

})

router.delete("/:id", async(req,res)=>{
    try {
        let result = await Product.findByIdAndDelete({_id:req.params.id})
        res.send({Product:result,msg:"product deleted successfully"})

    } catch (error) {
        console.log(error)
    }

})

module.exports = router