function solucao(precos) {
    //seu codigo aqui

    if (precos.length <= 100) {

        let soma_total = 0;

        if (precos.length < 3) {
            for (let preco of precos) {
                soma_total += preco;
            }
            console.log(soma_total);
        }
        else if (precos.length >= 3) {
            for (let preco of precos) {
                soma_total += preco;
            }
            let valor_menor = Number.POSITIVE_INFINITY;
            for (let preco of precos) {
                if (preco < valor_menor) {
                    valor_menor = preco;
                }
            }

            const desconto = valor_menor * (50 / 100);
            const soma_total_com_desconto = (soma_total - desconto);

            console.log(soma_total_com_desconto);
        };

    };

}