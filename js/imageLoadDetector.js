function detectImageLoading(onLoadedHandler) {
    var images = document.getElementsByTagName('img');
    var totalImageCount = images.length;
    var loadedImageCount = 0;

    for(var i = 0; i < totalImageCount; i++) {
        images[i].onload = updateLoadedImageCount;
    }

    function updateLoadedImageCount() {
        loadedImageCount++;
        if (loadedImageCount === totalImageCount) {
            onLoadedHandler();
        }
    }
}
