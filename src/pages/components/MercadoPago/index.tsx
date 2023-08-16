// components/MercadoPago/index.tsx

import { useEffect } from 'react';
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { useRouter } from 'next/router';

interface Window {
  MercadoPago: any;
}

export default function MercadoPago() {

  const router = useRouter();

  useEffect(() => {
    const loadSDK = async () => {
      await loadMercadoPago();
      const mp = new window.MercadoPago("APP_USR-417396bf-ccb9-4eab-bd11-5e50c1684ba6");


      const cardForm = mp.cardForm({
        amount: "9.99",
        iframe: true,
        form: {
          id: "form-checkout",
          cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do cartão",
          },
          expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/YY",
          },
          securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de segurança",
          },
          cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular do cartão",
          },
          issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emissor",
          },
          installments: {
            id: "form-checkout__installments",
            placeholder: "Parcelas",
          },
          identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
          },
          identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
          },
          cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
          },
        },
        callbacks: {
          onFormMounted: (error: any) => {
            if (error) return console.warn("Form Mounted handling error: ", error);
            console.log("Form mounted");
          },
          onSubmit: (event: { preventDefault: () => void; }) => {
            event.preventDefault();

            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

            console.log('Card Token:', token);

            fetch("/api/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: Number(amount),
                installments: Number(installments),
                description: "Clube de Benefícios - Benefit",
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem('payerId', data.data.payer_id);
                localStorage.setItem('nextPaymentDate', data.data.next_payment_date);

                router.push('/login');
              })
              .catch((error) => {
                console.error("Erro ao processar o pagamento:", error);
              });

          },
          onFetching: (resource: any) => {
            console.log("Fetching resource: ", resource);

            const progressBar = document.querySelector(".progress-bar");
            if (progressBar) {
              progressBar.removeAttribute("value");

              return () => {
                progressBar.setAttribute("value", "0");
              };
            }
          }
        },
      });

    };
    loadSDK();
  }, []);

  return (
    <>
      <style jsx>
        {`
          #form-checkout {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 600px;

            margin-top: 3rem;
            margin-right: 8rem;
          }

          .container {
            height: 18px;
            display: inline-block;
            border: 1px solid rgb(118, 118, 118);
            border-radius: 2px;
            padding: 1px 2px;
          }
        `}
      </style>

      <form id="form-checkout">
        <div id="form-checkout__cardNumber" className="container"></div>
        <div id="form-checkout__expirationDate" className="container"></div>
        <div id="form-checkout__securityCode" className="container"></div>
        <input type="text" id="form-checkout__cardholderName" />
        <select id="form-checkout__issuer"></select>
        <select id="form-checkout__installments"></select>
        <select id="form-checkout__identificationType"></select>
        <input type="text" id="form-checkout__identificationNumber" />
        <input type="email" id="form-checkout__cardholderEmail" />

        <button type="submit" id="form-checkout__submit">Pagar</button>
        <progress value="0" className="progress-bar">Carregando...</progress>
      </form>
    </>
  );
}
