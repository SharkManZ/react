import {useCallback, useEffect, useState} from "react";
import {getData} from "../store/services/service";
import MyList from "../components/listComponent";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchData} from "../store/actions/list.actions";

export default function SecondPage() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const fetchRows = useCallback(
        bindActionCreators(fetchData, dispatch),
        [dispatch]
    );
    useEffect(() => {
        getData({search: searchValue}).then(res => {
            fetchRows(res, "second");
        });
    }, [searchValue]);
    return (
        <MyList branch="second" setSearchValue={setSearchValue}/>
    )
}