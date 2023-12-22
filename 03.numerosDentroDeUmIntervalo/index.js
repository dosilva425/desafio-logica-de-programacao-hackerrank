function solucao(numero, limiteInferior, limiteSuperior) {
    // seu codigo aqui

    function verificarInteiro() {
        if (Number.isInteger(numero)) {
            return true;
        } else {
            return false;
        };
    }
    function verificarLimites() {
        if (limiteInferior <= limiteSuperior) {
            return true;
        } else {
            return false;
        }
    };
    function constraints() {
        if ((verificarInteiro(numero)) && (verificarLimites(limiteInferior, limiteSuperior))) {
            return true;
        } else {
            return false;
        }
    };

    if (constraints()) {

        if ((numero >= limiteInferior) && (numero <= limiteSuperior)) {
            console.log('PERTENCE');
        } else {
            console.log('NAO PERTENCE');
        };

    };

}