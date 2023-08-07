// Fungsi untuk mendapatkan nilai warna acak dalam format #RRGGBB
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } 
  
  // Fungsi untuk mengubah warna teks secara berulang
  function changeTextColor() {
    const changingText = document.getElementById('changingText');
    const randomColor = getRandomColor();
    changingText.style.color = randomColor;
  }
  
  // Ubah warna teks setiap 1 detik (1000 milidetik)
  setInterval(changeTextColor, 200);