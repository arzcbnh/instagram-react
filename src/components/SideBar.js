import User from "./User.js";
import Suggestions from "./Suggestions.js";

export default function SideBar() {
    return (
        <div className="sidebar">
            <User />
            <Suggestions />
        </div>
    );
}

/*
    <div class="sidebar">

        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
        </div>

        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>

    */
