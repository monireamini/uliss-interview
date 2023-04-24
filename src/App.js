import './App.css';
import Sidebar from "./components/sidebar";
import Card from "./components/card";
import Search from "./components/search";
import Slider from "./components/slider";
import {useSelector} from "react-redux";
import {useState} from "react";

function App() {
    const initials = useSelector((state) => state.data.cars);
    const [cars, setCars] = useState(initials)

  return (
      <>
        <Sidebar/>
        <div className="width-sidebar">
            <div className="container-max-width">
                <Search setCars={setCars} cars={cars}/>
                <Slider setCars={setCars} cars={cars}/>
                <Card cars={cars}/>
            </div>
        </div>
      </>
  );
}

export default App;
