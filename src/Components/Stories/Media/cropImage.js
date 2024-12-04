// cropImage.js

export default async function getCroppedImg(imageSrc, crop, rotation = 0) {
    const createImage = (url) =>
        new Promise((resolve, reject) => {
            const image = new Image();
            image.addEventListener('load', () => resolve(image));
            image.addEventListener('error', (error) => reject(error));
            image.setAttribute('crossOrigin', 'anonymous'); // This helps with CORS issues
            image.src = url;
        });

    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const safeArea = Math.max(image.width, image.height) * 2;

    // Set canvas dimensions to match the safe area to ensure no cropping happens
    canvas.width = safeArea;
    canvas.height = safeArea;

    // Translate the context to the center of the canvas
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
        image,
        safeArea / 2 - image.width * 0.5,
        safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    // Set the canvas size to the size of the cropped area
    canvas.width = crop.width;
    canvas.height = crop.height;

    // Put the cropped image onto the smaller canvas
    ctx.putImageData(
        data,
        0 - safeArea / 2 + image.width * 0.5 - crop.x,
        0 - safeArea / 2 + image.height * 0.5 - crop.y
    );

    // Return the new cropped image as a base64 encoded string
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            const fileUrl = URL.createObjectURL(blob);
            resolve(fileUrl);
        }, 'image/jpeg');
    });
}
