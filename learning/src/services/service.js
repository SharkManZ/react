import axios from "axios";

export async function getData({search}) {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(search);
    if (search !== undefined && search !== null) {
        return result.data.filter(item => item.name.includes(search));
    }
    return result.data;
}