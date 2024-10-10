import styled from 'styled-components';

// Body styles
export const Body = styled.div`
  font-family: Arial, sans-serif;
  background-color: #FF9400;
  color: #000000;
  margin: 0;
  padding: 20px;
`;

// Header styles
export const Header = styled.header`
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px 20px;
  text-align: center;
`;

// Common heading styles
export const Heading1 = styled.h1`
  margin-bottom: 10px;
`;

export const Heading2 = styled.h2`
  margin-bottom: 10px;
`;

// Section styles
export const Section = styled.section`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

// Container styles
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  &.categoria-container,
  &.subcategoria-container,
  &.catalog-container,
  &.prestamo-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Item container styles
export const ItemContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// Image styles
export const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

// Item heading styles
export const ItemHeading = styled.h3`
  margin: 15px 0;
  font-size: 1.2em;
`;

// Item paragraph styles
export const ItemParagraph = styled.p`
  margin: 5px 0;
  font-size: 1em;
  color: #333;
`;

// Input styles
export const ItemInput = styled.input`
  margin-top: 10px;
  padding: 5px;
  width: 80%;
`;

// Button styles
export const ItemButton = styled.button`
  background-color: #FF9400;
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #FF6000;
  }
`;
