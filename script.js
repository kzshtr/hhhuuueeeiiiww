document.addEventListener('DOMContentLoaded', () => {
    const telegramButton = document.getElementById('telegramButton');

    if (telegramButton) {
        const telegramUrl = `https://t.me/tripX_bot`;

        telegramButton.addEventListener('click', () => {
            window.open(telegramUrl, '_blank'); // Открывает в новой вкладке
        });
    } else {
        console.error('Кнопка Telegram с ID "telegramButton" не найдена.');
    }
});
