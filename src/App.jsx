import React from "react";
import logo from "./logo.svg";
import "./App.css";
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
export default App; //Default exports*/

/*import HelloWorld from "./day2/HelloWorld";

const App = () => {
  return <HelloWorld />;
};

export default App;*/

/*import Cricket from "./day3/Cricket";

const App = () => {
  return <Cricket />;
};

export default App;*/

import Button from "./day3/Button";
function App() {
  return (
    <div className="flex space-x-10 my-8">
      <Button color="red">Red Button</Button>
      <Button color="yellow">Yellow Button</Button>
      <Button color="blue">Blue Button</Button>
      <Button color="green">Green Button</Button>
    </div>
  );
}

export default App;
