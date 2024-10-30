import { Negociacao } from "../models/negociacao.js";
export class NegociacoesServices {
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dados => {
                return new Negociacao(new Date(), dados.vezes, dados.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-services.js.map