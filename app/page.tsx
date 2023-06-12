/* eslint-disable linebreak-style */
"use client";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";
import { styled } from "styled-components";

const Main = styled.main`
  width: 100%;
  height: calc(100vh - 200px);
  background-color: #0000ff;
`;

export default function Home() {
	return (
		<>
			<Header/>
			<Main></Main>
			<Footer/>
		</>
	);
}
