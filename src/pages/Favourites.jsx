import Card from "../components/Card/Card";


function Favourites({items, onAddToFavourite}) {


    return (

        <div className="content p-40 ">
            <div className="d-flex align-center justify-between mb-40">
                <div className="content p-40 ">
                    <h1>My bookmarks</h1>
                </div>
                
            </div>

            <div className="d-flex justify-around flex-wrap">
            {items.map((item) => {
              return (<Card

            /* name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            id = {item.id} */
            src="./img/btn-plus.svg"
            src2="./img/btn-checked.svg"
            key={item.imageUrl} 
            favourited = {true}
            onFavourite={onAddToFavourite}
            {... item}
            
        />)

        })}
                
            </div>
        </div>


    )
};

export default Favourites;
