import React from 'react';
import axios from 'axios';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { Route } from "react-router-dom"
import Home from './pages/Home';
import Favourites from './pages/Favourites';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setcartOpened] = React.useState(false);

 
  React.useEffect(() => {

    axios.get('https://61225b16d980b40017e0924a.mockapi.io/item').then((res) => {
      setItems(res.data);
    })
    axios.get('https://61225b16d980b40017e0924a.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    })
    axios.get('https://61225b16d980b40017e0924a.mockapi.io/favourites').then((res) => {
      setFavourites(res.data)
    })

    
  }, [])

  const onAddToCart = (obj) => {
    
    axios.post('https://61225b16d980b40017e0924a.mockapi.io/cart', obj)

    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://61225b16d980b40017e0924a.mockapi.io/cart/${id}`)

    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  const onAddToFavourite = async (obj) => {
    try {
      if(favourites.find((favObj)=> favObj.id == obj.id) ){
        
        axios.delete(`https://61225b16d980b40017e0924a.mockapi.io/favourites/${obj.id}`)
        /* setFavourites((prev) => prev.filter((item) => item.id !== obj.id)); */
      } else {
        const {data} = await axios.post('https://61225b16d980b40017e0924a.mockapi.io/favourites', obj);// {data} это испльзуется деструктуризация
        setFavourites((prev) => [... prev, data]);
      }
    } catch (error) {
      alert("Failed to add in favorite !!!")
    }  
  }

  const onChangeSaerchInput = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (

    <div className="wrapper clear">

      {cartOpened ? <Drawer items={cartItems} onClose={() => { setcartOpened(false); }} onRemove={onRemoveItem} /> : null}

      <Header
        onClickCart={() => { setcartOpened(true); }}
      />
      <div>
          <img src="/img/Splash_ screen.png" width="100%" height={270} alt="Splash_ screen" />
      </div>
     
      <Route path="/" exact>
        <Home 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        onChangeSaerchInput={onChangeSaerchInput} 
        items={items} 
        onAddToFavourite={onAddToFavourite} 
        onAddToCart={onAddToCart} />
      </Route>

      <Route path="/favourites" exact >
        <Favourites items={favourites} onAddToFavourite={onAddToFavourite} />
      </Route>
    </div>
  );
}

export default App;
