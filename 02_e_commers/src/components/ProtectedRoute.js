"use client";
import { useAuth } from "@/context/Auth.context";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  console.log(user)

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-lg font-semibold ">Loading...</h1>
      </div>
    );
  }

  if (!user) return null;

  return children;
};

export default ProtectedRoute;
