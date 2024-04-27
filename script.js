
// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/ball-ping-pong-champion/id6479480717";
}


// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6c/0a/b8/6c0ab824-88a9-7696-f88b-bcd4e0a32b2b/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/246x0w.webp",
};

var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;



// ======== get images URL ========
imageUrl = {
//   image1: "https://vn-appstore.com/id010597666/images/img1.jpg",
//   image2: "https://vn-appstore.com/id010597666/images/img2.jpg",
//   image3: "https://vn-appstore.com/id010597666/images/img3.jpg",
//   image4: "https://vn-appstore.com/id010597666/images/img4.jpg",
//   image5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/c1/64/b8/c164b863-2e5d-ae7a-1468-e252fd397f51/91cd5628-1136-4138-9706-34685c329a7d_Des_12.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0b/5d/c1/0b5dc1e7-a9ea-6cfc-edb2-948e874d6dbd/af928ed3-87cc-4a58-9701-d561a22d3a83_Des_11.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/88/fa/fa/88fafa8f-a5f1-32ef-201b-34e053e1905c/e98088a5-95c4-4d28-99f3-0a1e60d2ea05_Des_13.jpg/434x0w.webp",
};

var getImg = imageUrl;
// document.getElementById('img1').src = getImg.image1
// document.getElementById('img2').src = getImg.image2
// document.getElementById('img3').src = getImg.image3
// document.getElementById('img4').src = getImg.image4
// document.getElementById('img5').src = getImg.image5

document.getElementById('pic1').src = getImg.appImg1
document.getElementById('pic2').src = getImg.appImg2
document.getElementById('pic3').src = getImg.appImg3

