'use client';
import { Product } from '../types/product';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, Title, Badge, InfoText } from './productCard.styles'

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card aria-label={`Producto financiero: ${product.name}`}>      
      <div>
        <Title>{product.name}</Title>
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge>{product.category}</Badge>
          {product.riskLevel && <Badge className="bg-yellow-100 text-yellow-700">Riesgo: {product.riskLevel}</Badge>}
          {product.interestRate && <Badge className="bg-green-100 text-green-700">Tasa: {product.interestRate}%</Badge>}
        </div>
        <InfoText>{product.type}</InfoText>
        <p className="text-sm text-gray-700 mt-2 line-clamp-3">{product.description}</p>
      </div>
      <Link
        href={`/product/${product.id}`}
        className="mt-4 inline-flex border-1 p-2 rounded items-center text-blue-600 text-sm font-medium hover:underline"
      >
        Ver detalles <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </Card>
  );
};

export default ProductCard;
