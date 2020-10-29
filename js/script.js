function init() {
    textImage = TextImage();
    form = document.querySelector('form');
    textarea = form.querySelector('textarea[name="image-text"]');
    imageDisplay = form.querySelector('.image-display');
    imageDownload = form.querySelector('.image-download');
    form.addEventListener('change', updateImage, false);
    textarea.addEventListener('keyup', updateImage, false);
    updateImage();
}

function updateImage() {
    var style = {
            font: 'ChickenMcNuggets',
            size: parseInt(form.querySelector('select[name="font-size"]').value),
        },
        message = textarea.value;
    textImage.setStyle(style);
    textarea.setAttribute('style',
        'font: ' + textImage.style.size + 'pt ' + textImage.style.font + ';')
    textImage.toImage(message, function () {
        imageDisplay.innerHTML = this.outerHTML;
        imageDownload.href = this.src;
        // imageDisplay.appendChild(imageDownload);
    });
}

window.addEventListener('load', init, false);
