import Product from "../Models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const { code, description, presentation } = req.body;

    const newProduct = new Product({
      code,
      description,
      presentation,
    });

    const productSaved = await newProduct.save();

    res.json(productSaved);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { idProduct } = req.params;

    const productFound = await Product.findById(idProduct);

    res.json(productFound);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { idProduct } = req.params;

    const product = await Product.findByIdAndUpdate(idProduct, req.body, {
      new: true,
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { idProduct } = req.params;

    await Product.findByIdAndDelete(idProduct);

    res.status(200).json(`The product had been removed`);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
