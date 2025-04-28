import { defineStore } from 'pinia';
import { ref } from 'vue';
import users from '@/data/users.json';

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(false);
  const user = ref<{ email: string; role: 'admin' | 'user' | string } | null>(
    null,
  );

  function login(email: string, password: string) {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (foundUser) {
      user.value = { email: foundUser.email, role: foundUser.role };
      isAuthenticated.value = true;
      return true;
    }

    isAuthenticated.value = false;
    user.value = null;
    return false;
  }

  function logout() {
    isAuthenticated.value = false;
    user.value = null;
  }

  return { isAuthenticated, user, login, logout };
});
