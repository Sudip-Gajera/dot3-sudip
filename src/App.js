import { Provider } from "react-redux";
import MyData from "./components/MyData";
import { configureStore } from "./redux/store";

function App() {

  const store = configureStore();

  return (
    <Provider store={store}>
      <MyData />
    </Provider>
  );
}

export default App;
