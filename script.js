document.getElementById('voltageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);

    if (!isNaN(current) && !isNaN(resistance)) {
        const voltage = current * resistance;
        document.getElementById('result').innerText = `La Tensione (V) è: ${voltage.toFixed(2)} V`;
    } else {
        document.getElementById('result').innerText = 'Inserisci valori validi.';
    }
});
