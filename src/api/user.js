import { createHeaders } from "./index"
const apiUrl = process.env.REACT_APP_API_URL
const checkForUser = async(username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error('could not complete request.')
        }
        const data = await response.json()
        return [null,data]
    }
    catch (error){
        return [error.message,[]]
    }
}


const createUser = async (username) => {
    try {
        console.log(apiUrl)
        const response = await fetch(apiUrl,{
            method:'POST',
            headers:createHeaders(),
            body:JSON.stringify({
                username,
                translations:[]
            })
        })
        if (!response.ok) {
            throw new Error('Could not create user with username '+username)
        }
        const data = await response.json()
        return [null,data]
    }
    catch (error){
return [error.message,[]]
    }
}
export const loginUser = async (username) => {
    const [checkError,user] = await checkForUser(username)
    if (checkError!==null){
        return [checkError,null]
    }
    if (user.length > 0) {
        return [null,user.pop()]
    }
    return await createUser(username)
  
}
export const patchUser = async (id,prevTranslations,signTranslation) => {
   
        const response = await fetch(`${apiUrl}/${id}`,{
            method:'PATCH',
            headers:createHeaders(),
            body:JSON.stringify({
                translations: [...prevTranslations,signTranslation]
            })
        })
        
          if (!response.ok) {
            throw new Error('Could not update translations history')
          }

          return await response.json()

        
}
export const clearUser = async (id) => {

   
        const response = await fetch(`${apiUrl}/${id}`,{
            method:'PATCH',
            headers:createHeaders(),
            body:JSON.stringify({
                translations: []
            })
        })
        
          if (!response.ok) {
            throw new Error('Could not update translations history')
          }

          return await response.json()

        
}
