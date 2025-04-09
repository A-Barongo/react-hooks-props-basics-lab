import React from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import About from "./About.js";
import Links from "./Links.js";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);
const { name, city,color, bio, links } = user;
function App() {
  return (
    <div>
      <NavBar />
      <Home name={name} city={city} color={color}/>
      <About bio={bio} />
      <Links github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}

export default App;
