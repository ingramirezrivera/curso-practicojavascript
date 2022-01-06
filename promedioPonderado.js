const notes = [
    {
        course: "Educaión física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finazas Personales",
        note: 7,
        credit: 5,
    },
 ];

 //recorremos el objeto, creamos un nuevo objeto y guardamos la multiplicacion de la nota por el credito

 const noteWithCredit = notes.map(function
    (noteObject){
        return noteObject.note * noteObject.credit;
    }
 );

 const sumaNotesWithCredit = noteWithCredit.reduce(
        function (valorA = 0,valorB) {
            return valorA + valorB;
        }
 ); 
 
 const credit = notes.map(function
    (noteObject){
        return noteObject.credit;
    }
 );

 const sumaCredit = credit.reduce(
    function (valorA = 0,valorB) {
        return valorA + valorB;
    }
);

const promedioPonderado = sumaNotesWithCredit / sumaCredit;