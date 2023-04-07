import { useEffect, useState } from "react";
import request from '../utils/api';


export default function useFetchData(method, url) {
    // const [notes, setNotes] = useState('')
    useEffect(() => {
        async function fetchData() {
            // console.log("Hello zawwar")
            console.log((await request(method, url)));
            const result = await request(method, url);
            // setNotes(result);
            return result;
            // return notes;
        }
        // console.log("Hello zawwar", notes)
        fetchData();
    }, []);
}

