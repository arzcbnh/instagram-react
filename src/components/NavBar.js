export default function NavBar() {
    return (
        <div className="navbar">
            <div className="container">
                <Logo />
                <Search />
                <Icons />
                <IconsMobile />
            </div>
        </div>
    );
}

function Logo() {
    return (
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="assets/img/logo.png" alt="logo" />
        </div>
    );
}

function Search() {
    return (
        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}

function Icons() {
    return (
        <div className="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function IconsMobile() {
    return (
        <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}
