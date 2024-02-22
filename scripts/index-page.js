const comments = [
  {
    name: "Victor Pinto",
    date: "11/02/2023",
    description:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Christina Cabrera",
    date: "10/28/2023",
    description:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Isaac Tadesse",
    date: "10/20/2023",
    description:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentEl = document.querySelector(".conversion-container");

const getComment = (comments) => {
  comments.forEach((comment) => {
    console.log("initiated");

    const commentContEl = document.createElement("div");
    commentContEl.classList.add("conversion-container__comment");

    const commentPPContEl = document.createElement("div");
    commentPPContEl.classList.add("conversion-container__pp-img");

    const commentImageEl = document.createElement("img");
    commentImageEl.classList.add("conversion-container__commenter-img");

    commentPPContEl.appendChild(commentImageEl);
    commentContEl.appendChild(commentPPContEl);

    const commentDetailsContEl = document.createElement("div");
    commentDetailsContEl.classList.add("conversion-container__comment-details");

    const commentHeaderContEl = document.createElement("div");
    commentHeaderContEl.classList.add("conversion-container__header");

    const commenterNameContEl = document.createElement("h3");
    commenterNameContEl.classList.add("conversion-container__name");

    const commenterDateContEl = document.createElement("p");
    commenterDateContEl.classList.add("conversion-container__date");

    commenterNameContEl.textContent = comment.name;
    commenterDateContEl.textContent = comment.date;

    commentHeaderContEl.appendChild(commenterNameContEl);
    commentHeaderContEl.appendChild(commenterDateContEl);

    commentDetailsContEl.appendChild(commentHeaderContEl);

    const commenterDespContEl = document.createElement("div");

    const commenterDespEl = document.createElement("p");
    commenterDespEl.classList.add("conversion-container__desp");

    commenterDespContEl.textContent = comment.description;
    commenterDespContEl.appendChild(commenterDespEl);

    commentDetailsContEl.appendChild(commenterDespContEl);
    commentContEl.appendChild(commentDetailsContEl);

    commentEl.appendChild(commentContEl);

    const commenterDividerEl = document.createElement("div");
    commenterDividerEl.classList.add("conversion-container__divider");

    commentEl.appendChild(commenterDividerEl);
  });
};

getComment(comments);

const commentFormEl = document.querySelector(".conversion-container__form");
commentFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("name =", e.target.name.value);
  console.log("comment =", e.target.comment.value);
  const nameCom = e.target.name.value;
  const commentCom = e.target.comment.value;
  if(nameCom.length === 0 && commentCom.length === 0){
    return console.log("is empty")
  }

  const commentObj = [{
    name: nameCom,
    description: commentCom,
    date: "02/21/2024",
  }];
  //comments.push(commentObj);
  e.target.name.value = "";
  e.target.comment.value = "";
  //or  the next line
  //commentFormEl.reset();
  getComment(commentObj);
});
