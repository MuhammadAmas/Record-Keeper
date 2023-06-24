import push from '../utils/pushAPI';

export default function usePushData(method, url, body) {
    return push(method, url, body);
}
