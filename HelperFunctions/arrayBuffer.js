function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const chunkSize = 0x8000;
    for (let i = 0; i < bytes.length; i += chunkSize) {
        for (let i = 0; i <chunkSize; i++) {
            binary += String.fromCharCode(bytes[i]);
    }
}
return btoa(binary);
}
export {arrayBufferToBase64};