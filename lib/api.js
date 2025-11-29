// src/lib/api.js
// Simple wrappers for the backend endpoints used during onboarding.
// Replace URL placeholders with your real backend endpoints.
// For local dev, this file returns mocked successes if NO_BACKEND env flag is true.

const BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000"; // e.g. https://api.yoursite.com


export async function sendEmailOtp(data) {
    try {
        const res = await fetch(`${BASE}/email/send-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (e) {
        return { ok: false, error: "Server unreachable" };
    }
}

export async function verifyEmailOtp(data) {
    try {
        const res = await fetch(`${BASE}/email/verify-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (e) {
        return { ok: false, error: "Server unreachable" };
    }
}



async function request(path, body = {}, opts = {}) {
    const url = `${BASE}${path}`;
    const init = {
        method: opts.method || "POST",
        headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
        body: JSON.stringify(body),
    };

    // If you want a dev mock without backend, set NEXT_PUBLIC_MOCK_API = "true"
    const mock = process.env.NEXT_PUBLIC_MOCK_API === "true";
    if (mock) {
        // small simulated latency
        await new Promise((r) => setTimeout(r, 700));
        // Mock responses by path
        if (path === "/auth/send-otp") return { ok: true, data: { sessionId: "mock-session-123" } };
        if (path === "/email/verify-otp") {
            if (body.otp === "000000") return { ok: false, error: "Invalid OTP" };
            return { ok: true, data: { verified: true } };
        }
        if (path === "/identity/verify-bvn") {
            // simulate Monnify verify
            if (body.ninBvn === "11111111111") return { ok: false, error: "Not found" };
            return {
                ok: true,
                data: {
                    firstName: "Amina",
                    lastName: "Abdullahi",
                    dob: "1995-05-10",
                    bvnLinked: true,
                },
            };
        }
        if (path === "/auth/create-account") {
            if (body.email === "exists@example.com") return { ok: false, error: "Account already exists" };
            return { ok: true, data: { userId: "user_12345", token: "jwt.mock.token" } };
        }

        return { ok: false, error: "Unknown path (mock)" };
    }

    // Real request
    const res = await fetch(url, init);
    const json = await res.json().catch(() => null);
    if (!res.ok) return { ok: false, error: json?.message || `HTTP ${res.status}` };
    return { ok: true, data: json };
}

export async function sendOtp(phone) {
    return request("/auth/send-otp", { phone });
}

export async function verifyOtp({ phone, otp, sessionId }) {
    return request("/auth/verify-otp", { phone, otp, sessionId });
}

export async function verifyIdentity({ phone, ninBvn }) {
    // Your backend should call Monnify / BVN service and return identity data
    return request("/auth/verify-identity", { phone, ninBvn });
}

export async function createAccount(payload) {
    return request("/auth/create-account", payload);
}
