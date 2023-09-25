import axios from 'axios';

export default async (req: { method: string; body: { paymentId: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; data?: any; }): void; new(): any; }; }; }) => {
   if (req.method === 'PUT') {
      const { paymentId } = req.body;

      console.log("PaymentId recebido:", paymentId);

      if (!paymentId) {
         return res.status(400).json({ error: 'O paymentId é necessário.' });
      }

      try {
         const cancelData = {
            status: "cancelled"
         };

         const cancelResponse = await axios.put(
            `https://api.mercadopago.com/preapproval/${paymentId}`,
            cancelData,
            {
               headers: {
                  'Authorization': `Bearer APP_USR-1815818743124652-080317-109bb5a9f9ff314ed07f81d1d040b4dd-1441472886`,
                  'Content-Type': 'application/json',
               },
            }
         );

         res.status(200).json({
            message: 'Assinatura cancelada com sucesso!',
            data: cancelResponse.data,
         });

         console.log("===========================================================")
         console.log("===========================================================")
         console.log(cancelResponse.data);
         console.log("===========================================================")
         console.log("===========================================================")
      } catch (error) {
         console.error("Erro ao cancelar a assinatura:", error);
         return res.status(500).json({ error: 'Ocorreu um erro ao cancelar a assinatura.' });
      }
   } else {
      res.status(405).json({ error: 'Método não permitido' });
   }
}
