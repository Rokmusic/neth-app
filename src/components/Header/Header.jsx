import React from "react";
import {useSelector} from "react-redux";
import DatePickerClass from "../Date/Date";
import {Button} from "@consta/uikit/Button";
import SelectStatus from "../SelectStatus/SelectStatus";
import SelectZone from "../SelectZone/SelectZone";
import InputName from "../InputName/InputName";
import {HeaderSearchBar} from '@consta/uikit/Header';
import classes from "./Header.module.css"
import {IconDownload} from "@consta/uikit/IconDownload";
import {IconInfo} from "@consta/uikit/IconInfo";
import {IconKebab} from "@consta/uikit/IconKebab";

const Header = () => {
    const app = useSelector(state => state.app);

    return (

        <div className={classes.container}>
            <div className={classes.topContainer}>
                <h2 id="h2">{app.headline}</h2>
                <div className={classes.navContainer}>
                        <HeaderSearchBar
                            placeholder="я ищу"
                            label="поиск"
                        />
                            <Button
                                label="Файлы"
                                iconLeft={IconDownload}
                                size="s"
                            />
                            <Button
                                iconLeft={IconInfo}
                                size="s"
                            />
                            <Button

                                iconLeft={IconKebab}
                                size="s"
                            />

                </div>
            </div>
                {<DatePickerClass/>}
            <div className={classes.containerInputs}>
                <InputName/>
                <SelectStatus/>
                <SelectZone/>
            </div>
        </div>
    );
}


export default Header