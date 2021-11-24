import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"


function Card({ 
  id, 
  imageUrl, 
  name, 
  price, 
  onFavourite, 
  onPlus, 
  onDeleteItem, 
  favourited = false,
  isLoading /* = true */  /* loading */
}) {
  console.log(":::", isLoading)

  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);
  
  const onClickFavourite = () => {
    onFavourite({id, imageUrl, name, price});
    setIsFavourite(!isFavourite);
  }

  const onClickPlus = () => {
    onPlus({id, imageUrl, name, price});
    setIsAdded(!isAdded);
  } 

  

  return (
    <div className={styles.card}>
      {console.log(isLoading)}
     { /* true */isLoading/* false */ /* true */ /* -ContentLoader */     /* loading */
         ? 
     <ContentLoader 
        speed={2}
        width={160}
        height={234}
        viewBox="0 0 150 237"
        backgroundColor="#e6e6e6"
        foregroundColor="#fdeded"
        /*{...props}*/ 
      >
        <rect x="164" y="23" rx="3" ry="3" width="150" height="90" /> 
        <rect x="0" y="17" rx="10" ry="10" width="150" height="90" /> 
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
        <rect x="59" y="76" rx="0" ry="0" width="2" height="1" /> 
        <rect x="0" y="125" rx="4" ry="4" width="150" height="13" /> 
        <rect x="0" y="147" rx="4" ry="4" width="102" height="13" /> 
        <rect x="0" y="205" rx="4" ry="4" width="80" height="24" /> 
        <rect x="122" y="200" rx="4" ry="4" width="28" height="28" />
    </ContentLoader> 
    :
     <>  <div  className={styles.favourite}>
              <img onClick={onClickFavourite} src= {isFavourite  ? "/img/liked.svg" : "/img/unliked.svg"}  alt="Unliked" />
              </div>
              <img
                width={133}
                height={112}
                alt="your foot"
                src={imageUrl}
              />
              <h5>{name}</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                  <span>Price:</span>
                  <b>{price} rub</b>
                </div>
                {isAdded ?
                // ToDo set red minus icon
                // ToDo take buttons 
                <img
                className={styles.plus}
                onClick={()=>{setIsAdded(false); onDeleteItem(id)}}
                src="./img/btn-minus.png"
                alt="Delete" />
                
                : <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isAdded === true ? "./img/btn-minus.png" : "./img/btn-plus.png"}
                alt="Plus" /> }
          </div>
        </>
    }
      
    </div>
    

  );
}
export default Card;