const API_URL = import.meta.env.VITE_APP_API_URL;

export const basicMockedUrl = `${API_URL}/?limit=20&offset=0`;
export const searchMockedUrl = `${API_URL}/?search=iphone&limit=20&offset=0`;
export const limitOffsetMockedUrl = `${API_URL}/?limit=10&offset=20`;
