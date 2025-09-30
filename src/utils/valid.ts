// email valida function - regex
export function validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
}

// password valid fnc - 8 min char - max 12 - uppercase - lowercase - number
export function validatePassword(password: string) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/
    return re.test(String(password))
}

// name surname - valid - only letters and space - min 3 max 30 char - no number and min 2 words
export function validateName(name: string) {
    const re = /^(?=.*\s)(?=.{3,30}$)[a-zA-Z\s]+$/
    return re.test(String(name))
}

// name surname - first char uppercase convert
export function formatName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}
