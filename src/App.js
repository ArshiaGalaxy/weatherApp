import { Provider } from "react-redux";
import Background from "./components/background";
import DateTime from "./components/date&time";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Background>
        <DateTime/>
      </Background>
    </Provider>
  );
}

export default App;
