import { FunctionComponent } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout:FunctionComponent = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shipping-cart">Shipping cart</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;