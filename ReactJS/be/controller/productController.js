
const Product = require("../model/productModel");
const { ApiFeature } = require("../utils/apiFeature");

const getAllProducts = async (req, res) => {
    console.log("limit", req.query.limit);
    try {
        const listProduct = Product.find();
        if (req.query.page !== "all") {
            const countPages = req.query.limit||4;
            let apiP = new ApiFeature(listProduct, req.query);
            apiP = await apiP.pagination(countPages);
            const totalProduct = await Product.countDocuments();
            const totalPage = Math.ceil(totalProduct / countPages);


            const products = await apiP.query.exec();

            return res.status(200).json({
                success: true,
                products,
                totalPage
            });
        }
        else {
            const products = await listProduct.exec();
            return res.status(200).json({
                success: true,
                products

            })
        }
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }

};
const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({
            success: true,
            product
        })
    }
    catch (error) {
        console.error("Error saving product:", error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

const updateProducts = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product is not exist"
            })
        }
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({
            success: true,
            product
        })

    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(500).json({
                success: false,
                message: "Product is not exist"
            })
        }
        await Product.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: "Succesfully delete"
        })
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
            ,
        })
    }
}
const productDetails = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product is not found"
        })
    }
    res.status(200).json({
        success: true,
        product
    })
};
const productSearch= async(req, res) =>{
   
    const keyword = req.query.keyword;
    console.log("check",keyword);
    try{ 
        const listProduct = Product.find();  
        if(keyword){
            let apiF = new ApiFeature(listProduct, req.query);
            apiF = await apiF.search();
            const products = await apiF.query.exec();
            return res.status(200).json({
                success:true,
                products
            })
            
        } 

    }
    catch(err){
        return res.status(400).json({
            success: false,
            message:"Cannot find the products!!!"
        })
        
    }

  
    
}

module.exports = {
    createProducts,
    getAllProducts,
    updateProducts,
    deleteProduct,
    productDetails,
    productSearch
};

