import { useState, useEffect } from 'react'

const useValidation = (initialState, validate, fn) => {
    const [values, setValues] = useState(initialState);
    const [error, setError] = useState({})
    const [submirForm, setSubmitForm] = useState(false)

    useEffect(() => {
        if (submirForm) {
            const noErrors = Object.keys(error).length === 0;

            if (noErrors) {
                fn()
            }
            setSubmitForm(false)
        }
    }, [error])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidation = validate(values)
        setError(errorsValidation)
        setSubmitForm(true)
    }

    const handleBlur = () => {
        const errorsValidation = validate(values)
        setError(errorsValidation)
    }

    return {
        error,
        values,
        handleChange,
        handleSubmit,
        handleBlur
    }
}

export default useValidation
