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

    const data = await response.json();
    if (!response.ok) {
      return { error: data.error || 'Error en el inicio de sesión' };
    }
    return data;
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
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

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || 'Error en el inicio de sesión' };
    }

    return data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    return { error: 'Error al conectar con el servidor. Inténtalo más tarde.' };
  }
};

