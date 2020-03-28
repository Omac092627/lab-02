'use strict'

let infoArray = [];
let name = [];

function SonStuff(url, title, description, keyword, horns){
    this.url = url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    infoArray.push(this);
};

SonStuff.prototype.render = function(){
    let $clone = $('.photo-template').clone();
    $clone.find('h2').text(this.title);
    $clone.find('img').attr('src', this.url);
    $clone.find('img').attr('alt', this.title);
    $clone.find('p').text(this.description);
    $clone.removeClass('photo-template');
    $clone.attr('class', this.keyword);
    $('main').append($clone);
};


$('select').on('change', displayImages);

function displayImages(){
    let picked = $(this).val();
    
    name.forEach((key, idx) =>{
        if(picked === 'default'){
            $('section').fadeIn(0);
            $('.photo-template').fadeOut();
        } else{
            $('section').fadeOut(0);
            $(`.${picked}`).fadeIn(0);
        }
    })
};

$(document).ready(function(){
    $.ajax('/data/page-1.json')
        .then(data =>{
            data.forEach((object, indx) => {
            let info = new SonStuff (object.image_url, object.title, object.description, object.keyword, object.horns);
            info.render();

            if(!name.includes(object.keyword)){
                name.push(object.keyword);
            }
            
            })

            name.sort();
            for (let i = 0; i < name.length; i++){
                $('select').append(`<option value="${name[i]}">${name[i]}</option>`);
            }

        });
});

