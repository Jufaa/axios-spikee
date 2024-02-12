const token = process.env.USER_TOKEN;

export const AuthorizedHeader = {
  "Content-Type": "application/json",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};

export const UnauthorizedHeader = {
  "Content-Type": "application/json",
  Accept: "*/*",
};

export const AuthorizedHeaderWithMultipart = {
  "Content-Type": "multipart/form-data",
  Accept: "*/*",
  Authorization: `Bearer ${token}`,
};
