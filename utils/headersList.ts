const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjIsInN1YiI6Imx1Y2EiLCJpYXQiOjE3MDY2MzQ4ODEsImV4cCI6MTcwNjcyMTI4MX0.MuJgWd2hMPgQmwtqAxKE0gzgNW61c5X1iRLkPhbPoKo1r-9P-R3qWthKxevwUH7hi4VqAPAf7p0pJkwGxdaZUg";
export const headWithToken = {
  "Content-Type": "application/json",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};

export const headWithoutToken = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export const headWithTokenFormData = {
  "Content-Type": "multipart/form-data",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};
