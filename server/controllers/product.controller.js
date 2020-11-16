const Product = require('../models/product.model');

module.exports.findAllProducts = (req,res) =>{
    Product.find()
        .then((allproducts) => res.json({ products: allproducts }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};


module.exports.findOneProduct = (req,res) =>{
    Product.findOne({_id: req.params._id})
        .then ((oneProd)=> res.json({product: oneProd}))
        .catch((err) => res.json({message: "Something went wrong", error: err}));
}

module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then ((createProd) => res.json({product: createProd}))
        .catch((err) => res.json({message: "Something went wrong", error: err}))
}

module.exports.deleteProduct = (req,res) =>{
    Product.remove({_id: req.params._id})
        .then(res.json({message: "Your product was sucessfully added to the database"}))
        .catch((err) => res.json({message: "Something went wrong", error: err}))
}

module.exports.updateProduct = (req,res) =>{
    Product.update({_id: req.params._id},{
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        }
    })
        .then((allProd) => res.json({products: allProd}))
        .catch((err) => res.json({message: "Something went wrong", error: err}))   
}