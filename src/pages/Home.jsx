
import Card from "../components/Card/Card"

function Home ({
    searchValue, 
    setSearchValue, 
    onChangeSaerchInput, 
    items, 
    onAddToFavourite, 
    onAddToCart
}) {
       
    
    return (
     
    <div className="content p-40 ">
    <div className="search d-flex align-center justify-between mb-40">
        <h1> {searchValue ? `Search on request:"${searchValue}"` : 'All drones'}</h1>
        <div className="search-block d-flex">
        <img src="/img/search.svg" alt="search" />
        {searchValue && <img onClick={() => setSearchValue('')} className="clear remove-btn mr-15" src="/img/btn-remove.svg" alt="clear" />}

        <input onChange={onChangeSaerchInput} value={searchValue} placeholder="Search..." />
        </div>
    </div>

    <div className="cards_block d-flex justify-between flex-wrap">
    
    
        {items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => {
        return (<Card
            
            src="./img/btn-plus.svg"
            src2="./img/btn-checked.svg"
            key={item.imageUrl} 
            onFavourite={(obj) => {

            onAddToFavourite(obj)
            }}

            onPlus={(obj) => onAddToCart(obj)}
            {... item}
        />)

        })}
    </div>
    </div>
    

)};

export default Home;
