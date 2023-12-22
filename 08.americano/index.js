function solucao(numeros) {
    // seu codigo aqui

    function constraint_1() {
        if (numeros.length <= 12) {
            return true;
        } else {
            return false;
        }
    }
    const constraint_2 = numeros.every((numero_atual) => {
        return ((numero_atual > 0) && (numero_atual < 11));
    });

    function constraints() {
        if (constraint_1(numeros), constraint_2) {
            return true;
        } else {
            return false;
        }
    };

    if (constraints(numeros)) {
        let soma = 0;
        for (let num = 0; num < numeros.length; num++) {
            soma += numeros[num];
        };

        const resto = soma % numeros.length;
        if (resto == 0) {
            console.log(numeros.length);
        } else {
            console.log(resto);
        };

    };

}