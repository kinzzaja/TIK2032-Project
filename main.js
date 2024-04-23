document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#ff6b6b';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#555';
    });
});

const footer = document.querySelector('footer');
const dateTime = document.createElement('p');
dateTime.textContent = `Tanggal dan waktu saat ini: ${new Date().toLocaleString()}`;
footer.appendChild(dateTime);

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;

    if (name === '' || email === '') {
        alert('Nama dan Email harus diisi!');
        event.preventDefault();
    }
});
