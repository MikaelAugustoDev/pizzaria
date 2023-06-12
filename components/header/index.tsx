import React from "react";
import styled from "styled-components";

const Headers = styled.header`
    width: 100%;
    height: 100px;
    background-color: #ff0000;
`;

const Header = () => {
	return(
		<Headers></Headers>
	);
};

export { Header };