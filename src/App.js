import './App.css';
import Sidebar from "./components/sidebar";
import Card from "./components/card";
import Search from "./components/search";
import Slider from "./components/slider";
import {useSelector} from "react-redux";

function App() {
    const cars = useSelector((state) => state.data.cars);
  return (
      <>
        <Sidebar/>
        <div className="width-sidebar">
            <div className="container-max-width">
                <Search/>
                <Slider/>
                <Card cars={cars}/>
            </div>
        </div>
      </>
  );
}

export default App;
