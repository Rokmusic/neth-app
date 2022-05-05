import React, {useState} from "react";
import {DatePicker} from "@consta/uikit/DatePickerCanary";
import {IconForward} from "@consta/uikit/IconForward";
import {IconBackward} from "@consta/uikit/IconBackward";
import {useDispatch, useSelector} from "react-redux";
import {addDateToState} from "../appSlice";

const DatePickerClass = () => {
    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    const addDateToSlice = (value) => dispatch((addDateToState(value)))

    return (
        <DatePicker
            type="date-range"
            value={app.date}
            onChange={({ value}) => addDateToSlice(value)}
            leftSide={[IconForward, IconBackward]}
            rightSide={['туда', 'обратно']}
        />
    );

};

export default DatePickerClass