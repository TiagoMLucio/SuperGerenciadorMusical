import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    width: 400px;
    height: fit-content;
    background-color: #121212;
    border-radius: 8px;
    box-shadow: 0px 4px 8px gray, 0px 0px 2px gray, 0px 0px 1px gray;
`;

export const Title = styled.p`
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 32px;
    text-align: center;
`;

export const Artist = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
`;

export const ArtistImg = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 16px;
`;

export const ArtistData = styled.p`
    color: white;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const AuthButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 32px;
    border-radius: 8px;
    background-color: #bb86fc;
    box-shadow: 0px 4px 8px gray, 0px 0px 2px gray, 0px 0px 1px gray;

    outline: none;
    border: none;

    :hover {
        transform: scale(1.05);
        transition: 0.3s;
    }
`;

export const ButtonText = styled.p`
    color: white;
    font-size: 24x;
    font-weight: 900;
`;
