"use client"

import { Header, Heading1, Section, Container, ItemContainer, ItemImage, ItemHeading, ItemParagraph, ItemInput, ItemButton } from '@/styles/globals';

export default function Home() {
  return (
    <>
      <Header>
        <Heading1>Inventario por Local</Heading1>
      </Header>

      <Section>
        <Heading1>Inventario por Local</Heading1>

        <Container className="categoria-container">
          {/* Local 1 */}
          <ItemContainer>
            <ItemHeading>Local 1</ItemHeading>
            <ul id="inventarioLocal1">
              {/* Lista de productos del Local 1 */}
              <li>
                <ItemContainer>
                  <ItemImage src="path_to_image_1.jpg" alt="Producto 1" />
                  <ItemHeading>Producto 1</ItemHeading>
                  <ItemParagraph>Descripción del Producto 1</ItemParagraph>
                  <ItemInput type="text" placeholder="Cantidad" />
                  <ItemButton>Agregar al Carrito</ItemButton>
                </ItemContainer>
              </li>
            </ul>
          </ItemContainer>

          {/* Local 2 */}
          <ItemContainer>
            <ItemHeading>Local 2</ItemHeading>
            <ul id="inventarioLocal2">
              {/* Lista de productos del Local 2 */}
              <li>
                <ItemContainer>
                  <ItemImage src="path_to_image_2.jpg" alt="Producto 2" />
                  <ItemHeading>Producto 2</ItemHeading>
                  <ItemParagraph>Descripción del Producto 2</ItemParagraph>
                  <ItemInput type="text" placeholder="Cantidad" />
                  <ItemButton>Agregar al Carrito</ItemButton>
                </ItemContainer>
              </li>
            </ul>
          </ItemContainer>

          {/* Local 3 */}
          <ItemContainer>
            <ItemHeading>Local 3</ItemHeading>
            <ul id="inventarioLocal3">
              {/* Lista de productos del Local 3 */}
              <li>
                <ItemContainer>
                  <ItemImage src="path_to_image_3.jpg" alt="Producto 3" />
                  <ItemHeading>Producto 3</ItemHeading>
                  <ItemParagraph>Descripción del Producto 3</ItemParagraph>
                  <ItemInput type="text" placeholder="Cantidad" />
                  <ItemButton>Agregar al Carrito</ItemButton>
                </ItemContainer>
              </li>
            </ul>
          </ItemContainer>
        </Container>
      </Section>
  </>
  );
}
