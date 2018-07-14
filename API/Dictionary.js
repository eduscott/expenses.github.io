module.exports = Dictionary;

function Dictionary(properties, values) {
    const __dictionary = () => {
        let dict = {};
        if (properties.length == values.length) {
            for (x = 0; x < properties.length; x++) {
                dict[properties[x]] = values[x];
            };
            return dict;
        };
    }

    //public get methods
    this.getProperties = function () {
        return Object.keys(__dictionary);
    }
    this.getValues = function () {
        return Object.values(__dictionary);
    }
    this.getDictionary = function () {
        return __dictionary;
    }
}
