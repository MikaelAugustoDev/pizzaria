import React from "react";
import styled from "styled-components";

const Headers = styled.header`
    width: 100%;
    height: 100px;
    background-color: #ff0000;
`;

const Logo = styled.nav``;

const Navigation = styled.nav``;

const Rotas = styled.ul``;

const Rota = styled.li``;

const Header = () => {
	return(
		<Headers>
			<Logo></Logo>
			<Navigation>
				<Rotas>
					<Rota>Lanches</Rota>
					<Rota>Pizzas</Rota>
					<Rota>Esfihas</Rota>
					<Rota>Bebidas</Rota>       
				</Rotas>
			</Navigation>
		</Headers>
	);
};

export { Header };