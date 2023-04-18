import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Card from "./components/card/card";
import Search from "./components/search/search";

function App() {

  return (
      <>
        <Sidebar/>
        <div className="width-sidebar">
            <Search/>
          <Card/>
        </div>
      </>
  );
}

export default App;
