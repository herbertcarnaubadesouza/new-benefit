import axios from 'axios';

export default async function handler(req: any, res: any) {

  const data = new URLSearchParams();
  data.append(
    "client_id",
    "5483038437-7e5PxK3L0dYgLCuF!xfb4jp8v%Ud3g#u56ZquehsGtut$adT5HyAMdW$5VJQbXpb8S1!Y*R3E.benefit.com.br"
  );
  data.append(
    "secret_id",
    "82500-AAJaz0z04HIDT0B4bR4S1JckG9QR1J388Z6Ztb*qz6AhQ2pqeX2UO4cn$Sgcbb60ieuXVm374C"
  );
  data.append("audience", "web");
  data.append("grant_type", "client_credentials");
  data.append("scope", "login:api");

  try {
    const response = await axios.post(
      "https://apiv4.marktclub.net.br/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (response.data && response.data.dado && response.data.dado.access_token) {
      res.status(200).json({ accessToken: response.data.dado.access_token });
    } else {
      console.log(response.data);
      res.status(500).json({ error: 'Unexpected response structure' });
    }

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else if (
      typeof error === 'object' &&
      error !== null &&
      'response' in error &&
      error.response !== null &&
      typeof error.response === 'object' &&
      'data' in error.response
    ) {
      console.log((error.response as any).data);
    } else {
      console.log(error);
    }
    res.status(500).json({ error: 'Erro ao obter o token de acesso' });
  }




}
