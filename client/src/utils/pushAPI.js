import axios from "axios";

export default async function push(method, url, body) {
    try {
        const response = await axios({
            method: method,
            url: url,
            data: body,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

