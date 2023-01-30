//save local storage data
export const storageSave = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value))
}
//read the local storage data
export const storageRead = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }
    return null
}
//clear local storage, this will result in user being sent back to home page
export const storageDelete = key => {
    localStorage.removeItem(key)
}