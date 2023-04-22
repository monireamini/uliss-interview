import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Card from "./components/card/card";
import Search from "./components/search/search";
import Slider from "./components/slider";

function App() {

  return (
      <>
        <Sidebar/>
        <div className="width-sidebar">
            <div className="container-max-width">
                <Search/>
                <Slider/>
                <Card/>
            </div>
        </div>
      </>
  );
}

export default App;
