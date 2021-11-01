import axios from "axios";

export async function getData() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    return result.data;
}