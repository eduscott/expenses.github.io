module.exports = Dictionary;

var Dictionary = function (properties, values) {
    var properties = properties;
    var values = values;
    var dictionary = function () {
        var dict = {};
        if (properties.length == values.length) {
            for (x = 0; x < properties.length; x++) {
                dict[properties[x]] = values[x];
            };
            return dict;
        } else {
            console.log('Check your parameters!');
        }
    }

    //public get methods
    this.getProperties = function () {
        return properties;
    }
    this.getValues = function () {
        return values;
    }
    this.getDictionary = function () {
        return dictionary;
    }
}

var propriedades = ['nome', 'email'];
var valores = ['Marcos Vinicius', 'marcosvbcosta10@gmail.com'];
var dic = new Dictionary (propriedades, valores);
console.log(dic.getDictionary());
