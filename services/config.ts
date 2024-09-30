
const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const endpoints = {
  auth: {
    login: `${BASE_URL}/auth/login`,
    register: `${BASE_URL}/auth/register`,
  },
};

export default endpoints;
