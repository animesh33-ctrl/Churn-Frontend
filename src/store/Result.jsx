import { createContext, useState } from "react";

export const ResultContext = createContext();

const ResultProvider = ({ children }) => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (e, formData) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("API call failed:", error);
      setResult("Error");
    }
  };

  return (
    <ResultContext.Provider value={{ handleSubmit, result }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
