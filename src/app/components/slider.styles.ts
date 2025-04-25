import styled from 'styled-components';

export const SliderWrapper = styled.div`
  width: 100%;                
  background-color: #ebf8ff; 
  padding-top: 2rem;          
  padding-bottom: 2rem;
`;

export const Slide = styled.div`
  max-width: 72rem;      
  margin-left: auto;     
  margin-right: auto
  padding-left: 1.5rem;  
  padding-right: 1.5rem
  text-align: center;
`;

export const SlideTitle = styled.h2`
 font-size: 1.875rem;    
  font-weight: 700;      
  color: #1a365d;      
  margin-bottom: 0.5rem; 
}

@media (min-width: 640px) {
  .slide-title {
    font-size: 2.25rem;
  }
`;

export const SlideSubtitle = styled.p`
  font-size: 1rem;
  color: #2b6cb0;
}

@media (min-width: 640px) {
  .slide-subtitle {
    font-size: 1.125rem;
  }
`;