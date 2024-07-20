import { Button, Result } from "antd";
import React, { useEffect, useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error("ErrorBoundary caught an error", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  const handleReload = () => {
    setHasError(false);
    window.location.reload();
  };

  if (hasError) {
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={handleReload}>
            Reload
          </Button>
        }
      />
    );
  }

  return children;
};

export default ErrorBoundary;
