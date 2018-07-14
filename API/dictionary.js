export default Dictionary;

var Dictionary = function (properties, values) {
    let __properties = properties;
    let __values = values;
    let __dictionary = function () {
        let dict = {};
        if (__properties.length == __values.length) {
            for (x = 0; x < __properties.length; x++) {
                dict[__properties[x]] = __values[x];
            };
            return dict;
        };
    }

    //public get methods
    this.getProperties = function () {
        return __properties;
    }
    this.getValues = function () {
        return __values;
    }
    this.getDictionary = function () {
        return __dictionary;
    }
}

var propriedades = ['nome', 'email'];
var valores = ['Marcos Vinicius', 'marcosvbcosta10@gmail.com'];
var dic = new Dictionary (propriedades, valores);
console.log(dic.getDictionary());
