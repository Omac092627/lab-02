'use strict'

let infoArray = [];

function JsonStuff (image_url, title, description, keyword, horns){
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    infoArray.push(this);
};

$(document).ready(function(){
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    }
    
    
    $.ajax('page-1.json', ajaxSettings)

    
});

