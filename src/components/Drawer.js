import Totalamount from "./totalamount/Totalamount";



function Drawer({ onClose, onRemove, items = [], totalPrice}) {

  /* const utills = () => items?.reduce((total, value) => total + Number(value?.price), 0); */

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex align-center justify-between">CART
          <img onClick={onClose}
            className="remove-btn mr-15"
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>
        <div className="items" >
          {items.map((obj) => (
            <div>

              <div className="cartItem d-flex align-center mb-20">
                <div className="cartItemImg">
                  <img
                    className="mr-15"
                    width={70}
                    height={70}
                    src={(obj.imageUrl)}
                    alt="cartItem"
                  />
                </div>
                <div className="mr-10">
                  <p>{obj.name}</p>
                  <p>
                    <b>{obj.price} rub</b>
                  </p>
                </div>
                <img
                  onClick={() => onRemove(obj.id)}
                  className="remove-btn mr-15"
                  src="/img/btn-remove.svg"
                  alt="close"

                />
              </div>
            </div>
          ))}

        </div>
        <div className="cartTotalBlock">
          <ul >
            <li className="d-flex" >
              <span>Total:</span>
              <div></div>
              <b >
                <Totalamount price={totalPrice} />
              </b>
            </li>
            <li className="d-flex">
              <span>Tax 5%:</span>
              <div></div>
              <b><Totalamount price={(totalPrice*5)/100} /> </b>
            </li>
          </ul>
          <button className="redButton" style={{ border: "1px solid red" }}>Сheckout</button>

        </div>
      </div>
    </div>
  );
}
export default Drawer;