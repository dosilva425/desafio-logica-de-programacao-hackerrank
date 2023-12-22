function solucao(lista) {
    //seu codigo aqui

    const valor_inteiro = lista.every((valor_atual) => {
        return (Number.isInteger(valor_atual));
    });
    const valor_positivo = lista.every((valor_atual) => {
        return (Math.sign(valor_atual) === 1);
    });
    const limite_numero = lista.every((valor_atual) => {
        return (valor_atual >= 0 && valor_atual <= 1000);
    });
    function constraints() {
        if ((valor_inteiro && valor_positivo) && limite_numero) {
            return true;
        } else {
            return false;
        }
    };

    if (constraints()) {
        let soma_cofre = 0;
        for (let valor of lista) {
            soma_cofre += valor;
        }

        console.log(soma_cofre);
    };

}