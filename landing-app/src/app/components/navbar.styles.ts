import styled from 'styled-components';

export const Nav = styled.nav`
   background-color: #2563eb;       
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); 
  border-bottom: 1px solid #1e40af; 
  position: sticky;               
  top: 0;
  z-index: 50;
`;

export const NavContainer = styled.div`
  max-width: 80rem;      
  margin-left: auto;    
  margin-right: auto;
  padding-left: 1.5rem;  
  padding-right: 1.5rem;
  padding-top: 1rem;     
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
   font-size: 1.25rem;   
  font-weight: 700;     
  color: #ffffff;       
  letter-spacing: -0.01562em; 
`;

export const NavLinks = styled.div`
   display: none;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;      
    gap: 1.5rem;        
    font-size: 0.875rem;
    color: #ffffff;   
    font-weight: 500;   
  }
`;
