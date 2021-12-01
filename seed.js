const mongoose = require('mongoose');
const User = require('./models/user');
const Subject = require('./models/subject');


const dotenv = require('dotenv');
dotenv.config()

const connectDB = async () => {
    await mongoose.connect(
        process.env.MONGO_URI,
        {useNewUrlParser: true}
    )
    .then(() => console.log('DB Connected'))
    
    mongoose.connection.on('error', err => {
        console.log(`DB connection error: ${err.message}`)
    });

}

connectDB();

// const userArr = [
//     {
//         name: 'Patryk Kaczor',
//         study: 'Informatyka',
//         specialization: 'Grafika komputerowa i multimedia',
//         albumnumber: '125614',
//         address: {
//             region: 'Małopolska',
//             city: 'Kraków',
//             street: 'Szlak',
//             houseNumber: '7/25'
//         },
//         birthdate: Date.UTC(1997,2,22),
//         birthplace: 'Kraków',
//         pesel: '97022217417',
//         thesis: {
//             topic: "Aplikacja do planowania dnia",
//             promoter: "dr. Michalski",
//             reviewer: "dr. Janusz Tracz"
//         }

//     },
//     {
//         name: 'Tomasz Fitał',
//         study: 'Informatyka',
//         specialization: 'Grafika komputerowa i multimedia',
//         albumnumber: '123456',
//         address: {
//             region: 'Małopolska',
//             city: 'Zielonki',
//             street: 'Spokojna',
//             houseNumber: '125'
//         },
//         birthdate: Date.UTC(1998,2,22),
//         birthplace: 'Kraków',
//         pesel: '98022217417',
//         thesis: {
//             topic: "Aplikacja do segregowania śmieci",
//             promoter: "dr. Zabawa",
//             reviewer: "dr. Janusz Tracz"
//         }

//     },
   
// ]

const subjects = [
    {
        name: 'PRiR',
        term: 'VIII',
        questions:
        [
            {
                question: "Pytanie1",
                answer: "odpowiedź1",
            },
            {
                question: "Pytanie2",
                answer: "odpowiedź2",
            }
        ]
    },
    {
        name: 'ZPI',
        term: 'VIII',
        questions:
        [
            {
                question: "Pytanie1",
                answer: "odpowiedź1",
            },
            {
                question: "Pytanie2",
                answer: "odpowiedź2",
            }
        ]
    },

]
    Subject.insertMany(subjects)
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })

