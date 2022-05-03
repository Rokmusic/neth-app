import React from "react";
import { Table } from '@consta/uikit/Table';
import {columns, newData, persons} from '../data';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import {addRowsTable} from "../actions";



const Body = ({rows, addRowTable, addRowsTable}) => {

    window.onload = function() {
        addRowsTable(newData)
    };

    return (
        <div>
            <button
                onClick={addRowTable}
            >addRow
            </button>
                <Table
                    columns={columns}
                    rows={rows}
                />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        rows: state,
        rowsReducer: state
    }
}

const mapDispatchToProps = (dispatch) => {
    const {addRowTable, addRowsTable} = bindActionCreators(actions, dispatch);

    return {

        addRowTable: (rows, value) => {
            const newRow = []
            persons.getPerson(25)

                .then(res => {

                    const oneRow = {
                            id: res.id,
                            name: res.name,
                            article: res.body,
                            title: res.email,
                            stat: res.email,
                        }
                    newRow.push(oneRow)

                    value = newRow
                    addRowTable(value)
                })

        },
        addRowsTable: (rows, value) => {

                    value = newData
                    addRowsTable(value)

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)