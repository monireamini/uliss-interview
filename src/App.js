import './App.css';
import Sidebar from "./components/sidebar/sidebar";
import Card from "./components/card/card";

function App() {

  return (
      <>
        <Sidebar/>
        <div className="width-sidebar">
          <Card/>
        </div>
      </>
  );
}

export default App;
