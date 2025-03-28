function convertCSV() {
    const fileInput = document.getElementById('csvFile');
    const progressBar = document.getElementById('progress');
    const jsonOutput = document.getElementById('jsonOutput');
    const downloadBtn = document.getElementById('downloadBtn');

    if (fileInput.files.length === 0) {
        alert("Por favor, selecione um arquivo CSV.");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;

        // Detectar automaticamente o delimitador (vírgula ou ponto e vírgula)
        const delimitador = text.includes(';') ? ';' : ',';

        const lines = text.split('\n');
        const headers = lines[0].split(delimitador);

        let jsonArray = [];
        lines.slice(1).forEach((line, index) => {
            const values = line.split(delimitador);
            let jsonObject = {};
            headers.forEach((header, i) => {
                jsonObject[header.trim()] = values[i] ? values[i].trim() : '';
            });
            jsonArray.push(jsonObject);

            // Atualizando barra de progresso
            let progressPercent = ((index + 1) / lines.length) * 100;
            progressBar.style.width = progressPercent + '%';
        });

        const jsonString = JSON.stringify(jsonArray, null, 2);
        jsonOutput.value = jsonString;

        // Exibe o botão de download
        downloadBtn.style.display = 'block';
        downloadBtn.dataset.json = jsonString;
    };

    reader.onerror = function () {
        alert('Erro ao ler o arquivo!');
    };

    reader.readAsText(file, 'UTF-8'); // Leitura do arquivo em UTF-8
}

function downloadJSON() {
    const jsonString = document.getElementById('downloadBtn').dataset.json;
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'arquivo.json';
    a.click();
}
