import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';

const ProductDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(`${id}`))
    }, [id])

    const productDetailsList = useSelector(state => state.getProductDetails);
    const { product, loading, error } = productDetailsList;
    console.log(product)
    return (
        <div>
            <h2>This is product details page</h2>
        </div>
    );
};

export default ProductDetails;