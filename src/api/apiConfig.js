const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7eed64c3fbdfb7d6e4bcec8f6de1e68c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;