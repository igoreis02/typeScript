export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return (JSON.stringify(this.negociacoes, null, 2));
    }
    ehIgual(negociacao) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacao.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map