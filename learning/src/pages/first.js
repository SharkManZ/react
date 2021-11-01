import MyList from "../components/listComponent";
import {useEffect, useState} from "react";
import {getData} from "../services/service";

export default function FirstPage() {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        getData({search: searchValue}).then(res => {
            setData(res)
        });
    }, [searchValue]);
    return (
        <MyList data={data} searchValue={searchValue} setSearchValue={setSearchValue}/>
    )
}