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

// Открытие модального окна заказа для товара
function openOrderModal(productId) {
    // Эта функция будет переопределена в product.html
    alert('Перейдите на страницу товара для оформления заказа');
}