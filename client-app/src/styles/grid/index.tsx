import styled from 'styled-components';

interface IStyledProps{
    size: number
}

export const Grid = styled.div``;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    flex: ${(prop: IStyledProps) => prop.size};
`;