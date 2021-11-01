import {useState} from "react";
import {useSelector} from "react-redux";

export default function MyList({branch, setSearchValue}) {
    const [search, setSearch] = useState('');
    const data = useSelector(state => state[branch].rows);
    const onSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const onSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            setSearchValue(search);
        }
    }
    return (
        <div>
            <input onChange={onSearchChange} onKeyPress={onSearchKeyPress} type="text" value={search}/>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}