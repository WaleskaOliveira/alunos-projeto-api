const request = require('supertest');
const urlApi = "http://localhost:3000";

describe('Suite de testes de cadastro de produtos (FLUXO SUCESSO)', () => {
    const payloadProdutos ={
        name: "Produto de Teste",
        price: 182.88
    }

    it('CE01: Validação de cadastro de produto - Deve cadastrar o produto com sucesso.', async () => {
        const resposta = (await request(urlApi).post('/products')).send(payloadProdutos);
        expect (resposta.statusCode).toBe(201);
    })

    it('CE02: Validação de cadastro de produto - Deve validar a presença do campo ID.', async () => {
        const resposta = (await request(urlApi).post('/products')).send(payloadProdutos);
        expect (resposta.statusCode).toBe(201);
        expect (resposta.body).toHaveProperty('id');
        expect(resposta.body.name).toBe(payloadProdutos.name);
        expect(resposta.body.price).toBe(payloadProdutos.price);

        console.log('O retorno do payload do cadastro de produto retornou corretamente os valores passados: ', resposta.body);
    })

})


describe('Suite de testes de cadastro de produtos (FLUXO ERRO)', () => {
    const payloadProdutosVazio ={
    }

    it('CE01: Validação de cadastro de produto - NÃO deve cadastrar o produto com sucesso.', async () => {
        const resposta = (await request(urlApi).post('/products')).send(payloadProdutosVazio);
        expect(resposta.statusCode).toBe(422);
    })
})