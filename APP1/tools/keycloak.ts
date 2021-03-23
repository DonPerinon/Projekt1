let session = require('express-session');
let Keycloak = require('keycloak-connect');

let _keycloak;

let keycloakConfig = {
    clientId: 'animalapp',
    bearerOnly: true,
    serverUrl: 'http://keycloak:8080/auth',
    realm: 'hobitgap',
    credentials: {
        secret: '62c99f7c-da55-48fb-ae4e-a27f132546b7'
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        const memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};