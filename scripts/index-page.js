import { BandSiteApi, Converter } from "./band-site-api.js";

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

const apiKey = {
  api_key: "e1c9def6-f72f-423a-8052-28b80097f9be",
};

const getRemoteCommentCall = async (key) => {
  const api = new BandSiteApi(key);
  const resApiData = await api.getComment();
  getComment(resApiData);
};

getRemoteCommentCall(apiKey.api_key);


const postRemoteCommentCall = async (key, comment) => {
  const api = new BandSiteApi(key);
  const resApiData = await api.postComment(comment);
  return resApiData
}

const ulCommentEl = document.querySelector(
  ".conversion-container__comment-list"
);

const getComment = (comments) => {
  comments.forEach((comment) => {
    console.log("initiated");

    const liComment = document.createElement("li");

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
    const usDate = new Converter(comment.timestamp);
    commenterDateContEl.textContent = usDate.getUsDateFormatter();

    commentHeaderContEl.appendChild(commenterNameContEl);
    commentHeaderContEl.appendChild(commenterDateContEl);

    commentDetailsContEl.appendChild(commentHeaderContEl);

    const commenterDespContEl = document.createElement("div");

    const commenterDespEl = document.createElement("p");
    commenterDespEl.classList.add("conversion-container__desp");

    commenterDespContEl.textContent = comment.comment;
    commenterDespContEl.appendChild(commenterDespEl);

    commentDetailsContEl.appendChild(commenterDespContEl);
    commentContEl.appendChild(commentDetailsContEl);

    liComment.appendChild(commentContEl);

    const commenterDividerEl = document.createElement("div");
    commenterDividerEl.classList.add("conversion-container__divider");

    liComment.appendChild(commenterDividerEl);

    ulCommentEl.prepend(liComment);
  });
};

//getComment(comments.reverse());

const commentFormEl = document.querySelector(".conversion-container__form");
commentFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameCom = e.target.name.value;
  const commentCom = e.target.comment.value;

  if (nameCom.length === 0) {
    e.target.name.classList.add("conversion-container__error");
    return;
  }

  if (commentCom.length === 0) {
    e.target.comment.classList.add("conversion-container__error");
    return;
  }

  const commentObj = {
    name: nameCom,
    comment: commentCom,
  };

 const uploadedComment = await postRemoteCommentCall(apiKey.api_key, commentObj);
  
  //comments.push(commentObj);
  e.target.name.value = "";
  e.target.comment.value = "";
  getComment([...[uploadedComment]]);
});





const usDateFormatter = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US");
};
