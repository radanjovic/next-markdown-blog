import { useState } from "react";

// Custom hook to extract and validate value on inputs
export default function useInput(validator) {
    const [value, setValue] = useState('');
    const isValid = validator(value);

    function handleChange(event) {
        setValue(event.target.value);
    }

    function reset() {
        setValue('');
    }

    return {
        value,
        isValid,
        handleChange,
        reset
    }
}