import React from 'react';

function BookDetais(props) {

    const bookdata = [{
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://picsum.photos/id/1/200/300",
        "price": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://picsum.photos/id/2/200/300",
        "price": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://picsum.photos/id/3/200/300",
        "price": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://picsum.photos/id/4/200/300",
        "price": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://picsum.photos/id/5/200/300",
        "price": 176,
        "title": "The Book Of Job",
        "year": -600
    },
    {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://picsum.photos/id/6/200/300",
        "price": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
    },
    {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://picsum.photos/id/7/200/300",
        "price": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350
    },
    {
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://picsum.photos/id/8/200/300",
        "price": 226,
        "title": "Pride and Prejudice",
        "year": 1813
    },
    {
        "author": "Honor\u00e9 de Balzac",
        "country": "France",
        "imageLink": "images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://picsum.photos/id/9/200/300",
        "price": 443,
        "title": "Le P\u00e8re Goriot",
        "year": 1835
    },
    {
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://picsum.photos/id/10/200/300",
        "price": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952
    },
    {
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://picsum.photos/id/11/200/300",
        "price": 1024,
        "title": "The Decameron",
        "year": 1351
    },
    {
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://picsum.photos/id/12/200/300",
        "price": 224,
        "title": "Ficciones",
        "year": 1965
    },
    {
        "author": "Emily Bront\u00eb",
        "country": "United Kingdom",
        "imageLink": "images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://picsum.photos/id/13/200/300",
        "price": 342,
        "title": "Wuthering Heights",
        "year": 1847
    },
    {
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "images/l-etranger.jpg",
        "language": "French",
        "link": "https://picsum.photos/id/14/200/300",
        "price": 185,
        "title": "The Stranger",
        "year": 1942
    },
    {
        "author": "Paul Celan",
        "country": "Romania, France",
        "imageLink": "images/poems-paul-celan.jpg",
        "language": "German",
        "link": "https://picsum.photos/id/15/200/300",
        "price": 320,
        "title": "Poems",
        "year": 1952
    },
    {
        "author": "Louis-Ferdinand C\u00e9line",
        "country": "France",
        "imageLink": "images/voyage-au-bout-de-la-nuit.jpg",
        "language": "French",
        "link": "https://picsum.photos/id/16/200/300",
        "price": 505,
        "title": "Journey to the End of the Night",
        "year": 1932
    },
    {
        "author": "Miguel de Cervantes",
        "country": "Spain",
        "imageLink": "images/don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://picsum.photos/id/17/200/300",
        "price": 1056,
        "title": "Don Quijote De La Mancha",
        "year": 1610
    },
    {
        "author": "Geoffrey Chaucer",
        "country": "England",
        "imageLink": "images/the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://picsum.photos/id/18/200/300",
        "price": 544,
        "title": "The Canterbury Tales",
        "year": 1450
    },
    {
        "author": "Anton Chekhov",
        "country": "Russia",
        "imageLink": "images/stories-of-anton-chekhov.jpg",
        "language": "Russian",
        "link": "https://picsum.photos/id/19/200/300",
        "price": 194,
        "title": "Stories",
        "year": 1886
    },
    {
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "images/l-etranger.jpg",
        "language": "French",
        "link": "https://picsum.photos/id/14/200/300",
        "price": 185,
        "title": "The Stranger",
        "year": 1942
    }
    ]

    const [data, setData] = useState(bookdata);

    return (
        <div>
            
        </div>
    );
}

export default BookDetais;