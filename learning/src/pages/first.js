import MyList from "../components/listComponent";
import {useCallback, useEffect, useState} from "react";
import {getData} from "../store/services/service";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchData} from "../store/actions/list.actions";

export default function FirstPage() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    // const fetchRows = useCallback(
    //     bindActionCreators(fetchData, dispatch),
    //     [dispatch]
    // );

    useEffect(() => {
        getData({search: searchValue}).then(res => {
            dispatch(fetchData(res, "first"));
        });
    }, [searchValue]);
    return (
        <MyList branch="first" setSearchValue={setSearchValue}/>
    )
}