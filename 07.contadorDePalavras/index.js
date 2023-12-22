function solucao(texto) {
    // Seu codigo aqui

    if (texto.length <= 5000) {

        const texto_sem_espacos = texto.trim();

        const texto_to_array = texto_sem_espacos.split(' ');

        const array_caractere_especial = [];
        const array_palavras = [];
        for (let i = 0; i < texto_to_array.length; i++) {
            if (((texto_to_array[i] === ' ') || (texto_to_array[i] === '') ||
                (texto_to_array[i] === '.') || (texto_to_array[i] === ',') ||
                (texto_to_array[i] === ';') || (texto_to_array[i] === ':') ||
                (texto_to_array[i] === '?') || (texto_to_array[i] === '!'))) {
                array_caractere_especial.push(texto_to_array[i]);
            }
            else {
                array_palavras.push(texto_to_array[i])
            }
        }

        console.log(array_palavras.length);

    };

}