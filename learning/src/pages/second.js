import {useCallback, useEffect, useState} from "react";
import {getData} from "../store/services/service";
import MyList from "../components/listComponent";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchData} from "../store/actions/list.actions";

export default function SecondPage() {
    const dispatch = useDispatch();
    // const fetchRows = useCallback(
    //     bindActionCreators(fetchData, dispatch),
    //     [dispatch]
    // );
    const search = useSelector(state => state.second.search);
    useEffect(() => {
        getData({search: search}).then(res => {
            dispatch(fetchData(res, "second"));
        });
    }, [search]);
    return (
        <MyList branch="second"/>
    )
}