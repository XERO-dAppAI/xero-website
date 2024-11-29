"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { ICPService } from '@/utils/icp';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await ICPService.initialize();
        const identity = ICPService.getIdentity();
        setIsAuthenticated(!identity.getPrincipal().isAnonymous());
      } catch (e) {
        console.warn('Auth initialization failed:', e);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async () => {
    try {
      const success = await ICPService.login();
      if (success) {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.error('Login failed:', e);
    }
  };

  const logout = async () => {
    try {
      await ICPService.logout();
      setIsAuthenticated(false);
    } catch (e) {
      console.error('Logout failed:', e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 