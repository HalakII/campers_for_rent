import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65e8ca914bb72f0a9c50682e.mockapi.io/api/',
});

export const fetchAllInfo = async () => {
  const response = await instance.get('advert');
  return response;
};
