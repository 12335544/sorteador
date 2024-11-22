<script>
    document.getElementById('drawButton').addEventListener('click', function() {
        // Obter os nomes do input
        const input = document.getElementById('namesInput').value;
        
        // Dividir os nomes em um array
        const names = input.split(',').map(name => name.trim()).filter(name => name);

        // Verificar se há nomes suficientes
        if (names.length === 0) {
            document.getElementById('result').innerText = 'Por favor, insira pelo menos um nome.';
            return;
        }

        // Sortear um nome aleatório
        const randomIndex = Math.floor(Math.random() * names.length);
        const winner = names[randomIndex];

        // Mostrar o resultado
        document.getElementById('result').innerText = 'O sorteado é: ' + winner;
    });
</script>

</body>
</html>
