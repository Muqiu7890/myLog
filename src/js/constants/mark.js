export const get = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json;charset=utf-8'
            })
        })
        const status = res.status
        if (!res.ok) {
            return {status:res.status}
        }
        const body = await res.json()
        return Object.assign({}, {body}, {status})
    } catch (ex) {
        return {status: ex.status}
    }
}
export const post = async (url, data) => {
    try {
        const res = await fetch(url,{
            method:'POST',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8'
            }),
            body:JSON.stringify(data)
        })
        if (!res.ok) {
            return {status:res.status}
        }
        return {status:res.status}
    }catch (ex) {
        return {status:ex.status}
    }
}