import {useEffect, useState} from "react";
import {getData} from "../services/service";
import MyList from "../components/listComponent";

export default function SecondPage() {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getData({search: searchValue}).then(res => {
            setData(res)
        });
    }, [searchValue]);
    return (
        <MyList data={data} search={searchValue} setSearch={setSearchValue}/>
    )
}