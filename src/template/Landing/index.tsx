import api from '../../services/api';
import * as S from './styles';

const Landing: React.FC = () => {
    const login = async () => {
        try {
            const response = await api.get('/login');
            window.location.replace(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <S.Container>
            <S.Title>{'Super Gerenciador Musical'}</S.Title>
            <S.AuthButton onClick={login}>
                <S.ButtonText>Login with Spotify</S.ButtonText>
            </S.AuthButton>
        </S.Container>
    );
};

export default Landing;
