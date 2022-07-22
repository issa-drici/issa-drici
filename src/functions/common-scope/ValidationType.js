/**
  * Indique si un object est vide
  * @param {object} object
  * @return {bool}
  */
export const isObjectEmpty = (object) => {
    if (object === undefined) return true;
    return ((Object.entries(object).length === 0) === true);
}