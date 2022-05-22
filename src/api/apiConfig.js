const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6af76f4189e3b1e6cf8f1e055f9918eb',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;