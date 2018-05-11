class GitHub {
    constructor() {
        this.client_id = '1af0dee651a0cf557b5c';
        this.client_secret = '08fbce9f19b97bb0071f8616ce5212f1058566ef';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile: profile //oder nur profile geht auch wenn beide gleich sind
        }
    }
}