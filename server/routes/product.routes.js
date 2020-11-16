const { models } = require('mongoose');
const ProductController = require('../controllers/product.controller');

module.exports = app =>{
    app.get('/api/products', ProductController.findAllProducts);

    app.get('/api/products/:_id', ProductController.findOneProduct);

    app.post('/api/products/new', ProductController.createProduct);

    app.delete('/api/products/delete/_id', ProductController.deleteProduct);
    
    app.put('/api/products/update/_id', ProductController.updateProduct);
};