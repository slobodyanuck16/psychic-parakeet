var arr = [5, 6, 9, 2, 10, 7, 5, 3];
function getEven(arr)
{
    var eNumbs = arr.filter(function(numb){

        if(numb % 2){
            return false;
        }
        else {
            return true;
        }
    });
    return eNumbs;
}

console.log(getEven(arr));