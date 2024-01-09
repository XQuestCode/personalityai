import type { FormEvent } from "react";
import { useState } from "react";

export default function Form() {
    const [responseMessage, setResponseMessage] = useState("");
    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch("/api/feedback", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();
        if (data.greet) {
            setResponseMessage(data.message);
        }
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="character">
                Character
                <input type="text" id="character" name="character" autoComplete="character" required />
            </label>
            <label htmlFor="source">
                Source
                <input type="text" id="source" name="source" autoComplete="source" required />
            </label>
            <label htmlFor="greet">
                greet
                <input type="text" id="greet" name="greet" autoComplete="off" />
            </label>
            <button>Send</button>
            {responseMessage && <p>{responseMessage}</p>}
        </form>
    );
}