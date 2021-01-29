function countAmount() {
    let firstClassTicket = parseInt(document.getElementById("first-class-input").value);
    if (firstClassTicket < 0) {
        firstClassTicket = 0;
        document.getElementById("first-class-input").value = 0;
    }
    let economyClassTicket = parseInt(document.getElementById("economy-class-input").value);
    if (economyClassTicket < 0) {
        economyClassTicket = 0;
        document.getElementById("economy-class-input").value = 0;
    }
    const subtotalAmount = firstClassTicket * 150 + economyClassTicket * 100;
    document.getElementById("subtotal-amount").innerText = "$" + subtotalAmount;

    const vatAmount = subtotalAmount * 0.1;
    document.getElementById("vat-amount").innerText = "$" + vatAmount;
    const totalAmount = subtotalAmount + vatAmount;
    document.getElementById("total-amount").innerText = "$" + totalAmount;
}


function plusMinusOperation(classType, btn) {
    const inputClass = document.getElementById(classType + "-class-input");
    let inputTicket = parseInt(inputClass.value);
    if (btn == "plus") {
        inputTicket++;
    }
    else {
        inputTicket--;
    }
    if (inputTicket < 0) {
        inputTicket = 0;
    }
    inputClass.value = inputTicket;

    countAmount();
}


document.getElementById("first-class-plus-btn").addEventListener("click", function () {
    plusMinusOperation("first", "plus");
});

document.getElementById("first-class-minus-btn").addEventListener("click", function () {
    plusMinusOperation("first", "minus");
});

document.getElementById("economy-class-plus-btn").addEventListener("click", function () {
    plusMinusOperation("economy", "plus");
});

document.getElementById("economy-class-minus-btn").addEventListener("click", function () {
    plusMinusOperation("economy", "minus");
});


document.getElementById("booking-btn").addEventListener("click", function () {
    let totalAmount = document.getElementById("total-amount").innerText;
    totalAmount = parseInt(totalAmount.replace("$", ""));
    if (totalAmount != 0) {
        document.getElementById("booking-section").style.display = "none";
        document.getElementById("successful-booking").style.display = "flex";
    }
});