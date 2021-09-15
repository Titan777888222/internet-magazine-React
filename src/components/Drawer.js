
function Drawer({onClose, onRemove, items=[] }) {
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
                <b>{ obj.price } rub</b>
              </p>
            </div>
            <img
              onClick = {() => onRemove(obj.id)}
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
              <b >0 rub</b>
            </li>
            <li className="d-flex">
              <span>Tax 5%:</span>
              <div></div>
              <b>0 rub</b>
            </li>
          </ul>
          <button className="greenButton">Сheckout</button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;