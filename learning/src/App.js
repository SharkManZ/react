import './App.css';
import FirstPage from "./pages/first";
import SecondPage from "./pages/second";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <FirstPage/>
                <SecondPage/>
            </div>
        </Provider>
    );
}

export default App;
