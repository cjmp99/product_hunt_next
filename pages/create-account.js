import React from 'react'
import Layout from '../components/layout/Layout'
import { ContentInput, Form, Submit, Error } from '../styled-components/form/Form'
import { css } from '@emotion/core'
import useValidation from '../hooks/useValidation'
import validationsCreateAccount from '../validations/validationsCreateAccount'

const initialState = {
    name: '',
    email: '',
    password: '',
}

const CreateAccount = () => {
    const {
        error,
        values,
        handleChange,
        handleSubmit,
        handleBlur
    } = useValidation(initialState, validationsCreateAccount, createAccount)

    const { name, email, password } = values;

    function createAccount() {
        console.log('create account...');
    }

    return (
        <Layout>
            <h1 css={css`text-align:center; margin-bottom: 5rem;`}>Create Account</h1>
            <Form
                onSubmit={handleSubmit}
                noValidate
            >
                <ContentInput>
                    <label htmlFor='name'>Your name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Your name'
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </ContentInput>

                {error.name && <Error>{error.name}</Error>}

                <ContentInput>
                    <label htmlFor='email'>Your email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Your email'
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </ContentInput>

                {error.email && <Error>{error.email}</Error>}

                <ContentInput>
                    <label htmlFor='password'>Your password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Your password'
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </ContentInput>

                {error.password && <Error>{error.password}</Error>}


                <Submit type='submit'>Register</Submit>
            </Form>
        </Layout>
    )
}

export default CreateAccount
