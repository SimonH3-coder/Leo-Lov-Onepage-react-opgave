import { Navcomponent } from "./components/navbar/Navcomponent.tsx";
import { HeaderComponent } from "./components/header/HeaderComponent.tsx";
import { MainComponent } from "./components/main/Maincomponent.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Navcomponent />
      <HeaderComponent />
      <MainComponent />
    </>
  );
}

export default App;
