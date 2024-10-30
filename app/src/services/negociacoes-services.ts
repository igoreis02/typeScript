import { NegociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices{
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados:NegociacoesDoDia[]) => {
           return dados.map(dados => {
                return new Negociacao(new Date(), dados.vezes, dados.montante);
            })
        }); 
    }
}