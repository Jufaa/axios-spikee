"use server";
export const llamada = async (url: string, params?: any) => {
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOjIsInN1YiI6Imx1Y2EiLCJpYXQiOjE3MDYzOTYzMDIsImV4cCI6MTcwNjQ4MjcwMn0.EoOlk6p2yCjssfmtg29OJS5XC20tLPkbtQ5c4358jr5S2LNeg77bB8j2MDvW3k4xhHmvagyNe6y-IpOln7QPcg";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
};
