function solucao(lista) {
    // seu codigo aqui

    if ((lista.length >= 1) && (lista.length <= 1000)) {

        let idade_mais_nova = Number.POSITIVE_INFINITY;

        const lista_de_candidatos_filtrados = lista.some((idade) => {
            return idade >= 18;
        })

        if (lista_de_candidatos_filtrados) {
            for (let idade of lista) {
                if ((idade >= 18) && (idade < idade_mais_nova)) {
                    idade_mais_nova = idade;
                }
            }
            console.log(idade_mais_nova);
        }
        else {
            console.log('CRESCA E APARECA');
        }

    };

}