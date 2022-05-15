import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import DatePickerClass from "../Date/Date";
import Search from "../Search/Search";
import {Button} from "@consta/uikit/Button";
import SelectStatus from "../SelectStatus/SelectStatus";
import SelectZone from "../SelectZone/SelectZone";
import InputName from "../InputName/InputName";
import {HeaderModule, HeaderSearchBar, HeaderButton} from '@consta/uikit/Header';
import classes from "./Header.module.css"
import {IconChat} from "@consta/uikit/IconChat";
import {IconDown} from "@consta/uikit/IconDown";
import IconUploadSizeS from "@consta/uikit/__internal__/cjs-src/icons/IconUpload/IconUpload_size_s";
import {IconUpload} from "@consta/uikit/IconUpload";
import {IconDownload} from "@consta/uikit/IconDownload";
import IconDownloadSizeS from "@consta/uikit/__internal__/cjs-src/icons/IconDownload/IconDownload_size_s";
import IconDownload_size_s from "@consta/uikit/__internal__/src/icons/IconDownload/IconDownload_size_s";
import {IconInfo} from "@consta/uikit/IconInfo";
import {IconBarrier} from "@consta/uikit/IconBarrier";
import {IconArtBrush} from "@consta/uikit/IconArtBrush";
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