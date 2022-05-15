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


