import {Select} from "@consta/uikit/Select";
import React from "react";
import {changeStat, changeZone} from "../../appSlice";
import {useDispatch, useSelector} from "react-redux";

import classes from "./SelectZone.module.css";
import {isEmpty} from "@consta/uikit/__internal__/cjs-src/utils/object";

const SelectZone = () => {

    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    const itemsZone = [
        {
            label: 'Производственный участок',
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


    function buttonZoneType (value) {
        const changeZoneToState = () => dispatch((changeZone(value)))
        changeZoneToState(value)
    }

    function clearButton () {
        const value = {}
        if (isEmpty(app.zoneType)) {
            return null
        } else {
            const changeZoneToState = () => dispatch((changeZone(value)))
            changeZoneToState(value)
        }
    }


    return (
        <div className={classes.container}>
            <Select
                // className={classes.Select}
                placeholder="Выберите Значение"
                label="Тип зоны"
                labelPosition="top"
                size="s"
                items={itemsZone}
                value={app.zoneType}
                onChange={({ value }) => buttonZoneType(value)}
            />
            <span
                className="clearButton"
                onClick={clearButton}
            />
        </div>
    )
}

export default SelectZone
