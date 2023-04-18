import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Card from "./components/card/card";
import Search from "./components/search/search";
import Slider from "./components/swiper";

function App() {

  return (
      <>
        <Sidebar/>
        <div className="width-sidebar">
            <Search/>
            <Slider/>
          <Card/>
        </div>
      </>
  );
}

export default App;
