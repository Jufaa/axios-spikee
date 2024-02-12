const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjIsInN1YiI6Imx1Y2EiLCJpYXQiOjE3MDc3NjUzNTIsImV4cCI6MTcwNzg1MTc1Mn0.r7d3NksTimRE7GVu2nlxvNmaCSX5WguylxmZ7hjtocLb3RmFGM14mWXFIpbbQKEFM258J28l5YZRhJfrQvtGHg";
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
