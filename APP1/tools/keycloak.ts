let session = require('express-session');
let Keycloak = require('keycloak-js');

var keycloak = new Keycloak({
    url: 'http://keycloak-server/auth',
    realm: 'myrealm',
    clientId: 'myapp'
});

function initKeycloak() {
    if (keycloak) {
        console.warn("Trying to init Keycloak again!");
        return keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        const memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloak);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

initKeycloak()
