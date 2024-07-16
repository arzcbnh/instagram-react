export default function Posts() {
    const posts = [
        { user: "meowed", content: "gato-telefone", likes: { actor: "respondeai", amount: 101523 } },
        { user: "barked", content: "dog", likes: { actor: "adorable_animals", amount: 99159 } },
        { user: "meowed", content: "gato-telefone", likes: { actor: "respondeai", amount: 4823 } }
    ];

    return (
        <div className="posts">
            {posts.map(p => Post(p))}
        </div>
    );
}

function Post({ user, content, likes }) {
    return (
        <div className="post">
            <Top user={user} />
            <Content content={content} />
            <Bottom actor={likes.actor} amount={likes.amount} />
        </div>
    );
}

function Top({ user }) {
    return (
        <div className="topo">
            <div className="usuario">
                <img src={`assets/img/${user}.svg`} alt={user} />
                {user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}

function Content({ content }) {
    return (
        <div className="conteudo">
            <img src={`assets/img/${content}.svg`} alt={content} />
        </div>
    );
}

function Bottom({ actor, amount }) {
    return (
        <div className="fundo">
            <Actions />
            <div className="curtidas">
                <img src={`assets/img/${actor}.svg`} alt={actor} />
                <div className="texto">
                    Curtido por <strong>{actor}</strong> e <strong>outras {amount} pessoas</strong>
                </div>
            </div>
        </div>
    );
}

function Actions() {
    return (
        <div className="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    );
}
