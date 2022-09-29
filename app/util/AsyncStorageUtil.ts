import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageUtil {
    static get(key: string) {
        return AsyncStorage.getItem(key).then(value => {
            return value
        }).catch(() => null)
    }

    static save(key: string, value: string) {
        return AsyncStorage.setItem(key, value)
    }

    static saveObject(key: string, value: any) {
        if (value){
            const jsonValue = JSON.stringify(value)
            return AsyncStorage.setItem(key, jsonValue)
        }
    }

    static delete(key: string) {
        return AsyncStorage.removeItem(key)
    }

    static clear() {
        return AsyncStorage.clear()
    }

    static loadAll() {
        return AsyncStorage.getAllKeys()
    }
}
