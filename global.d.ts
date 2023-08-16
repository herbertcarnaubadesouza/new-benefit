// global.d.ts

declare global {
  interface Window {
    MercadoPago: any;
  }
}

// Isso exportará uma variável vazia, forçando o arquivo a ser um módulo
export { };
