const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});


// استهداف زر الوضع
const themeToggle = document.querySelector('.light-mood i');

// وظيفة التحويل بين الوضعين
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // تغيير الأيقونة
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.classList.remove('bx-moon');
    themeToggle.classList.add('bx-sun');
  } else {
    themeToggle.classList.remove('bx-sun');
    themeToggle.classList.add('bx-moon');
  }

  // تخزين الوضع الحالي
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// عند التحميل استرجاع الوضع من localStorage
window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.classList.remove('bx-moon');
    themeToggle.classList.add('bx-sun');
  }
});
const scrollBtn = document.getElementById("scrollTopBtn");

// إظهار الزر عند النزول أسفل الصفحة
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
};

// عند الضغط يعيد لأعلى الصفحة
scrollBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};