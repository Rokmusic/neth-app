import React, {useEffect, useState} from "react";
import { Table } from '@consta/uikit/Table';
import {Button} from "@consta/uikit/Button";
import {persons} from '../api';
import {useDispatch, useSelector} from "react-redux";
import {
    addId,
    addRowLow,
    addRows,
    addRowUp,
    changeCounter,
    deleteRow,
    editRow,
    lowCounter,
    upCounter
} from "../appSlice";
import {IconKebab} from "@consta/uikit/IconKebab";
import {ContextMenu} from "@consta/uikit/ContextMenu";
import {IconAdd} from "@consta/uikit/IconAdd";
import {IconTrash} from "@consta/uikit/IconTrash";
import {IconAddToComparison} from "@consta/uikit/IconAddToComparison";
import {IconEdit} from "@consta/uikit/IconEdit";


const Body = () => {
    const app = useSelector(state => state.app);
    const dispatch = useDispatch();
    const [contextMenuState, setContextMenuState] = useState({});
    // const [rows, setRows] = useState([...app.rows]);

    const counter = 1

    const actionItems = [
        {
            type: 'addUp',
            name: 'Добавить строку выше',
            group: 1,
            icon: IconAdd,
        },
        {
            type: 'addDown',
            name: 'Добавить строку ниже',
            group: 1,
            icon: IconAdd,
        },
        {
            type: 'change',
            name: 'Редактировать',
            group: 2,
            icon: IconEdit,
        },
        {
            type: 'remove',
            name: 'Удалить',
            group: 2,
            icon: IconTrash,
        },
    ];

    const columns = [
        {
            title: '#',
            accessor: 'id',
            align: 'center',
            width: 100,
            sortable: true,
        },
        {
            title: 'Вид этапа',
            accessor: 'name',
            sortable: true,
            width: 300,

        },
        {
            title: 'Выходное изделие',
            'columns': [
                {
                    title: 'Артикул',
                    accessor: 'article',
                    sortable: true,
                },
                {
                    title: 'номенклатура',
                    accessor: 'title',

                },
                {
                    title: 'Характеристика',
                    width: 700,
                    'columns': [
                        {
                            title: '',
                            accessor: 'stat',
                        },
                        {
                            title: '',
                            renderCell: (row) => {

                                const setMenuState = (isOpen) => () =>

                                    setContextMenuState((prevState) => {

                                        if (prevState[row.id]) {

                                            return {
                                                ...prevState,
                                                [row.id]: {
                                                    ...prevState[row.id],
                                                    isOpen,
                                                },
                                            };
                                        }

                                        return {
                                            ...prevState,
                                            [row.id]: {
                                                ref: React.createRef(HTMLButtonElement),
                                                isOpen,
                                            },
                                        };
                                    });

                                const menuProps = contextMenuState[row.id];

                                if (menuProps === undefined) {
                                    setMenuState(false)();

                                    return null;
                                }

                                const newArr = []

                                const clickButton = (id) => {

                                    persons.getPerson(app.counter)
                                        .then(res => {
                                            const newRow = {
                                                id: res.id,
                                                name: res.name,
                                                article: res.body,
                                                title: res.email,
                                                stat: res.email,
                                            }
                                            newArr.push(newRow)
                                        })
                                    const value = id
                                    const addIdToState = () => dispatch((addId(value)))
                                    addIdToState(value)
                                }

                                const editTable = (t) => {
                                    const addRowUpToState = () => dispatch((addRowUp(value)))
                                    const addRowLowToState = () => dispatch((addRowLow(value)))
                                    const deleteRowInState = () => dispatch((deleteRow(index)))
                                    const editRowInState = () => dispatch((editRow(index)))
                                    const upCounterInState = () => dispatch((upCounter(counter)))


                                    const index = [...app.rows].findIndex(id => id.id === app.id)
                                    const value = [...newArr, index]

                                    switch(t.target.innerHTML) {
                                        case actionItems[0].name:
                                            addRowUpToState(value)
                                            upCounterInState(counter)
                                            break
                                        case actionItems[1].name:
                                            addRowLowToState(value)
                                            upCounterInState(counter)
                                            break
                                        case actionItems[2].name:
                                            editRowInState(index)
                                            break
                                        case actionItems[3].name:
                                            deleteRowInState(index)
                                            break
                                    }

                                }

                                return (
                                    <>
                                        <Button
                                            ref={menuProps.ref}
                                            size="xs"
                                            view="clear"
                                            iconLeft={IconKebab}
                                            onlyIcon
                                            // getOnClick={funcCounter}
                                            onClick={setMenuState(true)}
                                        />
                                        {menuProps.isOpen && (
                                            <ContextMenu
                                                anchorRef={menuProps.ref}
                                                size="s"
                                                offset={4}
                                                items={actionItems}
                                                getLabel={(item) => item.name}
                                                getGroupId={(item) => item.group}
                                                getLeftSideBar={({ icon: Icon }) => <Icon view="secondary" size="xs" />}
                                                // getOnClick={handleContextMenuClick(setMenuState(false), row.id)}
                                                getOnClick={clickButton(row.id)}
                                                onClick={editTable}
                                                direction="downLeft"
                                                possibleDirections={['upLeft', 'downLeft']}
                                                onClickOutside={setMenuState(false)}
                                            />
                                        )}
                                    </>
                                );
                            },
                        },

                    ]
                },


            ]
        },



    ];

    // useEffect(() => {
    //     console.log(app.rows.length)
    //
    // }, [])

    useEffect(() => {



        persons.getAllPersons()
            .then(res => {

                const allRows = []

                for (let i = 0; i <= res.length - 1; i++) {
                    const oneRow = {
                        id: res[i].id,
                        name: res[i].name,
                        article: res[i].body,
                        title: res[i].email,
                        stat: res[i].email,
                        // actions: addButton(res[i].name, res, addButton)
                    }
                    allRows.push(oneRow)
                }
                const addAppRows = () => dispatch((addRows(allRows)))
                addAppRows(allRows)

                const arrLength =  allRows.length - 1
                const newCounter = allRows[arrLength].id + 1
                const changeCounterInState = () => dispatch((changeCounter(newCounter)))
                changeCounterInState(newCounter)

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