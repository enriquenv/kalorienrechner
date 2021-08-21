function rechnen(){

    let größe = document.getElementById("größe").value;
    let alter = document.getElementById("alter").value;;
    let gewicht = document.getElementById("gewicht").value;;
    let grundUmsatz;


    if (document.getElementById("männlich").checked) {
        // console.log("männlich selected!");
        grundUmsatz = 664.7 + (13.7 * gewicht) + (5 * größe) - (6.8 * alter);
    } else if (document.getElementById("weiblich").checked) {
        // console.log("weiblich selected!");
        grundUmsatz = 655.1 + (9.6 * gewicht) + (1.8 * größe) - (4.7 * alter);
    }

    let pal = document.getElementById("pal").value;
    const kJ = 4.184;
    // console.log("grundUmsatz: " + grundUmsatz + "pal: " + pal);

    document.getElementById("grundkcal").innerHTML = Math.floor(grundUmsatz);
    document.getElementById("gesamtkcal").innerHTML = Math.floor(pal * grundUmsatz);
    document.getElementById("grundkJ").innerHTML = Math.floor(kJ * grundUmsatz);
    document.getElementById("gesamtkJ").innerHTML = Math.floor(kJ * (pal * grundUmsatz));

};

