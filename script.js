function openModal(type){
    document.getElementById('modal').style.display='block';
    document.getElementById('title').innerText=type==='merch'?'Оформление мерча':'Покупка билета';
}

function closeModal(){
    document.getElementById('modal').style.display='none';
}

function demo(){
    alert('Демонстрационный режим. Покупка отключена.');
}

// Scroll spy - отслеживание скролла и активация пунктов навигации
window.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Функция для определения активной секции
    function setActiveSection() {
        let currentActive = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY;
            
            // Если экран находится в пределах секции (с учетом 150px отступа сверху)
            if (scrollPosition >= (sectionTop - 150) && scrollPosition < (sectionTop + sectionHeight - 150)) {
                currentActive = section.getAttribute('id');
            }
        });
        
        // Убираем active с всех пунктов
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Добавляем active на соответствующий пункт
            if (link.getAttribute('href') === '#' + currentActive) {
                link.classList.add('active');
            }
        });
    }
    
    // Запуск при скролле с throttle (оптимизация)
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                setActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Первый запуск при загрузке
    setActiveSection();
});

// Открытие модального окна заказа для товара
function openOrderModal(productId) {
    alert('Перейдите на страницу товара для оформления заказа');
}