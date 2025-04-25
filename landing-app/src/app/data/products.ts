import { Product } from "../types/product";

export const products: Product[] = [

    {
      id: '1',
      name: 'Cuenta Digital Plus',
      type: 'Cuenta de Ahorro',
      interestRate: 1.2,
      category: 'Cuenta',
      riskLevel: 'Bajo',
      description: 'Una cuenta de ahorro con intereses competitivos y sin comisiones.',
    },
    {
      id: '2',
      name: 'Tarjeta Visa Gold',
      type: 'Tarjeta de Crédito',
      category: 'Tarjeta',
      riskLevel: 'Medio',
      description: 'Tarjeta con beneficios exclusivos, acumulación de puntos y sin anualidad el primer año.',
    },
    {
      id: '3',
      name: 'Fondo Conservador',
      type: 'Fondo de Inversión',
      interestRate: 3.5,
      category: 'Fondo',
      riskLevel: 'Bajo',
      description: 'Fondo de inversión para perfil conservador, ideal para comenzar a invertir.',
    },
    {
      id: '4',
      name: 'Seguro de Vida Integral',
      type: 'Seguro de Vida',
      category: 'Seguro',
      riskLevel: 'Bajo',
      description: 'Cobertura completa con asistencia médica y hospitalaria las 24h.',
    },
    {
      id: '5',
      name: 'Cuenta Joven',
      type: 'Cuenta Corriente',
      category: 'Cuenta',
      riskLevel: 'Bajo',
      description: 'Cuenta corriente sin comisiones, ideal para jóvenes estudiantes.',
    },
    {
      id: '6',
      name: 'Tarjeta Prepaga Digital',
      type: 'Tarjeta Prepaga',
      category: 'Tarjeta',
      riskLevel: 'Bajo',
      description: 'Tarjeta 100% digital, perfecta para pagos online y control de gastos.',
    },
    {
      id: '7',
      name: 'Fondo Balanceado',
      type: 'Fondo de Inversión',
      interestRate: 6.0,
      category: 'Fondo',
      riskLevel: 'Medio',
      description: 'Equilibrio entre renta fija y variable. Opción flexible para inversores moderados.',
    },
    {
      id: '8',
      name: 'Seguro Vehicular Premium',
      type: 'Seguro de Auto',
      category: 'Seguro',
      riskLevel: 'Medio',
      description: 'Protección total contra daños, robos y asistencia vial completa.',
    }
    
  ];