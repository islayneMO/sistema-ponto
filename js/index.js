const diaSemana = document.getElementById("dia-semana");
const diaMesAno =  document.getElementById("dia-mes-ano");
const horaMinSeg =  document.getElementById("hora-min-seg");
const arrayDayWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"] 


const dialogPonto = document.getElementById("dialog-ponto");
dialogPonto.showModal();
function daySemana(){
    const date = new Date();
    return arrayDayWeek[date.getDay()]
   
    const btnRegistrarPonto = document.getElementById("btn-registrar-ponto");
    btnRegistrarPonto.addEventListener("clik", () => {
        dialogPonto.showModal();
});

const btnDialogFechar = document.getElementById("btn-registrar-ponto",)
btnDialogFechar.addEventListener("click",() => {
    dialogPonto.close();
} );  


function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" +  (date.getMonth() + 1) + "/" + date.getFullYear();
}


function horaCompleta() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}


function atualizaHora() {
    horaMinSeg.textContext = horaCompleta();
}

setInterval(atualizaHora, 1000);

diaSemana.textContent = daySemana();
diaMesAno.textContent = dataCompleta();
