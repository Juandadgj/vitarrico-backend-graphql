import Product from "../../../model/Product";

const productResolver = {
    products: async () => await Product.find(),
    createProduct: async ({ product }) => {
        if (!product) {
          throw new Error('Fields required!');
        }
        try {
          const newProduct = new Product(product)
          console.log(newProduct);
          return await newProduct.save();
        } catch (error) {
          console.log(error);
        }
      }
}

export default productResolver;
