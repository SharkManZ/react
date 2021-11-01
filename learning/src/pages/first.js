import MyList from "../components/listComponent";
import {useCallback, useEffect, useState} from "react";
import {getData} from "../store/services/service";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchData} from "../store/actions/list.actions";

export default function FirstPage() {
    const dispatch = useDispatch();
    // const fetchRows = useCallback(
    //     bindActionCreators(fetchData, dispatch),
    //     [dispatch]
    // );
    const search = useSelector(state => state.first.search);
    useEffect(() => {
        getData({search: search}).then(res => {
            dispatch(fetchData(res, "first"));
        });
    }, [search]);
    return (
        <MyList branch="first"/>
    )
}