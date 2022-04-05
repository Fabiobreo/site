const SERVER_DOMAIN = "http://localhost:3139";

export const register = async (userData: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await fetch(`${SERVER_DOMAIN}/register`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
