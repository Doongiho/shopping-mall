import styled from 'styled-components';

const HeaderSection = styled.section`
    width: 100%;
    position:fixed;
    z-index:10;
    background:#fff;
`;

const HeaderDiv = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    padding: var(--navbar-padding, .5rem);
`;
const HeaderNav = styled.div`
    align-items: center;
    display:flex;
`;

const Logo = styled.h1`
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    padding-right: .75rem;
`;

const HomeLink = styled.a`
    text-decoration: none;
    &:hover {
        background: rgb(55 65 81 / var(--tw-text-opacity));
    }
`;

const Menu = styled.nav`
    display: flex;
    flex: 1 0 0
`;

const MenuLink = styled.a`
    padding: 0.25rem .75rem;
    font-size: .875rem;
    font-weight:600;    
    border-radius: var(--rounded-btn, .5rem);
    &:hover{
        --tw-border-opacity: 0;
        background-color: hsl(var(--bc) / var(--tw-bg-opacity));
        --tw-bg-opacity: .2;
    }
`;

const Sub = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ColorTheme = styled.label`
    align-items: center;
    position: relative;
    display: inline-grid;
    user-select: none;
    place-content: center;
    cursor: pointer;
`;

const ModeSelection = styled.input`
    grid-column-start: 1;
    grid-row-start: 1;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-property: transform, opacity;
    appearance: none;
`;

const StyledSvg = styled.svg<{ $swapOn?: boolean }>`
    width: 1.75rem;
    height: 1.75rem;
    fill: ${({ $swapOn }) => ($swapOn ? '#232f3e' : '#fff')};
    transition: fill 0.2s;
    grid-column-start: 1;
    grid-row-start: 1;
    transition-duration: .3s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-property: transform, opacity;
`;

const Search = styled.div`
    position: relative;
`;

const SearchInput = styled.input`
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: .25rem;    
    background-color: rgb(209 213 219 );
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    border-width: 1px;
`;

const Product = styled.ul`
    position: absolute;
    left: 0;
    top: 56px;
    border-radius: 4px;
    z-index: 10;
    width: 100%;
    background: #fff;
    max-height: 24rem;
    overflow-y: scroll;
    display:none;
`;

const ProductList = styled.li`
    padding: .75rem 1rem;
    &:hover {
            background: #f0f0f0;
    }
`;

const ProductLink = styled.a`
`;

const ProductName = styled.span`
   
`;
const ShoppingCart = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

const ShoppingCartIcon = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    color:#fff
`;

const ShoppingCartNumber = styled.span`
    position: absolute;
    top: -8px;
    right: -10px;
    padding: 2px 7px;
    border-radius: 999px;
    background: #ff3b3b;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1;
`;

const Header = () => {
  return (
    <HeaderSection>
      <HeaderDiv>
        <HeaderNav>
            <Logo>
              <HomeLink href="/">React Shop</HomeLink>
            </Logo>
           <Menu>
              <MenuLink href="/fashion">패션</MenuLink>
              <MenuLink href="/accessory">액세서리</MenuLink>
              <MenuLink href="/digital">디지털</MenuLink>
           </Menu>
           <Sub>
            <ColorTheme>
              <ModeSelection type="checkbox" />
              <StyledSvg xmlns="http://www.w3.org/2000/svg">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"></path>
              </StyledSvg>
              <StyledSvg $swapOn xmlns="http://www.w3.org/2000/svg">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"></path>
              </StyledSvg>
            </ColorTheme>
            <Search>
              <SearchInput type="text" placeholder="검색" />
              <Product>
                <ProductList>
                    <ProductLink>
                        <ProductName></ProductName>
                    </ProductLink>
                </ProductList>
              </Product>
            </Search>
            <ShoppingCart href="/cart">
                <ShoppingCartIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-700 dark:stroke-white" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    <ShoppingCartNumber>0</ShoppingCartNumber>
                </ShoppingCartIcon>
            </ShoppingCart>
            
          </Sub>
        </HeaderNav>
      </HeaderDiv>
    </HeaderSection>
  );
};

export default Header;
