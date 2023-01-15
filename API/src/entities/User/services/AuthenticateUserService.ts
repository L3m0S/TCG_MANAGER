

class AuthenticateUserService {
    async authenticateUser(email: String, password: String) {

        if (!email)
            throw new Error("Informe o e-mail para realizar o login!");
        if(!password)
            throw new Error("Informe a senha para realizar o login!");

        //buscar usuario no banco

        //se não encontrar o usuario no banco, retornar erro

        //verificar se a senha está correta

        //gerar o token do usuario e retornar
    }
}