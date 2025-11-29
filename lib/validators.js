// src/lib/validators.js

export function validPhone(phone = "") {
    // Accept +2348012345678 or 08012345678 or 2348012345678
    const normalized = phone.replace(/\s+/g, "");
    // Nigerian phone regex (basic)
    const regex = /^(?:\+234|234|0)?(70|80|81|90|91|92|93|94|95|96|97|98|99|71|77|88)\d{8}$/;
    return regex.test(normalized);
}

export function validOtp(otp = "") {
    return /^\d{6}$/.test(otp);
}

export function validBvnOrNin(val = "") {
    const stripped = val.replace(/\s+/g, "");
    // BVN: 11 digits; NIN: often 11-14 digits. We'll accept 11-14 digits for NIN.
    return /^\d{11,14}$/.test(stripped);
}

export function validEmail(email = "") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validPassword(pw = "") {
    // example: min 8, at least one letter and one number — tweak per your policy
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(pw);
}
