import React, {useState, Suspense, lazy}  from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const Home = lazy(() => import('./components/Home'))
  const Menu = lazy(() => import('./components/menuCompenents/Menu'))
  const Product = lazy(() => import('./components/menuCompenents/Product'))
  const Products = lazy(() => import('./components/menuCompenents/Products'))

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedProduct, setselectedProduct] = useState({})
 
  const selectCategoryHandler = (category) => {
    setSelectedCategory(category)
  }
 
  const selectProductHandler = (selectedProduct) => {
    setselectedProduct(selectedProduct)
  }
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path='/' element={
          <Suspense fallback={<div style={{height:'100vh', width:'100%', textAlign:'center', fontSize:'65px'}}>Loading...</div>}>
            <Home/>
          </Suspense>
          }/>
          <Route path='/menu' element={ 
            <Suspense fallback={<div style={{height:'100vh', width:'100%', textAlign:'center', fontSize:'65px'}}>Loading...</div>}>
              <Menu selectCategoryHandler={selectCategoryHandler}/>
            </Suspense>} 
          />
          <Route path='/products' element={ 
            <Suspense fallback={<div style={{height:'100vh', width:'100%', textAlign:'center', fontSize:'65px'}}>Loading...</div>}>
              <Products  selectedCategory={selectedCategory} selectProductHandler={selectProductHandler}/>
            </Suspense>
          }/>
          <Route path='/product-details' element={
            <Suspense fallback={<div style={{height:'100vh', width:'100%', textAlign:'center', fontSize:'65px'}}>Loading...</div>}>
             <Product   selectedProduct={selectedProduct}/>
            </Suspense>
          }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
