"use client";

import { useState } from "react";

export default function LocationForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/locForm", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess("Your message has been sent successfully!");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    city: "",
                    service: "",
                    message: "",
                });
            }
        } catch (error) {
            console.log(error);
            setSuccess("Something went wrong. Try again!");
        }

        setLoading(false);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto space-y-4 p-4"
        >
            <input
                type="text"
                placeholder="Your Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="text-lg font-normal text-desc placeholder:text-desc w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="text-lg font-normal text-desc placeholder:text-desc w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="text-lg font-normal text-desc placeholder:text-desc w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <input
                type="text"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handleChange}
                className="text-lg font-normal text-desc placeholder:text-desc w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="text-lg font-normal text-desc placeholder:text-desc w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:ring-2 focus:ring-primary focus:outline-none"
            >
                <option value="">Services</option>

                <option value="Complex Care">Complex Care</option>
                <option value="Elderly Care">Elderly Care</option>
                <option value="Dementia Care">Dementia Care</option>
                <option value="Long Term Care">Long Term Care</option>
                <option value="Physical Disabilities Care">Physical Disabilities Care</option>
                <option value="Learning Disabilities Support">Learning Disabilities Support</option>
                <option value="Child Care">Child Care</option>
                <option value="Respite Care">Respite Care</option>
                <option value="Supported Living">Supported Living</option>
            </select>

            <textarea
                name="message"
                placeholder="Write Your Messages"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="text-lg font-normal text-desc placeholder:text-desc w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            />

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-secondary text-white font-semibold rounded-full text-lg hover:bg-primary transition-all flex items-center justify-center gap-2"
            >
                {loading ? "Sending..." : "Submit Now"}
                {!loading && <span>→</span>}
            </button>

            {success && (
                <p className="text-center text-green-600 font-medium">{success}</p>
            )}
        </form>
    );
}
