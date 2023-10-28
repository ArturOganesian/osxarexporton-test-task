import Header from "./components/Header/Header";
import FirstShow from "./components/FirstShow/FirstShow";
import "./App.css";
import AfterUsing from "./components/afterUsing/AfterUsing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstShow />
      <AfterUsing />

      <Footer />
    </div>
  );
}

export default App;
