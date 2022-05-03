import {TableColumn} from "@consta/uikit/Table";
import axios from 'axios';

export const headline = 'm1300 таз хозяюшк'

class RowService {

    async axiosGet (url) {
        const res = await axios.get(url)

        return await res.data
    }

    getAllPersons() {
        return this.axiosGet('https://jsonplaceholder.typicode.com/comments?_start=5&_limit=10');
    }
    getPerson(id) {
        return this.axiosGet(`https://jsonplaceholder.typicode.com/comments/${id}`);
    }
}

export const persons = new RowService()

export const newData = []

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
            newData.push(oneRow)
        }
    })

const rows = [
    {
        id: '1',
        name: 'defName 1',
        article: 'defArticle 1',
        title: 'defTitle 1',
        stat: 'defStat 1'
    },
    {
        id: '2',
        name: 'defName 2',
        article: 'defArticle 2',
        title: 'defTitle 2',
        stat: 'defStat 2'
    }
]



const columns: TableColumn<typeof rows[number]>[] = [
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
                sortable: true,
            },
            {
                title: 'Характеристика1',
                accessor: 'stat',
                sortable: true,

            },
        ]
    },



];


export {rows, columns}
