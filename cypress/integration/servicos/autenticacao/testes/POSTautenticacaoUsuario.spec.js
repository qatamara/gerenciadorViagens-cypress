import * as POSTautenticacaoUsuario from '../request/POSTautenticacaoUsuario.request'

describe('POST gerar token usuario',() =>{
    it('deve conseguir realizar login como usuario',()=>{
        POSTautenticacaoUsuario.fazerLoginUsuario().should((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    })
})