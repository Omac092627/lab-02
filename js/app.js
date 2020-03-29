'use strict'

let infoArray = [];
let name = [];

function SonStuff(creature){
    this.url = creature.image_url;
    this.title = creature.title;
    this.description = creature.description;
    this.keyword = creature.keyword;
    this.horns = creature.horns;
    infoArray.push(this);
};

// SonStuff.prototype.render = function(){
//     let $clone = $('.photo-template').clone();
//     $clone.find('h2').text(this.title);
//     $clone.find('img').attr('src', this.url);
//     $clone.find('img').attr('alt', this.title);
//     $clone.find('p').text(this.description);
//     $clone.removeClass('photo-template');
//     $clone.attr('class', this.keyword);
//     $('main').append($clone);
// };

//we want to render using the mustache method//

function renderAnimal(animal){
    let $target = $('#photo-template');
    let templateMarkup = $('#eastWood').html();
    let newMarkup = Mustache.render(templateMarkup, animal);
    $target.append(newMarkup);
}





$('select').on('change', displayImages);

function displayImages(){
 

};

$(document).ready(function(){
    $.ajax('/data/page-1.json')
        .then(data =>{
            data.forEach((animal) => {

             renderAnimal(animal);

            if(!name.includes(animal.keyword)){
                name.push(animal.keyword);
            }
            
            })

            name.sort();
            for (let i = 0; i < name.length; i++){
                $('select').append(`<option value="${name[i]}">${name[i]}</option>`);
            }
        });
});

