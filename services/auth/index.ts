import endpoints from "../config";

interface UserData {
  name: string;
  email: string;
  password: string;
}
interface UserLogin {
  email: string;
  password: string;
}
const API_URL = endpoints.auth;
export const registerUser = async (userData: UserData): Promise<any> => {
  try {
    const response = await fetch(API_URL.register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error en el registro');
    }

    const data = await response.json();
    return data; // Devuelve la respuesta de la API si es necesario
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error; // Propaga el error para manejarlo donde se llama a esta función
  }
};


export const loginUser = async (userData: UserLogin): Promise<any> => {
  try {
    const response = await fetch(API_URL.login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error en el registro');
    }

    const data = await response.json();
    return data; // Devuelve la respuesta de la API si es necesario
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error; // Propaga el error para manejarlo donde se llama a esta función
  }
};
