"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const { loggedIn, setLoggedIn } = useLocalStorage();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("email", email);
      router.replace("/");
      setLoggedIn(true);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (loggedIn) {
      router.replace("/");
      setLoading(true);
    } else {
      setEmail("user@example.com");
      setPassword("User@1234");
      setLoading(false);
    }
  }, [router,loggedIn]);
  return (
    <>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <main className="min-h-screen flex items-center text-black justify-center">
          <div className="bg-white/90 p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005DB5]"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005DB5]"
              />
              <button
                type="submit"
                className="w-full bg-[#005DB5] text-white py-2 rounded-lg hover:bg-[#005DB5] transition"
              >
                Login
              </button>
            </form>
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <a href="/signup" className="text-[#005DB5] font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </main>
      )}
    </>
  );
}