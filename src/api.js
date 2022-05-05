import {TableColumn} from "@consta/uikit/Table";
import axios from 'axios';


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


export {columns}
