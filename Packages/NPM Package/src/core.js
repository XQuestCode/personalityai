// src/index.js
const axios = require('axios');
class PersonalityAI {
    isAdvanced = false;
    advancedOptions = null;
    constructor(apiBaseUrl = null, chatOptions = null) {
        this.apiBaseUrl = apiBaseUrl || 'https://personalityai.onrender.com';
        if (chatOptions != null) {
            this.isAdvanced = true;
            this.advancedOptions = chatOptions;
        }
    }
    async test() {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/test`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to test API: ${error.message}`);
        }
    }
    async chat(prompt, character, source) {
        try {
            if (!this.isAdvanced) {
                const body = {
                    prompt: prompt,
                    character: character,
                    source: source,
                }
                const response = await axios.post(`${this.apiBaseUrl}/chat`, body);
                return response.data;
            } else {
                const body = {
                    prompt: prompt,
                    character: character,
                    source: source,
                    advancedOptions: this.advancedOptions,
                }
                const response = await axios.post(`${this.apiBaseUrl}/chat`, body);
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to perform chat: ${error.message}`);
        }
    }
    // Add more methods as needed
    async profile(character, source) {
        try {
            const body = {
                character: character,
                source: source,
            }
            const response = await axios.post(`${this.apiBaseUrl}/profile`, body);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to create new profile: ${error.message}`);
        }
    }
    async images(source, number, options = null) {
        try {
            if (options == null) {
                const body = {
                    source: source,
                    number: number,
                }
                const response = await axios.post(`${this.apiBaseUrl}/images`, body);
                return response.data;
            } else {
                const body = {
                    source: source,
                    number: number,
                    options: options
                }
                const response = await axios.post(`${this.apiBaseUrl}/images`, body);
                return response.data;
            }
        } catch (error) {
            throw new Error(`Failed to get images: ${error.message}`);
        }
    }
    async conversations(id) {
        try {
            const response = await axios.get(`${this.apiBaseUrl}/chat-history/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get conversations: ${error.message}`);
        }
    }
}
module.exports = PersonalityAI;
