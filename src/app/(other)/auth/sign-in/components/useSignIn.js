'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNotificationContext } from '@/context/useNotificationContext';
import useQueryParams from '@/hooks/useQueryParams';
const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const {
    push
  } = useRouter();
  const {
    showNotification
  } = useNotificationContext();
  const queryParams = useQueryParams();
  const loginFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password')
  });
  const {
    control,
    handleSubmit
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'user@demo.com',
      password: '123456'
    }
  });
  const login = handleSubmit(async values => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: values?.email,
          password: values?.password
        })
      });
      const data = await res.json();
      if (res.ok) {
        // Optionally store token/user info here

        // localStorage.setItem('token', data?.data?.access_token);
        // localStorage.setItem('user', JSON.stringify(data?.data?.user));

        push(queryParams['redirectTo'] ?? '/dashboards/analytics');
        showNotification({
          message: 'Successfully logged in. Redirecting....',
          variant: 'success'
        });
      } else {
        showNotification({
          message: data?.error || 'Login failed',
          variant: 'danger'
        });
      }
    } catch (err) {
      showNotification({
        message: 'Network error',
        variant: 'danger'
      });
    }
    setLoading(false);
  });

  // Example: get current user info
  const getMe = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", { method: "GET" });
      return await res.json();
    } catch {
      return null;
    }
  };

  // Example: forgot password
  const forgotPassword = async (email) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      return await res.json();
    } catch {
      return null;
    }
  };

  // Example: reset password
  const resetPassword = async (payload) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      return await res.json();
    } catch {
      return null;
    }
  };
  return {
    loading,
    login,
    control,
    getMe,
    forgotPassword,
    resetPassword
  };
};
export default useSignIn;