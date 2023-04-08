import push from '../utils/pushAPI';


export default function usePushData(method, url, body) {
    async function pushData() {
        const result = await push(method, url, body);
        const data = await result
        return data;
    }
    return pushData();
}



