import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Products from '../components/Products/Products';
import {getProducts} from '../redux/actions/productActions';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const productsList = useSelector(state => state.getProducts)
  console.log(productsList)
  return (
    <>
      <Navbar />
      <Banner />
      <Products productsList={productsList} />
      <Footer />
    </>
  )
}
