import { useState } from 'react';
import internal from 'stream';
import api from '../../services/api';
import * as S from './styles';

interface Artist {
    id: string;
    name: string;
    avatar: string;
    totalFollowers: number;
}

const Home: React.FC = () => {
    const [artists, setArtists] = useState([] as Artist[]);

    const getArtists = async () => {
        const response = await api.get('/user-top-artists');
        const artistsData = response.data;

        let artistsNew = [] as Artist[];

        artistsData.map((artist: any) =>
            artistsNew.push({
                id: artist.id,
                name: artist.name,
                avatar: artist.images[0].url,
                totalFollowers: artist.followers.total,
            })
        );
        setArtists(artistsNew);
    };

    return (
        <S.Container>
            <S.Title>{'Super Gerenciador Musical'}</S.Title>
            {artists.map(a => {
                return (
                    <S.Artist key={a.id}>
                        <S.ArtistImg src={a.avatar} />
                        <S.ArtistData>{`${a.name}: ${a.totalFollowers} seguidores`}</S.ArtistData>
                    </S.Artist>
                );
            })}
            <S.AuthButton onClick={getArtists}>
                <S.ButtonText>Get Artists</S.ButtonText>
            </S.AuthButton>
        </S.Container>
    );
};

export default Home;
