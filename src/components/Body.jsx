import React, {useEffect} from "react";
import { Table } from '@consta/uikit/Table';
import {columns, newData, persons} from '../api';
import {useDispatch, useSelector} from "react-redux";
import {addRows} from "../appSlice";



const Body = () => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        persons.getAllPersons()

            .then(res => {
                for (let i = 0; i <= res.length - 1; i++) {

                    const oneRow = {
                        id: res[i].id,
                        name: res[i].name,
                        article: res[i].body,
                        title: res[i].email,
                        stat: res[i].email,
                    }

                    const addAppRows = () => dispatch((addRows(oneRow)))
                    addAppRows(oneRow)
                }
            })

    }, []);

    return (
        <div>
                <Table
                    columns={columns}
                    rows={app.rows}
                />
        </div>
    );
}

export default Body