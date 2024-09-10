
let customerAge = prompt('შეიყვანეთ ასაკი: ')

let lastPrice=0


switch (true){


case customerAge<10:
    console.log('ბილეთის ფასი: 5 ლარი ');
    lastPrice +=5
    break;

case customerAge>=10 && customerAge<=65:
    console.log('ბილეთის ფასი: 15 ლარი ');
    lastPrice +=15
    break;

case customerAge>65:
    console.log('ბილეთის ფასი: 10 ლარი ');
    lastPrice +=10
    break;

default:
    console.log('არასწორი ფორმატი')
}


let movieType = confirm('დაეთანხმეთ თუ გსურთ "3D" ფორმატი')

switch (true){

case movieType:
    console.log('+5 ლარი');
    lastPrice +=5
    break;
default:
    console.log('ფასნამატის გარეშე')
}



let timeToDay = prompt('აირჩიეთ სასურველი დღის მონაკვეთი: evening or afternoon')

switch (true){

    case timeToDay==='evening':
        console.log('+5 ლარი');
        lastPrice +=5
        break;
    default:
        console.log('ფასნამატის გარეშე')
    }

alert(`ბილეთის ფასი თქვენთვის არის: ${lastPrice} ლარი`)


disscount=confirm('ფასდაკლების ბილეთი ხომა არ გაქვთ? ')

if (disscount){
    console.log(`მაშინ თქვენი საბოლოო ფასი იქნება ${lastPrice-lastPrice*0.25} ლარი`)
}else{
    console.log(`მაშინ თვენი ფასი უცვლელი იქნება ${lastPrice} ლარი`)
}