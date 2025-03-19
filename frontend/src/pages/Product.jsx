import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";


const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* product Images  */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                alt="product_images"
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="cur_image" />
          </div>
        </div>

        {/* Product Info  */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_dull_icon} alt="no_star" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-3 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 sm:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-6">
            <p>Select Size</p>
            <div className="flex gap-2">
              {
                productData.sizes.map((item, inedx) => (
                  <button onClick={()=>setSize(item)} key={inedx} className={`py-1.5 px-3 cursor-pointer bg-gray-100 ${item === size ? 'border border-orange-500' : ''}`}>{item}</button>
                ))
              }
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delievry is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & review section  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-400 px-5 py-3 text-sm">Description</b>
          <p className="border border-gray-400 px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-400 px-6 py-6 text-sm text-gray-500">
          <p>An e-commerce website is an online platform that faciliates the buying and selling of products or services over the internet.It serves as a virtual marketplace where businesses and individuals can shoecse their products, interact with customers, and conduct transactions without the need for a physical presence.E-commerce have gain popularity due to their convenience, accessiblity, and the global reach they offer</p>
          <p>E-coomerce websites typically display product or services along with the detailed descriptions, images, prices and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/* Related product  */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opactiy-0"></div>
  );
};

export default Product;
