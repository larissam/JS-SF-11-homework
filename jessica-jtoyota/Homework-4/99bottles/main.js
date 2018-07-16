// lyrics = function () {

//     for (i=99; i>1; i--) {
//         let list = document.querySelector('ul');
//         let verse = document.createElement('li');
//         verse.textContent = i +  ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.\n';
//         list.appendChild(verse);
//     };

//         let list = document.querySelector('ul');
//         let verse = document.createElement('li');
//         verse.textContent =
//         '1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.'
//         list.appendChild(verse);

//         verse.textContent =
//         'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
//         list.appendChild(verse);
// };

// lyrics ();

lyrics = function () {
    //99 to 2 bottles (plural)
    for (i=99; i>1; i--) { 
        $("ul").append($("<li>").text(i +  ' bottles of beer on the wall, ' + i + ' bottles of beer. Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.\n'));
    };
    //one bottle
    $("ul").append($("<li>").text('1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.'));

    //no more bottles
    $("ul").append($("<li>").text('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'));
};

lyrics ();