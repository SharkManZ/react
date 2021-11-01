import './App.css';
import {useEffect, useState} from "react";
import {getData} from "./services/service";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then(res => {
            setData(res)
        });
    }, []);
    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
