export const phoneInputHandler = (evt) => {

    if (evt.target.value.length > 11) evt.target.value = evt.target.value.substr(0, 10);
    evt.target.value = evt.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1')
}

export const numberInputHandler = (evt) => {
    evt.target.value = evt.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
}


export const digitInputHandler = (evt,allowed=10e10) => {
    const value= evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
    evt.target.value=value.replace(/(\..*)\./g, '$1').substr(0,allowed);
 }
 