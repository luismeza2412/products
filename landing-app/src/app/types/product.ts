export type Product = {
    id: string;
    name: string;
    type: string;
    interestRate?: number;
    category: 'Cuenta' | 'Tarjeta' | 'Fondo' | 'Seguro';
    riskLevel?: 'Bajo' | 'Medio' | 'Alto';
    description: string;
  };