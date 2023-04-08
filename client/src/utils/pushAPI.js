import axios from "axios";

export default async function push(method, url, body) {
    const options = { method: method, url: url, body: JSON.stringify(body) };
    try {
        const response = await axios.post(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

