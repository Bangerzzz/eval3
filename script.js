var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Site = document.querySelector(".user-site");
let DataUser;
let DataPost;
const fetchPostUser = () => __awaiter(this, void 0, void 0, function* () {
    const respUser = yield fetch("https://jsonplaceholder.typicode.com/users");
    DataUser = yield respUser.json();
    const respPost = yield fetch("https://jsonplaceholder.typicode.com/posts");
    DataPost = yield respPost.json();
    const data = DataUser.map((user) => {
        return Object.assign({}, user, DataPost.filter((post) => post.userId === user.id));
    });
    let html = "";
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        html += `
              <h2>${data[i].name}</h2>
              <p>${data[i].email}</p>
              <h1>Titre des articles rédigés</h1>
              <ul>
            `;
        data.map((data) => {
            html += `<li>
        ${data[i].title}
      </li></ul>`;
        });
    }
    Site.innerHTML = html;
});
fetchPostUser();
