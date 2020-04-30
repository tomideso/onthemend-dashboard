export const phoneInputHandler = (evt) => {

    if (evt.target.value.length > 11) evt.target.value = evt.target.value.substr(0, 10);
    evt.target.value = evt.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
}

export const numberInputHandler = (evt) => {
    evt.target.value = evt.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
}

export const integerInputHandler = (evt) => {
    evt.target.value = evt.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
}