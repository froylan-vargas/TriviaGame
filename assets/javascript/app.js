$(document).ready(function () {

    const defaultQuestionTime = 5;
    const defaultRandomGenerator = 100;
    const defaultGameQuestions = 10;
    var currentTime;
    var questionTimer;
    var questions = [];



    var init = () => {
        currentTime = defaultQuestionTime;
        questions = sortArray(createQuestions().questions).slice(defaultGameQuestions);
        //initDisplay();
    }

   /* $('#start').on("click", () => {
        stopQuestionTimer();
        questionTimer = setInterval(questionTimerHandler, 1000);
    }); */

    $('#stop').on("click", () => {
        stopQuestionTimer();
    });

    var sortArray = array => {
        var id = 0;
        var randomArray = array.map(() => {
            const randomNumber = Math.floor(Math.random() * defaultRandomGenerator);
            return {
                randomNumber: randomNumber,
                id: id++
            };
        });

        var sortedArray =  randomArray.sort((elem1, elem2) => {
            return elem1.randomNumber - elem2.randomNumber;
        });

        return sortedArray.map(elem=>{
            return array[elem.id - 1];
        });
    }

    var createQuestions = () => {
        return {
            questions: [
                {
                    id: 1,
                    question: `Deity of ancient Mexico known as the "Feathered Serpent":`,
                    correctAnswer: `Quetzalcóatl`,
                    answers: ['Quetzalcóatl', 'Tlaloc', 'Mixcóatl', 'Cuauhtémoc'],
                    image: 'quetzalcoatl.jpg'
                },
                {
                    id: 2,
                    question: `Where are the pyramids of the Sun and the Moon?`,
                    correctAnswer: `Teotihuacan`,
                    answers: ['Teotihuacan', 'Tulum', 'Chichen-Itza', 'Main Temple'],
                    image: 'teotihuacan.jpg'
                },
                {
                    id: 3,
                    question: `Year in which the Spaniards conquered Mexico-Tenochtitlán:`,
                    correctAnswer: `1521`,
                    answers: ['1521', '1520', '1522', '1523'],
                    image: 'conquista.jpg'
                },
                {
                    id: 4,
                    question: `Name of Mexico during the colonial period:`,
                    correctAnswer: `New Spain`,
                    answers: ['New Spain', 'New Mexico', 'Mexico', 'Mejico'],
                    image: 'newspain.jpg'
                },
                {
                    id: 5,
                    question: `Name of the last Mexica emperor, whom the Spanish conquistadors tortured by burning his feet:`,
                    correctAnswer: `Cuauhtémoc`,
                    answers: ['Cuauhtémoc', 'Moctezuma', 'Moctezuma II', 'Cuitlahuac'],
                    image: 'cuahutemoc.jpg'
                },
                {
                    id: 6,
                    question: `The highest civil authority in New Spain was:`,
                    correctAnswer: `Viceroy`,
                    answers: ['Viceroy', 'King', 'Emperor', 'President'],
                    image: 'viceroy.jpg'
                },
                {
                    id: 7,
                    question: `In Mexico, from the viceroyalty, creoles are:`,
                    correctAnswer: `The children of Spaniards born in New Spain`,
                    answers: ['The children of Spaniards born in New Spain', 'Spaniards visiting New Spain', 'Mexicas children', 'Independence strugglers'],
                    image: 'creoles.gif'
                },
                {
                    id: 8,
                    question: `The Mexican Independence struggle began in:`,
                    correctAnswer: `1810 `,
                    answers: ['1810 ', '1811', '1825', '1910'],
                    image: ''
                },
                {
                    id: 9,
                    question: `Mexico lost half of its territory in the mid-nineteenth century, as a result of the confrontation with:`,
                    correctAnswer: `United States of America`,
                    answers: ['United States of America', 'France', 'England', 'Germany'],
                    image: 'lostusa.jpg'
                },
                {
                    id: 10,
                    question: `The War of Reform was between:`,
                    correctAnswer: `Liberals and conservatives`,
                    answers: ['Liberals and conservatives', 'America and Chivas', 'PRI and PAN', 'Mexicas and Spaniards'],
                    image: 'libsconservs.jpg'
                },
                {
                    id: 11,
                    question: `Name of the agrarian leader who headed the Mexican Revolution in the state of Morelos:`,
                    correctAnswer: `Emiliano Zapata`,
                    answers: ['Emiliano Zapata', 'Francisco Villa', 'Porfirio Díaz', 'Alvaro Obregón'],
                    image: 'zapata.jpg'
                },
                {
                    id: 12,
                    question: `The slogan "Effective suffrage, no reelection" was the political banner of:`,
                    correctAnswer: `Francisco I. Madero`,
                    answers: ['Francisco I. Madero', 'Emiliano Zapata', 'Benito Juarez', 'Porfirio Díaz'],
                    image: 'madero.jpg'
                },
                {
                    id: 13,
                    question: `The "Adelitas" accompanied their men to combat in:`,
                    correctAnswer: `The Revolution of 1910`,
                    answers: ['The Revolution', 'The Independence', 'Chapultepec War', 'The Pastry War'],
                    image: 'adelitas.png'
                },
                {
                    id: 14,
                    question: `Representative of Mexican muralism:`,
                    correctAnswer: `Diego Rivera`,
                    answers: ['Diego Rivera', 'Frida Kahlo', 'Dr. Atl', 'María Izquierdo'],
                    image: 'rivera.jpg'
                },
                {
                    id: 15,
                    question: `Name of the political party that governed for seven decades in the 20th century:`,
                    correctAnswer: `PRI`,
                    answers: ['PRI', 'PAN', 'PRD', 'Morena'],
                    image: 'pri.png'
                },
                {
                    id: 16,
                    question: `In what international armed conflict did the "201 Squadron" participate?`,
                    correctAnswer: `Second World War`,
                    answers: ['Second World War', 'Mexican Revolution', 'Mexican Independence', 'First World War'],
                    image: 'escuadron.jpg'
                },
                {
                    id: 17,
                    question: `Mexico has borders with:`,
                    correctAnswer: `USA, Guatemala y Belice`,
                    answers: ['USA, Guatemala and Belice', 'Belia, Guatemala and Canada', 'USA and Canada', 'USA, Cuba'],
                    image: 'borders.jpeg'
                },
                {
                    id: 18,
                    question: `The state of the Republic of greater territorial extension is:`,
                    correctAnswer: `Chihuahua`,
                    answers: ['Chihuahua', 'Chiapas', 'CDMX', 'Sonora'],
                    image: 'chihuahua.jpg'
                },
                {
                    id: 19,
                    question: `In what state of the Republic are the ruins of Palenque?`,
                    correctAnswer: `Chiapas`,
                    answers: ['Chiapas', 'Chihuahua', 'Sonora', 'Oaxaca'],
                    image: 'chiapas.jpg'
                },
                {
                    id: 20,
                    question: `With which countries did Mexico celebrate the trade treaty known as NAFTA?`,
                    correctAnswer: `USA and Canada`,
                    answers: ['USA and Canada', 'Colombia, Argentina and Brazil', 'Venezuela and Cuba', 'Canada'],
                    image: 'nafta.jpg'
                }
            ]
        }
    }

    var questionTimerHandler = () => {
        currentTime--;
        modifyDisplay(currentTime);
        if (currentTime < 0) {
            questionTimerEndActions();
        }
    }

    var questionTimerEndActions = () => {
        currentTime = defaultQuestionTime;
        modifyDisplay(currentTime);
        stopQuestionTimer();
    }

    var stopQuestionTimer = () => {
        clearInterval(questionTimer);
    }

    var initDisplay = () => {
        modifyDisplay(defaultQuestionTime);
    }

    var modifyDisplay = (currentTime) => {
        $('#display').text(currentTime);
    }

    init();

});

