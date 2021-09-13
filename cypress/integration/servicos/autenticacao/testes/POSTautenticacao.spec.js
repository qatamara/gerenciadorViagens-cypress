import * as POSTautenticacao from '../request/POSTautenticacao.request'

describe('POST gera um token de acesso',()=>{
    it('deve conseguir fazer login como usuario',()=>{
        POSTautenticacao.fazerLoginAdministrador().should((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body.data.token).to.be.not.null;//retorno não pode ser null deve vir alguma coisa
        })


    })
})