"use client"
import { useState } from "react";
import CryptoOptions from "../components/CryptoOptions";
import Navbar from "../components/Navbar";
import OptionsCard from "../components/OptionsCard";
import WalletModal from "../components/WalletModal";


export default function Home() {
  const  [walletModal, setWalletModal] = useState<boolean>(false);

  //to handle wallet modal state
  const handleWalletModal = () => {
    setWalletModal(!walletModal);
  }

  return (
  <>
      <Navbar onConnectWallet={handleWalletModal} />
      {walletModal && <WalletModal onConnectWallet={handleWalletModal} />}
      <CryptoOptions />
      <OptionsCard />
  </>
  )
}