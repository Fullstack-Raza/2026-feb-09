let users = [
  {
    naam: "Muhammad",
    age: 24,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/736x/af/69/d4/af69d49833bf9ce25eaec7377896541c.jpg",
    like: false,
  },
  {
    naam: "Raza",
    age: 14,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/736x/9a/98/45/9a9845c57f34c294da2a55f335b8ad94.jpg",
    like: false,
  },
  {
    naam: "Muhsin",
    age: 17,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/736x/e3/0a/f0/e30af0a35624f9b2e37656a5ed370134.jpg",
    like: false,
  },
  {
    naam: "Hassan",
    age: 19,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/1200x/dd/51/84/dd51840cd2c1d69dedae74fcb2ce6943.jpg",
    like: false,
  },
  {
    naam: "Hussain",
    age: 20,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/736x/91/62/28/916228c7d4f70e00ed576da1dd34830a.jpg",
    like: false,
  },
  {
    naam: "Zain",
    age: 56,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/736x/f3/84/12/f384120f2c500891ceadc4117eea47f8.jpg",
    like: false,
  },
  {
    naam: "Mureed",
    age: 89,
    dic: "ea sb aik demo hy tu plz dil pr na len",
    img: "https://i.pinimg.com/736x/32/87/9d/32879dd219ed7f74c372a494e96fa89a.jpg",
    like: false,
  },
];
const main = document.querySelector("main");
users.forEach(function (user) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<i class="ri-poker-hearts-fill"></i> <img src="${user.img}" /> <h2>${user.naam}</h2>
    <h3>${user.age}</h3>
    <p>${user.dic}</p>`;
  main.appendChild(card);
});

/////////////////////////////////////////////////////////////////////////////

const reels = [
  {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
     userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://images.unsplash.com/photo-1603415526960-f7e0328d64f0"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
   userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
   {
    username: "codewithayush",
    likeCount: 14820,
    isLiked: true,
    commentCount: 423,
    shareCount: 92,
    isFollowed: true,
    caption: "Dark mode light mode. Change my mind.",
    video: "",
    userprofile: "https://i.pinimg.com/736x/d4/ba/0f/d4ba0fbb78f38426fdc8d22a9bc11cb8.jpg"
  },
];

let reel = "";

reels.forEach(function(vid){
  reel = reel + `          <div class="reel">
            <img class="main-img" src="https://i.pinimg.com/736x/ff/34/76/ff34762cffec82eb845251c57d0ad148.jpg" alt="">
            <div class="bottom">
              <div class="user">
                <img src="${vid.userprofile}" alt="">
                <h4>${vid.username}</h4>
                <button>${vid.isFollowed?"Unfollow":"Follow"}</button>
              </div>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like-icon icon"><i class="ri-heart-3-line"></i></h4>
                <h6>${vid.likeCount}</h4>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${vid.commentCount}</h4>
              </div>
              <div class="share">
                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                <h6>${vid.shareCount}</h4>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;

})

const allreel = document.querySelector(".all-reels")
allreel.innerHTML = reel