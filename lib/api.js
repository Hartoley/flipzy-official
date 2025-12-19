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

// ✅ STEP 1 — Start BVN verification (Redirect Flow)
export async function initiateBVN({ phone, bvn, firstname, lastname }) {
    return request("/identity/bvn/initiate", {
        phone,
        bvn,
        firstname,
        lastname,
    });
}

// ✅ STEP 2 — Retrieve BVN after redirect (GET request)
export async function retrieveBVN(reference) {
    try {
        const res = await fetch(
            `${BASE}/identity/bvn/retrieve/${reference}`,
            { method: "GET" }
        );

        const json = await res.json().catch(() => null);

        if (!res.ok) {
            return { ok: false, error: json?.error || "BVN retrieval failed" };
        }

        return { ok: true, data: json?.data };
    } catch (err) {
        return { ok: false, error: err.message || "Network error" };
    }
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


// api.ts
export async function loginAccount(payload) {
    // request is your helper for fetch/axios
    return await request("/auth/login", payload);
}

