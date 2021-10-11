


const inputId = document.getElementById('inputId');

inputId.onchange = () => {

    const range = document.getElementById('range').value;
    const tipOutput = document.getElementById('tipOutput');

    const tipAmount = document.getElementById('tipAmount');
    const totalBill = document.getElementById('totalBill');

    // calculation
    const bill = Number(inputId.value);

    const tipValue = bill * (range / 100);
    const finalBill = bill + tipValue;

    // Excecute the Output
    tipOutput.innerHTML = `${range}%`;
    tipAmount.value = tipValue.toFixed(2);
    totalBill.value = finalBill.toFixed(2);


    // outbox display show
    document.getElementById('outputBox').style.display = "block";
}