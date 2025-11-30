// src/lib/api.js
const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

async function request(path, body = {}, method = "POST") {
    try {
        console.log("➡️ Sending Request:", path, body);

        const res = await fetch(`${BASE}${path}`, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const json = await res.json().catch(() => null);

        if (!res.ok) {
            console.error("❌ Backend Error:", json);
            return { ok: false, error: json?.error || `HTTP ${res.status}` };
        }

        console.log("✅ Backend Response:", json);
        return { ok: true, data: json.data };
    } catch (err) {
        console.error("🔥 Network Error:", err);
        return { ok: false, error: err.message || "Network Error" };
    }
}

// ------------------------
// AUTH
// ------------------------
export async function sendEmailOtp(data) {
    return request("/email/send-otp", data);
}

export async function verifyEmailOtp(data) {
    return request("/email/verify-otp", data);
}

export async function sendOtp(phone) {
    return request("/auth/send-otp", { phone });
}

export async function verifyOtp({ phone, otp, sessionId }) {
    return request("/auth/verify-otp", { phone, otp, sessionId });
}

// ------------------------
// IDENTITY (BVN / NIN)
// ------------------------
export async function verifyBVN(payload) {
    return request("/identity/verify-bvn", payload);
}

export async function verifyNIN(payload) {
    return request("/identity/verify-nin", payload);
}

// ------------------------
// ACCOUNT CREATION
// ------------------------
export async function createAccount(payload) {
    return request("/auth/create-account", payload);
}
