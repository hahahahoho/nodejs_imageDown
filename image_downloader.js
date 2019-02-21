const request = require('request');
const fs = require('fs');

let option = {
    url : '',
    method : 'GET',
    encoding : null,
    path : '',
    name : ''
}

//option으로 url / path
let app = {
    'imgDown' : (obj)=>{
        option.url = obj.url;
        option.path = obj.path;
        option.name = obj.name;
        request(option).pipe(fs.createWriteStream(option.path+'/'+option.name+'.jpg'));
    }
}