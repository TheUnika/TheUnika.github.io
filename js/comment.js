let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentFeld = document.querySelector ('.comment-feld');
let count = 1;
commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let newComment = document.createElement ('li');
    if (count<1){
    newComment.classList.add('user-comment');
    count ++;
    }else {
        newComment.classList.add('user-comment1');
        count =0;
    }
    newComment.textContent = commentFeld.value ;
    commentList.append (newComment);
}