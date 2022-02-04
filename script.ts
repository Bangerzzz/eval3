const Site = document.querySelector(".user-site") as HTMLDivElement;
let DataUser;
let DataPost;

const fetchPostUser = async () => {
  const respUser = await fetch("https://jsonplaceholder.typicode.com/users");
  DataUser = await respUser.json();

  const respPost = await fetch("https://jsonplaceholder.typicode.com/posts");
  DataPost = await respPost.json();

  const data = DataUser.map((user) => {
    return Object.assign(
      {},
      user,
      DataPost.filter((post) => post.userId === user.id)
    );
  });
  let html: string = "";

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
};
fetchPostUser();