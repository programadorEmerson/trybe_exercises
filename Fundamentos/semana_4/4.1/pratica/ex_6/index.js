let m_peao = "No primeiro movimento do peão, ele pode andar tanto 1 como 2 casas para frente, dependendo da sua estratégia de abertura";
let m_cavalo = "O cavalo também é único na forma de se mover. Enquanto outras peças se movem em linha reta ou na diagonal, ele se mexe em formato de L.";
let m_torre = "O movimento dessa peça é ao longo de linhas retas – se houver espaço suficiente, ela pode ir de um lado a outro do tabuleiro em um único movimento.";
let m_bispo = "Na questão do movimento, os bispos se movem apenas na diagonal, mas também podem ir de um canto a outro do tabuleiro, dentro da sua respectiva cor.";
let m_rainha = "Antigamente, quando o jogo era praticado na era Medieval, a rainha estava restrita a se mover uma casa por turno e somente nas diagonais. Ela era bem mais fraca nessa época.";
let m_rei = "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.";

let consulta = "RaInHa";
let resultado = "";

switch (consulta.toLowerCase()) {
    case "peao":
        resultado = m_peao;
        break;
    case "cavalo":
        resultado = m_cavalo;
        break;
    case "torre":
        resultado = m_torre;
        break;
    case "bispo":
        resultado = m_bispo;
        break;
    case "rainha":
        resultado = m_rainha;
        break;m_rainha
    case "rei":
        resultado = m_rei;
        break;
    default:
        resultado = "Peça não encontrada";
        break;
}

console.log(resultado);