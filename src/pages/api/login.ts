import axios from 'axios';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { accessToken, nome, cpf, email, telefone } = req.body;

  try {
    const response = await axios.post(
      "https://apiv4.marktclub.net.br/login/api",
      {
        nome: nome,
        cpf: cpf,
        email_pessoal: email,
        telefone_pessoal: telefone,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log(response);

    if (response.status === 200 && response.data.link) {
      res.status(200).json({ link: response.data.link });
    } else {
      res.status(400).json({ error: 'A resposta não contém o link necessário' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Um erro desconhecido ocorreu' });
    }
  }
}
