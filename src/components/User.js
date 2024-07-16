import React from "react";

export default function User() {
    const [username, setUsername] = React.useState("catanacomics");
    const [avatar, setAvatar] = React.useState("assets/img/catanacomics.svg");

    function promptNewData(query, callback) {
        const newData = prompt(query);

        if (newData)
            callback(newData);
    }

    return (
        <div className="usuario">
            <img src={avatar} onClick={() => promptNewData("Envie a URL da sua nova imagem de perfil:", setAvatar)} alt="imagem de perfil" />
            <div className="texto">
                <span>
                    <strong>{username}</strong>
                    <ion-icon name="pencil" onClick={() => promptNewData("Qual nome de usuário gostaria de usar?", setUsername)}></ion-icon>
                </span>
            </div>
        </div>
    );
}
