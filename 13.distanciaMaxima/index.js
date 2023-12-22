function processData(input) {
    // Enter your code here

    const linhas = input.trim().split("\n");

    const n = parseInt(linhas[0]);
    const coordenadas = [];
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(' ');
        coordenadas.push({
            x: Number(coord[0]),
            y: Number(coord[1])
        })
    };

    function constraint_1(n) {
        if (((n >= 0) && (n <= 10 ** 3))) {
            return true;
        } else {
            return false;
        }
    }
    let constraint_2 = coordenadas.every((eixos) => {
        return (((eixos.x >= -1000) && (eixos.y >= -1000)) && ((eixos.x <= 1000) && (eixos.y <= 1000)));
    });

    function constraints() {
        if (constraint_1(n) && constraint_2) {
            return true;
        } else {
            return false;
        }
    };

    if (constraints()) {
        let maior_distancia = 0;
        const comparacao = coordenadas.map((posicao_atual) => {
            for (let i = 0; i < coordenadas.length; i++) {
                let distancia_entre_ponto_A_e_B = Math.sqrt((((coordenadas[i].x) - (posicao_atual.x)) ** 2) +
                    (((coordenadas[i].y) - (posicao_atual.y)) ** 2));
                if (distancia_entre_ponto_A_e_B > maior_distancia) {
                    maior_distancia = distancia_entre_ponto_A_e_B;
                }
            }
            return maior_distancia;
        })

        console.log(maior_distancia);
    };

} 