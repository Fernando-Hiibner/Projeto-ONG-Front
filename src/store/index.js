class store {
    constructor() {
        this.usuario = null;
        this.token = null;

        this.profilePicture = null;
        this.profileBanner = null;

        this.profileInfos = null;
    }
    get getUser() {
        return this.usuario;
    }
    set setUser(usuario) {
        this.usuario = usuario;
    }
    get getToken() {
        return this.token;
    }
    set setToken(token) {
        this.token = token;
        if(this.token === null) {
            localStorage.removeItem("token");
        }
        else {
            localStorage.setItem("token", token);
        }
    }
    get getProfilePicture() {
        return this.profilePicture.startsWith("var/www/Projeto ONG/projeto_ong_files/") ? 'http://127.0.0.1:8000/' + this.profilePicture : this.profilePicture;
    }
    set setProfilePicture(profilePicture) {
        this.profilePicture = profilePicture;
    }
    get getProfileBanner() {
        return this.profileBanner.startsWith("var/www/Projeto ONG/projeto_ong_files/") ? 'http://127.0.0.1:8000/' + this.profileBanner : this.profileBanner;
    }
    set setProfileBanner(profileBanner) {
        this.profileBanner = profileBanner;
    }
    get getProfileInfos() {
        return this.profileInfos;
    }
    set setProfileInfos(profileInfos) {
        this.profileInfos = profileInfos;
    }
}

const store_plugin = {
    install(Vue) {
        Vue.prototype.$store = new store();
    }
}

export default store_plugin;
