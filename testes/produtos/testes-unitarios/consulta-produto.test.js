const request = require('supertest');
const urlApi = "http://localhost:3000";

describe('Suíte de testes de api - para validar consulta de produtos. (FLUXO SUCESSO)', () => {
    it('CE01: Consultando todos os produtos cadastrados com sucesso. É esperado retornar 200.', async() => {
        const resposta = await request(urlApi).get('/products');
        expect(resposta.statusCode).toBe(200);
        console.log('O status da requisição retornou: ',resposta.statusCode)
    });

    it('CE02: Consultando todos os produtos cadastrados com sucesso. Deve validar que foi retornada um array de objetos', async() => {
        const resposta = await request(urlApi).get('/products');
        expect(resposta.statusCode).toBe(200);
        //VERIFICA SE É UM ARRAY DE OBJETOS (TRUE) SE É VERDADEIRO
        expect(Array.isArray(resposta.body)).toBe(true);


        console.log('O status da requisição retornou: ',resposta.statusCode);
        console.log('A resposta da requisição retornou o seguinte body: ', resposta.body);
    });
})