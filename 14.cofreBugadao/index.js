function processData(input) {
    //Enter your code here

    const linhas = input.trim().split('\n');

    const senha_correta = linhas[0];
    const senha_digitada = linhas[1];

    function constraint_1() {
        if ((senha_correta.length) <= (10 ** 3)) {
            return true;
        } else {
            return false;
        }
    }
    function constraint_2() {
        if ((senha_digitada.length) <= (10 ** 5)) {
            return true;
        } else {
            return false;
        }
    }
    function constraints() {
        if ((constraint_1(senha_correta)) && (constraint_2(senha_digitada))) {
            return true;
        } else {
            return false;
        }
    };

    if (constraints()) {
        let i = 0;
        let senha_verificada = '';
        for (let letra_digitada of senha_digitada) {
            if (letra_digitada === senha_correta[i]) {
                senha_verificada += letra_digitada;
                i++
            }
        };

        console.log(senha_correta === senha_verificada ? 'SIM' : 'NAO');
    };

}