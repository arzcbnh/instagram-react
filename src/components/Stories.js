export default function Stories() {
    const users = [
        "9gag",
        "meowed",
        "barked",
        "nathanwpylestrangeplanet",
        "wawawicomics",
        "respondeai",
        "filomoderna",
        "memeriagourmet"
    ];

    return (
        <div className="stories">
            {users.map(u => <Story name={u} />)};
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story({name}) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={`assets/img/${name}.svg`} alt={name} />
            </div>
            <div className="usuario">{name}</div>
        </div>
    );
}
