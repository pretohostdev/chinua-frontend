

const base = process.env.API_URL


API_URL

export const get = async (path, header = null) => {
    
    return fetch(base + path).then(response => response.json()).then(response => response).catch(error => console.log(error))
}