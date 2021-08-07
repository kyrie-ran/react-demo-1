import Clock from "./components/Clock";
import Event from "./components/Event";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      {/* <Clock date={new Date()}/> */}
      <Clock />
      <Event />
      <List />
    </div>
  );
}

export default App;
