import React from 'react';
import {
    KeyboardView,
    Title,
    Container,
    Input,
    ButtonSubmit,
    TextButton
} from './styles';
import Header from '../../components/Header';

const entrar = () => {
    console.log("Entrou")

}

function Login() {
    return (
        <KeyboardView>
            <Header />
            <Container>
                <Title>Login</Title>
                <Input
                    placeholderTextColor="#BACCD1"
                    placeholder="E-mail"
                />
                <Input
                    placeholderTextColor="#BACCD1"
                    placeholder="Senha"
                    secureTextEntry
                />

                <ButtonSubmit>
                    <TextButton>
                        Entrar
                    </TextButton>
                </ButtonSubmit>
                <ButtonSubmit>
                    <TextButton>
                        Ajuda
                    </TextButton>
                </ButtonSubmit>
                <ButtonSubmit>
                    <TextButton>
                        Recuperar senha
                    </TextButton>
                </ButtonSubmit>
            </Container>
        </KeyboardView>
    )
}

export default Login;