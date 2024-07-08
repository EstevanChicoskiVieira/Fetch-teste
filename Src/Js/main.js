function carregar() {
    fetch("../../Src/Json/data.json")
        .then(response => response.json())
        .then(imgs => {
            const container = document.querySelector("#container");

            imgs.map(img => {
                const card = document.createElement("div");
                card.classList.add("card");

                const img0 = document.createElement("img");
                img0.src = img.imagem;
                card.appendChild(img0);
                container.appendChild(card);

                console.log(img.imagem);
            });
        });
}

carregar();