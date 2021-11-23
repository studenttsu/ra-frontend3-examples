// const delay = (ms = 2000) => {
//     return new Promise(resolve => setTimeout(() => resolve(), ms));
// }

// function getUser() {
//     return new Promise(resolve => {
//         resolve({
//             id: 1,
//             name: 'User'
//         })
//     });
// }

// function getUserPosts(id) {
//     return new Promise(resolve => {
//         resolve([
//             {
//               id: 1,
//               name: 'Post 1'
//             },
//             {
//               id: 2,
//               name: 'Post 2'
//             }
//           ])
//     });
// }


// getUser((user) => {
//     getUserPosts(user.id, posts => {
//         //
//     });
// });

// delay()
//     .then(() => getUser())
//     .then(({ id }) => getUserPosts(id))
//     .then(posts => console.log(posts))
//     .catch(error => console.error(error));

// Promise
//     .then(() => {})
//     .catch((error) => console.error(error))
//     .finally(() => console.log('Finally'));

// Promise
//     .all([ getUser(), getUserPosts(null) ])
//     .then(([ user, posts ]) => {});


// (async () => {

//     await delay();
//     // toggleLoader();

//     try {
//         const user = await getUser();
//         const userPosts = await getUserPosts(user.id);

//         console.log(user, userPosts);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         // toggleLoader();
//     }

// })();

$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '.btn-prev',
        nextArrow: '.btn-next',
        slidesToShow: 4,
        infinite: false
    });

    const input = document.getElementById('query-input');
    const usersList = document.getElementById('users-list');

    input.addEventListener('keyup', async () => {
        // посылем запрос
        // в цикле создаём новый элемент списка
        // вставляем в DOM

        usersList.innerHTML = '';
        const { value } = input;

        if (value) {
            const users = await fetchUsers(value);
        
            users.forEach(user => {
                const userEl = createUserEl(user);
                usersList.append(userEl);
            });

            return;
        }
    });

    function createUserEl({ name }, className = '') {
        const userEl = document.createElement('li');
        userEl.textContent = name;

        if (className) {
            userEl.classList.add(className);
        }

        return userEl;
    }

    function fetchUsers(name) {
        return fetch(`https://jsonplaceholder.typicode.com/users?name=${name}`)
            .then(response => response.json());
    }
});

