import React from "react";

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
    const [likeAmount, setLikeAmount] = React.useState(likes.amount);
    const [heart, setHeart] = React.useState("heart-outline");

    function like() {
        if (heart.match(/outline/))
            setLikeAmount(likeAmount + 1);

        setHeart("heart");
    }

    function dislike() {
        setLikeAmount(likeAmount - 1);
        setHeart("heart-outline");
    }

    function toggleLike() {
        if (heart.match(/outline/))
            like();
        else
            dislike();
    }

    return (
        <div className="post">
            <Top user={user} />
            <Content content={content} like={like} />
            <Bottom actor={likes.actor} likeAmount={likeAmount} heart={heart} toggleLike={toggleLike} />
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

function Content({ content, like }) {
    return (
        <div className="conteudo">
            <img src={`assets/img/${content}.svg`} alt={content} onClick={like} />
        </div>
    );
}

function Bottom({ actor, likeAmount, heart, toggleLike }) {
    return (
        <div className="fundo">
            <Actions heart={heart} toggleLike={toggleLike} />
            <div className="curtidas">
                <img src={`assets/img/${actor}.svg`} alt={actor} />
                <div className="texto">
                    Curtido por <strong>{actor}</strong> e <strong>outras {likeAmount} pessoas</strong>
                </div>
            </div>
        </div>
    );
}

function Actions({ heart, toggleLike }) {
    const [bookmark, setBookmark] = React.useState("bookmark-outline");

    function toggleBookmark() {
        if (bookmark.match(/outline/)) {
            setBookmark("bookmark");
        } else {
            setBookmark("bookmark-outline");
        }
    }

    return (
        <div className="acoes">
            <div>
                <ion-icon name={heart} onClick={toggleLike}></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name={bookmark} onClick={toggleBookmark}></ion-icon>
            </div>
        </div>
    );
}
