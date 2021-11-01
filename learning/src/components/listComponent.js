import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../store/actions/list.actions";

export default function MyList({branch}) {
    const [searchText, setSearchText] = useState('');
    const data = useSelector(state => state[branch].rows);
    const onSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    const dispatch = useDispatch();

    const onSearchKeyPress = (event) => {
        if (event.key === 'Enter') {
            dispatch(setSearch(searchText, branch));
            //setSearchValue(search);
        }
    }
    return (
        <div>
            <input onChange={onSearchChange} onKeyPress={onSearchKeyPress} type="text" value={searchText}/>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}