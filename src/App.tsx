import { Navcomponent } from "./components/navbar/Navcomponent.tsx";
import { HeaderComponent } from "./components/header/Headercomponent.tsx";
import { MainComponent } from "./components/main/Maincomponent.tsx";
import { FooterComponent } from "./components/footer/Footercomponent.tsx";
import "./App.css";

function App() {
  return (
    <>
      <Navcomponent />
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

export default App;
