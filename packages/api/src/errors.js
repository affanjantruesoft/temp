export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export function handleApiError(error) {
  if (error.response) {
    return new ApiError(
      error.response.data?.message || 'An error occurred',
      error.response.status,
      error.response.data
    );
  }
  return new ApiError('Network error', 0, null);
}
