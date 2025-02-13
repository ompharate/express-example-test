const axios = require('axios');

class DataService {
    constructor() {
        this.baseUrl = 'https://api.example.com';
        this.cache = new Map();
    }

    async fetchUserData(userId) {
        if (this.cache.has(userId)) {
            return this.cache.get(userId);
        }

        try {
            const response = await axios.get(`${this.baseUrl}/users/${userId}`);
            this.cache.set(userId, response.data);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch user data: ${error.message}`);
        }
    }

    async createUser(userData) {
        try {
            const response = await axios.post(`${this.baseUrl}/users`, userData);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    clearCache() {
        this.cache.clear();
    }

    async updateUserProfile(userId, profileData) {
        try {
            const response = await axios.put(`${this.baseUrl}/users/${userId}`, profileData);
            this.cache.delete(userId); // Invalidate cache
            return response.data;
        } catch (error) {
            throw new Error(`Failed to update user profile: ${error.message}`);
        }
    }
}

module.exports = new DataService();