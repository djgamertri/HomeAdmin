function FetchData(Route, Method, Data = null) {
  const Token = localStorage.getItem("Token")

  let header = {
    "Content-Type": "application/json",
  }

  if (Token) {
    header['Authorization'] = Token;
  }

  let requestOptions = {
    method: Method,
    headers: header
  };

  if (Data) {
    requestOptions.body = JSON.stringify(Data);
  }

  return fetch("https://api-homeadmin-9egs-dev.fl0.io/api" + Route, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Respuesta exitosa:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
      throw error;
    });
}

function decodeToken(token) {
  const Token = localStorage.getItem("Token");
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64));
  return JSON.parse(jsonPayload);
}