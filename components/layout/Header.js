import React from 'react'
import Search from '../search/Search'
import Navigation from './Navigation'
import styled from '@emotion/styled';
import { css } from '@emotion/core'
import Link from 'next/link';
import { Button } from '../../styled-components/button/Button';


const ContentHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media (min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`;

const Logo = styled.p`
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 0;
    font-family: 'Roboto Slab', serif;
    margin-right: 2rem;
    cursor: pointer;
`;

const Header = () => {
    const user = false
    return (
        <header
            css={css`
                border-bottom: 2px solid var(--gray3);
                padding: 1rem 0;
            `}
        >
            <ContentHeader>
                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    <Link href="/">
                        <Logo>P</Logo>
                    </Link>

                    <Search />

                    <Navigation />
                </div>

                <div
                    css={css`
                        display: flex;
                        align-items: center;
                    `}
                >
                    {user ? (
                        <>
                            <p
                                css={css`margin-right: 2rem;`}
                            >Hola: Carlos</p>
                            <Button bgColor={'#DA552F'}>Cerrar sesión</Button>

                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <Button bgColor={'#DA552F'}>Login</Button>
                            </Link>
                            <Link href="/create-account">
                                <Button>
                                    Register
                                </Button>
                            </Link>
                        </>
                    )}



                </div>
            </ContentHeader>
        </header>
    )
}

export default Header
