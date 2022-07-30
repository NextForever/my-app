import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchiing = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (error) {
      setError(error.massage);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchiing, isLoading, error];
};
