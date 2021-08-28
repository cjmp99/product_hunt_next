import styled from '@emotion/styled'

export const Button = styled.a`
    font-weight: 700;
    text-transform: uppercase;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? props.bgColor : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000'};
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }
`;