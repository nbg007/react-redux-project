export function required(value) {
    return !value ? ['这个字段不能为空'] : []
}

export function maxLength_5(value) {
    return value && value.length < 5 ? ['长度不小于5'] : []
}

export function bankNum(value) {
    return value && value.length !== 16 ? ['银行卡格式错误'] : []
}

export function withdrawAmount(value) {
    const minAmount = 100 // 至少提现金额
    return value && value < minAmount ? ['提现金额填写错误'] : []
}
