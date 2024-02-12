export const headWithToken = {
  "Content-Type": "application/json",
  Accept: "*/*",
  Authorization: `Bearer ${process.env.TOKEN}`,
};

export const headWithoutToken = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export const headWithTokenFormData = {
  "Content-Type": "multipart/form-data",
  Accept: "*/*",
  Authorization: `Bearer ${process.env.TOKEN}`,
};
