import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("Router error:", error);

  // Handle 404 (Not Found)
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for doesn’t exist or has been moved.
        </p>
      </div>
    );
  }

  // Handle unexpected or other errors
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-red-600 mb-2">
        {error?.statusText || error?.message || "An unknown error occurred."}
      </p>
      <p className="text-gray-600">Please try again later.</p>
    </div>
  );
}
