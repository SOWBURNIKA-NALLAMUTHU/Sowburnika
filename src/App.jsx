import React from "react";
import logo from "./logo.svg";
import "./App.css";
/*import SignUpPage from "./day5/SignUpPage";
/*import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
/*export default App; //Default exports*/

/*import HelloWorld from "./day2/HelloWorld";

const App = () => {
  return <HelloWorld />;
};*/
/*export default App;
/*import Cricket from "./day3/Cricket";

const App = () => {
  return <Cricket />;
};

export default App;*/

/*import Button from "./day3/Button";
function App() {
  return (
    <div className="flex space-x-10 my-8">
      <Button color="red">Red Button</Button>
      <Button color="yellow">Yellow Button</Button>
      <Button color="blue">Blue Button</Button>
      <Button color="green">Green Button</Button>
    </div>
  );
}*/

/*import { useState } from "react";
import Cart from "./day4/Cart";
import Menu from "./day4/Menu";
import Navbar from "./day4/Navbar";
import categories from "./day4/products";
function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);

  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };

  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };

  return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}

/*import DynamicRendering from "./day3/DynamicRendering";
const App = () => {
  return <DynamicRendering />;
};
*/
/*import Counter from "./day3/Counter";

const App = () => {
  return <Counter />;
};
*/
/*import ToggleMessage from "./day3/ToggleMessage";

const App = () => {
  return <ToggleMessage />;
};*/
/*import GokuTransformation from "./day3/GokuTransformation";

const App = () => {
  return <GokuTransformation />;
};*/

// src/App.js
/*import LoginPage from "./day5/LoginPage";
import LoginPageTwo from "./day5/LoginPageTwo";

function App() {
  return (
    <div>
      <LoginPageTwo />
    </div>
  );
}

/*import Style from "./day2/Style";

function App() {
  return (
    <div>
      <Style />
    </div>
  );
}*/
/*import Form from "./day2/Form";

const App = () => {
  return <Form />;
};
*/
import Fruit from "./day5/Fruit";
const App = () => {
  return <Fruit />;
};
export default App;
