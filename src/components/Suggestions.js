export default function Suggestions() {
    const users = [
        { name: "bad.vibes.memes", reason: "Segue você" },
        { name: "chibirdart", reason: "Segue você" },
        { name: "razoesparaacreditar", reason: "Novo no Instagram" },
        { name: "adorable_animals", reason: "Segue você" },
        { name: "smallcutecats", reason: "Segue você" }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {users.map(u => Suggestion(u))}
        </div>
    );
}

function Suggestion({ name, reason }) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={`assets/img/${name}.svg`} alt={name + ".svg"} />
                <div className="texto">
                    <div className="nome">{name}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    );
}
