import React from "react";
import { nanoid } from 'nanoid';

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    {
    /* display an <a> tag for each link here */
    links.map((link) => <a href={`#${link}`} key={nanoid()}>{link}</a>)
    }
  </nav>);
}

export default NavBar;
