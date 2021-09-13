import {Link} from "react-router-dom"


function Header (props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <Link to ="/">
        <div className="d-flex align-center">
          <img src="/img/logo1.png" width={35} height={25} alt="logo" />
          <img src="/img/logo2.png" width={35} height={25} alt="logo" />
        <div>
            <h3 className="text-uppercase">React Drones</h3>
            <p className="opacity-5">Best drone shop</p>
        </div>
        </div>
        </Link>
        <ul className="d-flex ">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <svg width="30" height="18" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.85559 1H6.71226L9.96622 17.2577C10.0772 17.8167 10.3814 18.3188 10.8253 18.6762C11.2692 19.0336 11.8247 19.2234 12.3946 19.2125H24.1962C24.7661 19.2234 25.3216 19.0336 25.7655 18.6762C26.2094 18.3188 26.5135 17.8167 26.6246 17.2577L28.5672 7.07083H7.92642" stroke="#09013C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
           <span >1205 rub.</span>
          </li>
          <li className="cu-p">
            <Link to ="/favourites">
            <img width = {18} height = {15} src = "./img/heart.svg" alt = "bookmarks"/>
            </Link>
          </li>
        </ul>
        
      </header>

    );
}
export default Header;