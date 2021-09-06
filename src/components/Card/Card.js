import React from "react";
import styles from "./Card.module.scss";


function Card({ id, imageUrl, name, price, onFavourite, onPlus, favourited = false }) {
  const [isAdded, setisAdded] = React.useState(false);
  const [isFavourite, setIsFavourite] = React.useState(favourited);
  
  const onClickFavourite = () => {
    onFavourite({id, imageUrl, name, price});
    setIsFavourite(!isFavourite);
  }

  const onClickPlus = () => {
    onPlus({imageUrl, name, price});
    setisAdded(!isAdded);
  } 


  return (
    <div className={styles.card}>
      <div  className={styles.favourite}>
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
          <b>{price} rub.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded === true ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
          alt="Plus" />

      </div>
    </div>

  );
}
export default Card;