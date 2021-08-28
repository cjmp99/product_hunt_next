import React from 'react'
import styled from '@emotion/styled';
import { css } from '@emotion/core'

const InputText = styled.input`
    border: 1px solid var(--gray3);
    padding: 1rem;
    min-width: 300px;
    outline: none;
`;

const ButtonSearch = styled.button`
    height: 2rem;
    width: 3rem;
    display: block;
    background-size: 2rem;
    background-image: url('/static/img/search.png');
    background-repeat: no-repeat;
    position: absolute;
    right: 1rem;
    top: 10px;
    background-color: white;
    border: none;

    :hover{
        cursor: pointer;
    }
`;

const Search = () => {
    return (
        <form
            css={css`position: relative;`}
        >
            <InputText
                type='text'
                placeholder='Search products'
            />

            <ButtonSearch type='submit'/>
        </form>
    )
}

export default Search
