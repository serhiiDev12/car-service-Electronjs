import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import {useEffect, useState} from "react";
import Parts from "./pages/Parts";
import {fetchProducts} from "./service";
import AddPartForm from "./components/AddPartForm";

function App() {
  const [screen, setScreen] = useState(1);

  const changeScreen = async (val) => {
      console.log(val)
      setScreen(val)
  }

  const removePart = (id) => {
      console.log(id)
  }

  return (
    <div className="w-full flex h-screen">
      <div className="flex flex-col w-1/2 lg:w-1/5 h-full">
        <Navigation changeScreen={changeScreen} />
      </div>
      <div className="w-full overflow-x-hidden  overflow-y-scroll">
        {
          screen === 1 &&
            <Parts onRemove={removePart} />
        }
          {
              screen === 2 &&
              <AddPartForm />
          }
      </div>
    </div>
  );
}

export default App;
