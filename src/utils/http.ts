import https from "https";

export function fetchJSON<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            resolve(JSON.parse(data) as T);
          } catch (err) {
            reject(new Error(`Erro ao parsear JSON de ${url}: ${err}`));
          }
        });
      })
      .on("error", (err) => {
        reject(new Error(`Erro na requisição para ${url}: ${err.message}`));
      });
  });
}
