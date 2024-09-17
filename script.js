document.addEventListener('DOMContentLoaded', () => {
    const acts = [{
            id: 'act1',
            title: 'Act 1: The King\'s Banquet',
            description: 'Scene opens with a grand banquet hall in the palace of King Ahasuerus (Xerxes) of Persia. The king is seated on his throne, surrounded by nobles, princes, and his queen, Vashti. The air is thick with laughter and the clinking of golden goblets.',
            image: 'images/act1.png'
        },
        {
            id: 'act2',
            title: 'Act 2: The Search for a New Queen',
            description: 'The scene transitions to a royal decree being sent out to gather beautiful young women from all over the kingdom. Among them is Esther, a young Jewish woman raised by her cousin Mordecai.',
            image: 'images/act2.png'
        },
        {
            id: 'act3',
            title: 'Act 3: The Plot Unfolds',
            description: 'Time passes. Haman, a powerful advisor to the king, grows furious when Mordecai refuses to bow to him. Haman devises a plan to annihilate all Jews in the kingdom.',
            image: 'images/act3.png'
        },
        {
            id: 'act4',
            title: 'Act 4: Esther\'s Dilemma',
            description: 'Mordecai sends word to Esther, urging her to plead with the king for her people. Esther is troubled, knowing that approaching the king uninvited could mean death.',
            image: 'images/act4.png'
        },
        {
            id: 'act5',
            title: 'Act 5: Esther\'s Courage',
            description: 'Esther, adorned in royal robes, approaches the king',
            image: 'images/act5.png'
        },
        {
            id: 'act6',
            title: 'Act 6: Victory and Deliverance',
            description: 'With Haman dead, Esther pleads with the king to revoke the decree against the Jews. The king allows a new decree to be issued, permitting the Jews to defend themselves.',
            image: 'images/act6.png'
        }
    ];

    acts.forEach(act => {
        const card = document.getElementById(act.id);
        card.addEventListener('click', () => {
            showActDetail(act);
        });
    });

    function showActDetail(act) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <h2>${act.title}</h2>
                <img src="${act.image}" alt="${act.title}">
                <p>${act.description}</p>
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
});