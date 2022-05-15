import {Select} from "@consta/uikit/Select";
import React from "react";
import {render} from "react-dom";
import {changeStat} from "../../appSlice";
import {useDispatch, useSelector} from "react-redux";
import classes from "./SelectStatus.module.css"

const SelectStatus = () => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch();


    const itemsStatus = [
        {
            label: 'Используется',
            id: 1,
        },
        {
            label: 'Не используется',
            id: 2,
        },
        {
            label: 'Третий',
            id: 3,
        },
    ];

    function buttonSelect (value) {
        const changeStatusToState = () => dispatch((changeStat(value)))
        changeStatusToState(value)
    }

    function clearButton () {
        const value = {}
        const changeStatusToState = () => dispatch((changeStat(value)))
        changeStatusToState(value)
    }

    return (
        <div className={classes.container}>
            <Select
                // className={classes.select}
                placeholder="Выберите Значение"
                label="Статус"
                labelPosition="top"
                size="s"
                items={itemsStatus}
                value={app.status}
                onChange={({ value }) => buttonSelect(value)}
            />
            <span
                className="clearButton"
                onClick={clearButton}
            />
        </div>
    );
}

export default SelectStatus