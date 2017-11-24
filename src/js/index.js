let dogs = require('./dogs.js');
let $ = require('jquery');

require("../css/style.css")

$.each(dogs, function(key, value) {
    $('body').append('<h2>' + value.name + '</h2>');
})

console.log(dogs);