function solucao(min, max, valores) {
    //seu codigo aqui

    if ((valores.length >= 1) && (valores.length <= 1000)) {

        const valores_autorizados = [];
        for (let valor of valores) {
            if (valor >= min && valor <= max) {
                valores_autorizados.push(valor);
            }
        }

        console.log(valores_autorizados);
    };

}