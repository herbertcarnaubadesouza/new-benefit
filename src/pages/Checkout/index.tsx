import Head from "next/head";
import styles from "../../styles/Login.module.scss";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import axios from 'axios';

import MercadoPago from "../components/MercadoPago";

interface Login {
  id: string;
  Login: string;

  Senha: string;
}

export default function Checkout() {


  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const cardNumberRef = useRef<HTMLInputElement | null>(null);
  const expiryDateRef = useRef<HTMLInputElement | null>(null);
  const cvvRef = useRef<HTMLInputElement | null>(null);

  const nameValue = nameRef.current && nameRef.current instanceof HTMLInputElement ? nameRef.current.value : "";
  const emailValue = emailRef.current ? emailRef.current.value : "";
  const cardNumberValue = cardNumberRef.current ? cardNumberRef.current.value : "";
  const expiryDateValue = expiryDateRef.current ? expiryDateRef.current.value : "";
  const cvvValue = cvvRef.current ? cvvRef.current.value : "";

  const createSubscription = async (tokenizedCard: any) => {
    try {
      // Dados do plano
      const planData = {
        reason: "Clube de Benefícios - Benefit",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          repetitions: 12,
          billing_day: 10,
          billing_day_proportional: true,
          free_trial: {
            frequency: 1,
            frequency_type: "months"
          },
          transaction_amount: 9.99, // Valor correto
          currency_id: "ARS"
        },
        payment_methods_allowed: {
          payment_types: [
            { "id": "credit_card" }
          ],
          payment_methods: [
            {
              id: "visa",
              name: "Visa",
              payment_type_id: "credit_card",
              status: "active",
              secure_thumbnail: "https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif",
              thumbnail: "http://img.mlstatic.com/org-img/MP3/API/logos/visa.gif",
              deferred_capture: "supported",
              settings: {
                bin: {
                  pattern: "^(4)",
                  exclusion_pattern: "^(400163|400176|400178|400185|400199|423808|439267|471233|473200|476332|482481|451416|438935|(40117[8-9])|(45763[1-2])|457393|431274)",
                  installments_pattern: "^(?!(417401|453998|426398|462437|451212|456188))"
                },
                card_number: {
                  length: 16,
                  validation: "standard"
                },
                security_code: {
                  mode: "mandatory",
                  length: 3,
                  card_location: "back"
                }
              },
              additional_info_needed: [],
              min_allowed_amount: 0.5,
              max_allowed_amount: 60000,
              accreditation_time: 2880,
              financial_institutions: {},
              processing_modes: "aggregator"
            }
          ]
        },
        // Adicione outros campos necessários aqui...
      };

      // Primeira requisição: Criação do Plano
      const planResponse = await axios.post(
        'https://api.mercadopago.com/preapproval_plan',
        planData,
        {
          headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
          }
        }
      );

      const planID = planResponse.data.id;

      // Dados da assinatura
      const subscriptionData = {
        preapproval_plan_id: planID,
        payer_email: emailValue,
        card_token_id: tokenizedCard, // Supondo que você tenha tokenizado o cartão anteriormente
        reason: "Clube de Benefícios - Benefit",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: 9.99,
          currency_id: "ARS",
        }
      };

      // Segunda requisição: Criação da Assinatura com o ID do plano
      const subscriptionResponse = await axios.post(
        'https://api.mercadopago.com/preapproval',
        subscriptionData,
        {
          headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Assinatura criada com sucesso!", subscriptionResponse.data);
    } catch (error) {
      console.error("Erro ao criar assinatura:", error);
    }
  };


  return (
    <>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
        `}</style>
      </Head>

      <div className={styles.container}>
        <div className={styles.bg}>
          <div className={styles.ImageContainer}>
            <img className={styles.logo} src="/logoEscura 2.png" alt="logo" />
          </div>
        </div>

        <MercadoPago />

        {/* <div className={styles.LoginContainer}>
          <div className={styles.Login}>
            <p className={styles.title}>Detalhes do pagamento</p>
            <p className={styles.label}>Nome do titular</p>
            <input
              id="nome"
              ref={nameRef}
              className={styles.field}
              type="email"

            />
            <p className={styles.label}>Endereço de Email</p>
            <input
              id="email"
              ref={emailRef}
              className={styles.field}
              type="email"

            />
            <p className={styles.label}>Número do Cartão</p>
            <input
              id="number"
              className={styles.field}
              ref={cardNumberRef}
              type="text"

            />

            <div className={styles.Group}>
              <div className={styles.form}>
                <p className={styles.label}>Data de Expiração</p>
                <input
                  id="date"
                  ref={expiryDateRef}
                  className={styles.field}
                  type="number"

                />
              </div>
              <div className={styles.form}>
                <p className={styles.label}>CVV</p>
                <input
                  id="cvv"
                  ref={cvvRef}
                  className={styles.field}
                  type="number"

                />
              </div>
            </div>
            <div className={styles.linha}></div>
            <div className={styles.value}>
              <p className={styles.label}>Valor Total</p>
              <p className={styles.valuePrice}>R$9,00</p>
            </div>


            <button className={styles.button}>
              Realizar Pagamento
            </button>
            <img className={styles.logo2} src="/logo2.png" alt="logo" />
          </div>
        </div> */}
      </div>
    </>
  );

}
