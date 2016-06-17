export function required(value) {
    return !value ? ['这个字段不能为空'] : []
}

export function maxLength(value) {
    return value && value.length < 5 ? ['长度不小于5'] : []
}
