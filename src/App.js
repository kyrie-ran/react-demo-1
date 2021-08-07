import Clock from "./components/Clock";
import Event from "./components/Event";
import List from "./components/List";
import MyForm from "./components/MyForm";
import MySlot from "./components/MySlot";
function App() {
  return (
    <div className="App">
      {/* <Clock date={new Date()}/> */}
      <Clock />
      <Event />
      <List />
      <MyForm />
      <MySlot left={' left'} right={' right'}>
          children
      </MySlot>
    </div>
  );
}

export default App;
