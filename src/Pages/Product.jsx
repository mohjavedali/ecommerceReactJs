import React, { useContext } from 'react';
import './CSS/Product.css';
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDispaly from '../Components/ProductDisplay/ProductDispaly';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <div className=''>
            <Breadcrum product={product} />
            <ProductDispaly product={product} />
            <DescriptionBox />
            <RelatedProduct />
        </div>
    )
}

export default Product