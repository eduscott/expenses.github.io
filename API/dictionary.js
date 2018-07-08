module.exports = Dictionary;

var Dictionary = function (properties, values) {
    var properties = properties;
    var values = values;
    var dictionary = {}; 
    
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
    //public set methods
    this.setDictionary = function (dictionary) {
        dictionary =  dictionary;
    }
}

Dictionary.prototype.generateDictionary = function () {
    var properties = this.getProperties();
    var values = this.getValues();
    var dictionary = {}
    if (properties.length == values.length) {
        for (x = 0; x < properties.length; x++) {
            dictionary[properties[x]] = values[x];
        };
        this.setDictionary (dictionary);
    } else {
        console.log('Lists have not the same length!');
    }
}


