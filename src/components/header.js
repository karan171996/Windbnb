import Logo from "../content/logo.png";
import { FilterSearch } from "./filterSearch";
import "./header.css";

export const Header = ({}) => {
  return (
    <header>
      <div className="image-container">
        <img src={Logo} />
      </div>
      <div className="filter-search">
        <FilterSearch />
      </div>
    </header>
  );
};
