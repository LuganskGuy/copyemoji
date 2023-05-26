function copyEmoji(emoji) {
    const el = document.createElement('textarea');
    el.value = emoji.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Эмодзи скопирован в буфер обмена!');
}
