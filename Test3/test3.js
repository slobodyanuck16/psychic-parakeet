var name = prompt('Введите имя');

function searchByName(name1)
{
    var names = [ {name: 'Jonny Walker', birthDate:'1995-12-17'},
    {name:'Andrew', birthDate:'2001-10-29'},
    {name:'Viktor', birthDate:'1998-11-09'}
]
    var finArr = names.filter(function(el){

        if(name1 == el.name){
            return true;
        }
        else {
            return false;
        }
    });
    return finArr;
}

console.log(searchByName(name));