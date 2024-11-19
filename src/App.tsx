import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Footer from "./components/Footer/Footer";
import Generation from "./components/Generation/Generation";
import OptionList from "./components/OptionsList/OptionsList";
import Title from "./components/Title/Title";
import { OptionsProvider } from "./context/OptionsContext ";

const App = () => {
  return (
    <OptionsProvider>
      <div className="app">
        <div className="app-box">
          <Title />
          <OptionList />
          <AddItem />
          <Generation />
        </div>
        <Footer />
      </div>
    </OptionsProvider>
  );
};

export default App;
