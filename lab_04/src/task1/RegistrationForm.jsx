import { useState } from 'react';
function  validateName(name) {
    if (!name) return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    return '';
}

function validateEmail(email) {
    if (!email) return 'Email is required';
    const regex = /[s@]+@[\s@]+\.[\s@]+/;
    if (!regex.test(email)) return 'Invalid email format';
    return '';
}

function validateAge(age) {
    if (!age) return 'Age is required'
    if (Number(age) < 18) return 'Age must be 18 or older';
    return '';
}

export default function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');

    const [success, setSuccess] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const nError = validateName(name);
        const eError = validateEmail(email);
        const aError = validateAge(age);

        setNameError(nError);
        setEmailError(eError);
        setAgeError(aError);

        if (nError || eError || aError) return;

        setSuccess(true);
        setName('');
        setEmail('');
        setAge('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={'Name'}
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    setNameError(validateName(e.target.value));
                }}
            />
            {nameError && <p style={{ color: 'red'}}>{nameError}</p> }

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(validateEmail(e.target.value));
                }}
            />
            {emailError && <p style={{ color: 'red' }}>{emailError}</p> }

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => {
                    setAge(e.target.value);
                    setAgeError(validateAge(e.target.value));
                }}
            />
            {ageError && <p style={{ color: 'red'}}>{ageError}</p> }

            <button type="submit">Submit</button>

            {success && <p style={{ color: 'green'}}>Registration succesful!</p>}
        </form>
    )
}