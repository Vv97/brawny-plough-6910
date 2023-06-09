const productModel = require("../model/products.model");

// get products from product path
const getProducts = async (req, res) => {

    let { name, category, jewellerytype, material, limit, page } = req.query;

    let obj = {};

    if (name) {
        obj.name = { $regex: name };
    };

    if (category) {
        obj.category = category;
    };

    if (jewellerytype) {
        obj.jewellerytype = jewellerytype;
    };

    if (material) {
        obj.material = material;
    };

    if (!page) {
        page = 1;
    };

    if (!limit) {
        limit = 10;
    };


    let skip = (parseInt(page) - 1) * parseInt(limit);




    try {
        let totalProductCount = await productModel.countDocuments(obj)
        let productsData = await productModel.find(obj).limit(limit).skip(skip);
        res.status(200).send({
            total: totalProductCount,
            products: productsData
        });
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    };
};


// add data to products
const addProduct = async (req, res) => {
    try {
        const newProduct = productModel(req.body);
        await newProduct.save();
        res.status(200).send({ mssg: "Product added successfully!" });
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    };
};


// update data in products 
const updateProduct = async (req, res) => {
    const { productId } = req.params;
    try {
        await productModel.findByIdAndUpdate({ _id: productId }, req.body);
        res.status(200).send({ mssg: "Product was updated successfully!" });
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    };
};


// delete data in products
const deleteProduct = async (req, res) => {
    const { deleteId } = req.params;
    try {
        await productModel.findByIdAndDelete({ _id: deleteId });
        res.status(200).send({ mssg: "Product was deleted successfully!" });
    } catch (error) {
        res.status(400).send({ mssg: error.message });
    };
};

const getProductById = async (req, res) => {
    const { productID } = req.params;
    console.log(productID)
    try {
        let data = await productModel.findOne({ _id: productID });
        res.status(200).send({ produt: data })
    } catch (error) {
        res.status(400).send(error);
    }
};


module.exports = { getProducts, addProduct, updateProduct, deleteProduct, getProductById };