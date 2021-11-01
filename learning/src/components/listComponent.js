import {useState} from "react";

export default function MyList({data, searchValue, setSearchValue}) {
    const [search, setSearch] = useState('');

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