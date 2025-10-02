export const addRemoveLike = (id: number) => {
    // likes control
    const stLikes = localStorage.getItem('likes')
    if(stLikes) {
        // dizi daha önceden var
        const arr = JSON.parse(stLikes) as number[]
        const index = arr.findIndex((item) => item === id)
        if (index === -1) {
            // yok - ekle
            arr.push(id)
        }else {
            // var - çıkar
            arr.splice(index, 1)
        }
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr.toString())
    }else {
        // dizi ilk kayıt
        const likeArr = [id]
        const stArr = JSON.stringify(likeArr)
        localStorage.setItem('likes', stArr.toString())
    }
}

export const fncIsLike = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        const arr = JSON.parse(stLikes) as number[]
        const index = arr.findIndex((item) => item === id)
        return index > -1 
    }
    return false
}

export const allLikes = () => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        const arr = JSON.parse(stLikes) as number[]
        return arr
    }
    return []
}