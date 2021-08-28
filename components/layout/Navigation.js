import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';

const Nav = styled.nav`
    padding-left: 2rem;

    a{
        font-size:  1.8rem;
        margin-left: 2rem;
        color: var(--gray2);
        font-family: 'PT Sans', sans-serif;

    }
`;

const Navigation = () => {
    return (
        <Nav>
            <Link href='/'>Home</Link>
            <Link href='/populates'>Populates</Link>
            <Link href='/new-product'>New Product</Link>
        </Nav>
    )
}

export default Navigation
