import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { styled } from "styled-components";
import Window from "@/components/desktop/Window";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Window></Window>
    </>
  );
}

const Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 100px;
  font-family: "Pocketmon-logo";
`;
