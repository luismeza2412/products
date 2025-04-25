import styled from 'styled-components';

export const Card = styled.div`
 background-color: #f6f6f6;
 padding: 1rem;
 border-radius: 10px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Title = styled.h2`
  font-weight: 600;
  text-align: center;
  color:rgb(23, 77, 163);
`;

export const Badge = styled.span`
   display: inline-block;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem; 
  padding-bottom: 0.25rem;
  font-size: 0.75rem; 
  border-radius: 9999px;
  font-weight: 500;
  background-color: #ebf8ff;
  color: #2b6cb0;        
  margin-right: 0.5rem; 
`;

export const InfoText = styled.p`
  @apply text-sm text-gray-600 mb-1;
`;
