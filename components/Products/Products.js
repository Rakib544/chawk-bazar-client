import React from 'react';

const Products = ({ productsList }) => {
    const { loading, products, error } = productsList;
    console.log(loading, products)
    return (
        <div>
            <h2>Our Latest Products</h2>
            {
                loading
                    ? <h2>Loading...</h2>
                    : products.map(product => <h1>{product.name}</h1>)
            }
        </div>
    );
};

export default Products;