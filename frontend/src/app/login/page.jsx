"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import LoginForm from "@/components/login/LoginForm";

const Login = () => {
  return <LoginForm />;
};

export default Login;
