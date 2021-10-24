window.addEventListener('load', solve);

function solve() {
    const genre = document.getElementById('genre');
    const name = document.getElementById('name');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd);
    const collectionEl = document.querySelector('div.all-hits-container');
    const savedContainer = document.querySelector('#saved-hits div.saved-container');

    function onAdd(e) {
        e.preventDefault();

        inputs = {
            genre: genre.value,
            name: name.value,
            author: author.value,
            date: date.value,
        }

        if (inputs.genre === ''
            || inputs.name === ''
            || inputs.author === ''
            || inputs.date === '') {
            console.log('failure');
            return;
        }

        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';


        const divEl = document.createElement('DIV');
        divEl.className = 'hits-info';
        const imgEl = document.createElement('IMG');
        imgEl.src = "./static/img/img.png";
        const h2 = document.createElement('H2');
        h2.textContent = `Genre: ${inputs.genre}`;
        const h2_second = document.createElement('H2');
        h2_second.textContent = `Name: ${inputs.name}`;
        const h2_third = document.createElement('H2');
        h2_third.textContent = `Author: ${inputs.author}`;
        const h3 = document.createElement('H3');
        h3.textContent = `Date: ${inputs.date}`;

        const saveBtn = document.createElement('BUTTON');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', onSave);


        const likeBtn = document.createElement('BUTTON');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', onLike);

        const deleteBtn = document.createElement('BUTTON');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', onDelete);


        divEl.appendChild(imgEl);
        divEl.appendChild(h2);
        divEl.appendChild(h2_second);
        divEl.appendChild(h2_third);
        divEl.appendChild(h3);
        divEl.appendChild(saveBtn);
        divEl.appendChild(likeBtn);
        divEl.appendChild(deleteBtn);


        collectionEl.appendChild(divEl);

        function onLike(e) {
            e.target.disabled = true;
            const totalLikes = document.querySelector('#total-likes div.likes p');
            let likesValue = Number(totalLikes.textContent.split(' ')[2]);
            totalLikes.textContent = `Total Likes: ${likesValue + 1}`;
        }

        function onSave() {
            savedContainer.appendChild(divEl);
            likeBtn.remove();
            saveBtn.remove();

        }


        function onDelete() {
            divEl.remove();
        }

    }
}

