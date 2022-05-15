import React, {useState} from "react";
import {DatePicker} from "@consta/uikit/DatePickerCanary";
import {useDispatch, useSelector} from "react-redux";
import {addDateToState} from "../../appSlice";
import {IconCalendar} from "@consta/uikit/IconCalendar";
import classes from "./Date.module.css"

const DatePickerClass = () => {
    const app = useSelector(state => state.app);
    const dispatch = useDispatch();

    const addDateToSlice = (value) => dispatch((addDateToState(value)))

    return (
        <DatePicker
            className={classes.datePicker}
            label="Период действия" labelPosition="top"
            type="date-range"
            rightSide={[IconCalendar, IconCalendar]}
            size="s"
            value={app.date}
            onChange={({ value}) => addDateToSlice(value)}
        />
    );

};

export default DatePickerClass