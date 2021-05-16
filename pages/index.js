import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getProducts} from '../redux/actions/productActions';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const productsList = useSelector(state => state.getProducts)
  const {products, error, loading} = productsList;
  console.log(products)
  return (
    <>
      <h2>Hello World!</h2>
      {
        products.length
      }
    </>
  )
}
