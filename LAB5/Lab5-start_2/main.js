const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images 
   ***23520509****
Image paths */
const imgPaths = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg'
];

for (const imgPath of imgPaths) {
  const newImage = document.createElement('img'); // Tạo phần tử <img>
  newImage.setAttribute('src', imgPath); // Thiết lập thuộc tính src
  thumbBar.appendChild(newImage); // Thêm hình ảnh vào thumbBar

  //23520509
  // Thêm sự kiện onclick vào từng hình ảnh thu nhỏ
  newImage.addEventListener('click', () => {
    displayedImage.src = imgPath; // Hiển thị hình ảnh được chọn
  });
}

//23520509
/* Thiết lập chức năng nút Darken/Lighten */
btn.addEventListener('click', () => {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light'); // Đổi sang lớp "light"
    btn.textContent = 'Lighten'; // Thay đổi nội dung nút
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; // Áp dụng hiệu ứng làm tối
  } else {
    btn.setAttribute('class', 'dark'); // Đổi sang lớp "dark"
    btn.textContent = 'Darken'; // Thay đổi nội dung nút
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // Xóa hiệu ứng làm tối
  }
});