import { Component } from "react";
import Logo from "./Logo";
import Links from "./Links";
import Quote from "./Quote";
import Search from "./Search";
import "./style.css";
class Nav extends Component {
//   render() {
//     return (
//       <nav>
//         <div className="container container__nav">
//           <Logo />
//           <Links />
//           <Quote />
//           <Search />
//         </div>
//       </nav>
//     );
//   }
// }
render() {
  return (
    <div className="container__nav nav-container">
      <nav className="nav-box">
        <div className="nav-content">
          <Logo />
          <Links />
          <Quote />
        </div>
      </nav>
    </div>
  );
}
}
export default Nav;
