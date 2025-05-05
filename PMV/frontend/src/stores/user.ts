import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User } from '@/types/index';

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(false);
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);

  const savedUser = localStorage.getItem('user');
  const savedToken = localStorage.getItem('token');

  if (savedUser && savedToken) {
    user.value = JSON.parse(savedUser);
    token.value = savedToken;
    isAuthenticated.value = true;
  }

  const login = async (
    email: string,
    password: string,
  ): Promise<{ ok: boolean; message?: string }> => {
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error desconocido');
      }

      user.value = data.user;
      token.value = data.token;
      isAuthenticated.value = true;

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      return { ok: true };
    } catch (error) {
      isAuthenticated.value = false;
      user.value = null;
      token.value = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return { ok: false, message: String(error) };
    }
  };

  const register = async (
    email: string,
    password: string,
  ): Promise<{ ok: boolean; message?: string }> => {
    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error desconocido');
      }

      user.value = data.user;
      token.value = data.token;
      isAuthenticated.value = true;

      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);

      return { ok: true };
    } catch (error) {
      return { ok: false, message: String(error) };
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = null;
    token.value = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const isAdmin = computed(() => user.value?.role === 'admin');

  return { isAuthenticated, user, token, login, register, logout, isAdmin };
});
