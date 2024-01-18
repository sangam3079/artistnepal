import { convertKeysToSnakeCase } from "../helpers/snakeCamelConversion";
import { convertKeysToCamelCase } from "../helpers/snakeCamelConversion";

let responseHeaders = null;
let responseStatus = null;
let responseOk = null;

const getFetch = (request, token) => {
  const params = new URLSearchParams(
    convertKeysToSnakeCase(request.body)
  ).toString();
  return new Promise((resolve, reject) => {
    fetch(`${request.url}?${params}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        ...token,
        ...(request.headers || {}),
      },
    })
      .then((res) => {
        responseHeaders = res.headers;
        responseStatus = res.status;
        responseOk = res.ok;
        return res.json();
      })
      .then((res) => {
        const response = {
          headers: responseHeaders,
          status: responseStatus,
          ok: responseOk,
          body: convertKeysToCamelCase(res),
        };
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const postFetch = (request, token = {}, setContentType = true) => {
  let headers = {
    ...token,
    ...(request.headers || {}),
  };
  if (setContentType) headers["Content-Type"] = "application/json";
  return new Promise((resolve, reject) => {
    fetch(request.url, {
      method: "post",
      body: stringifyBody(request),
      headers,
    })
      .then((res) => {
        responseHeaders = res.headers;
        responseStatus = res.status;
        responseOk = res.ok;
        return res.json();
      })
      .then((res) => {
        const response = {
          headers: responseHeaders,
          status: responseStatus,
          ok: responseOk,
          body: convertKeysToCamelCase(res),
        };
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const putFetch = (request, token) => {
  return new Promise((resolve, reject) => {
    fetch(request.url, {
      method: "put",
      body: stringifyBody(request),
      headers: {
        "Content-Type": "application/json",
        ...token,
        ...(request.headers || {}),
      },
    })
      .then((res) => {
        responseHeaders = res.headers;
        responseStatus = res.status;
        responseOk = res.ok;
        return res.json();
      })
      .then((res) => {
        const response = {
          headers: responseHeaders,
          status: responseStatus,
          ok: responseOk,
          body: convertKeysToCamelCase(res),
        };
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const deleteFetch = (request, token) => {
  return new Promise((resolve, reject) => {
    fetch(request.url, {
      method: "delete",
      headers: token,
    })
      .then((res) => {
        responseHeaders = res.headers;
        responseStatus = res.status;
        responseOk = res.ok;
        return res.json();
      })
      .then((res) => {
        const response = {
          headers: responseHeaders,
          status: responseStatus,
          ok: responseOk,
          body: convertKeysToCamelCase(res),
        };
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const stringifyBody = (request) => {
  if (request.headers) {
    return request.body;
  }
  return JSON.stringify(convertKeysToSnakeCase(request.body));
};

export default {
  getFetch,
  postFetch,
  putFetch,
  deleteFetch,
};
