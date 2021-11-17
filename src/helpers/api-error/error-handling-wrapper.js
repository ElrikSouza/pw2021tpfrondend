import { ApiError } from "./api-error";

export const wrapApiCallWithErrorHandling =
  (call) =>
  async (...args) => {
    try {
      const result = await call(...args);
      return result;
    } catch (error) {
      if (error.response) {
        throw new ApiError(error.response.data.message);
      }
      throw new ApiError("Um erro nao identificado ocorreu.");
    }
  };
