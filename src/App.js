import React from 'react';
import axios from 'axios';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route } from "react-router-dom"
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import {calculateTotalAmount} from './utils/calculateTotalAmount'


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setcartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

 
  React.useEffect(() => {
    async function fetchData() {

    setIsLoading(true);
    
    const itemResponse = await axios.get('https://61225b16d980b40017e0924a.mockapi.io/item')
    const cartResponse = await axios.get('https://61225b16d980b40017e0924a.mockapi.io/cart')
    const favouritesResponse = await axios.get('https://61225b16d980b40017e0924a.mockapi.io/favourites')
      
    setIsLoading(false);

    setItems(itemResponse.data);
    setCartItems(cartResponse.data);
    setFavourites(favouritesResponse.data)
    
  }
  fetchData() 
  }, [])

  const onAddToCart = (obj) => {
    try {
      axios.post('https://61225b16d980b40017e0924a.mockapi.io/cart', obj)

    setCartItems(prev => [...prev, obj]);
    } catch (error) {
      console.log("We cannot add to Cart!"); 
    }
    
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61225b16d980b40017e0924a.mockapi.io/cart/${id}`)

    setCartItems(prev => prev.filter(item =>
     {
      /*  console.log(item); */
      return       item.id !== id}))
     }

  const onAddToFavourite = async (obj) => {
    try {
      if(favourites.find((favObj)=> favObj.id === obj.id) ){
        
        axios.delete(`https://61225b16d980b40017e0924a.mockapi.io/favourites/${obj.id}`)
        /* setFavourites((prev) => prev.filter((item) => item.id !== obj.id)); */
      } else {
        const {data} = await axios.post('https://61225b16d980b40017e0924a.mockapi.io/favourites', obj);// {data} это испльзуется деструктуризация
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Failed to add in favorite !!!")
    }  
  }

  const onChangeSaerchInput = (event) => {
    
    setSearchValue(event.target.value)
  }
  
const totalPrice = calculateTotalAmount(cartItems);


  return (

    <div className="wrapper clear">

      {cartOpened ? <Drawer  totalPrice={totalPrice} items={cartItems} onClose={() => { setcartOpened(false); }} onRemove={onRemoveItem} /> : null}

      <Header
        totalPrice={totalPrice} onClickCart={() => { setcartOpened(true); }} 
      />
      <div>
          <img src="/img/Splash_ screen.png" width="100%" height={270} alt="Splash_ screen" className= "main_img"/>
      </div>
     
      <Route path="/" exact>
          <Home
          onRemoveItem={onRemoveItem} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue} 
          onChangeSaerchInput={onChangeSaerchInput} 
          items={items} 
          onAddToFavourite={onAddToFavourite} 
          onAddToCart={onAddToCart} 
          isLoading ={isLoading}/>
      </Route>

      <Route path="/favourites" exact >
        <Favourites items={favourites} onAddToFavourite={onAddToFavourite} />
      </Route>
    </div>
  );
}

export default App;
