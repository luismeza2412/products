'use client'

import { use } from 'react';
import { products } from '@/app/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  const riskScore =
    product.riskLevel === 'Bajo' ? 1 : product.riskLevel === 'Medio' ? 2 : 3;

  const data = [
    { name: 'Riesgo', value: riskScore },
    { name: 'Interés', value: product.interestRate || 0 }
  ];

  return (
    <main className="min-h-screen p-6 bg-white text-gray-800">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-2">Tipo: {product.type}</p>
        <p className="text-gray-600 mb-2">Categoría: {product.category}</p>
        {product.interestRate && (
          <p className="text-green-700 mb-2">Tasa de interés: {product.interestRate}%</p>
        )}
        {product.riskLevel && (
          <p className="text-yellow-700 mb-2">Nivel de riesgo: {product.riskLevel}</p>
        )}
        <p className="text-base mt-4 mb-6">{product.description}</p>

        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <Link href="/" className="mt-4 inline-flex border-1 p-2 rounded items-center text-blue-600 text-sm font-medium hover:underline">
          ← Volver al catálogo
        </Link>
      </div>
    </main>
  );
}
