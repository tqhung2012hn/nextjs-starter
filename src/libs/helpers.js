function toCamelCase(str) {
    return (
        str
            .toLowerCase()
            .replace(/[-_]+/g, ' ')
            .replace(/[^\w\s]/g, '')
            // eslint-disable-next-line
            .replace(/ (.)/g, function ($1) {
                return $1.toUpperCase();
            })
            .replace(/ /g, '')
    );
}

export function objectToCamelCase(origObj) {
    // eslint-disable-next-line
    return Object.keys(origObj).reduce(function (newObj, key) {
        const val = origObj[key];
        const newVal = typeof val === 'object' ? objectToCamelCase(val) : val;
        // eslint-disable-next-line
        newObj[toCamelCase(key)] = newVal;
        return newObj;
    }, {});
}
