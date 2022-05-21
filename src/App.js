import "./App.scss";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ListItems from "./components/ListItems";
import { Context } from "./components/Context";

const App = () => {
  return (
    <main>
      <Header />
      <section>
        <Context>
          <InputForm />
          <ListItems />
        </Context>
      </section>
    </main>
  );
};

export default App;
