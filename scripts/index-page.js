import * as apiClientProvider from "./band-site-api.js";

const apiKey = new apiClientProvider.Constant().getApiKey();

const getRemoteCommentCall = async (key) => {
  const getCommentClient = new apiClientProvider.BandSiteApi(key);
  const resApiData = await getCommentClient.getComment();
  getComment(resApiData);
};

getRemoteCommentCall(apiKey);

const postRemoteCommentCall = async (key, comment) => {
  const postCommentClienct = new apiClientProvider.BandSiteApi(key);
  const resApiData = await postCommentClienct.postComment(comment);
  return resApiData;
};

const ulCommentEl = document.querySelector(
  ".conversion-container__comment-list"
);

const getComment = (comments) => {
  comments.forEach((comment) => {
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
    const usDateFormat = new apiClientProvider.Converter(comment.timestamp);
    commenterDateContEl.textContent = usDateFormat.getUsDateFormatter();

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

  const uploadedComment = await postRemoteCommentCall(apiKey, commentObj);

  e.target.name.value = "";
  e.target.comment.value = "";
  getComment([...[uploadedComment]]);
});
