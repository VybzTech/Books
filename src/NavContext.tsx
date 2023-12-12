import { createContext } from "react";

// const [nav, setNav] = React.useState("Books Library");

type NavContextProps = {
  nav: string;
  setNav: React.Dispatch<React.SetStateAction<string[]>>;
};
const NavContext = createContext<NavContextProps | undefined>(undefined);
export default NavContext;
