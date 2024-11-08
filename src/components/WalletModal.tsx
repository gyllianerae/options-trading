"use client"
import { useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import solfare from '../../public/images/solfare.png'
import phantom from '../../public/images/phantom.png'
import turnkey from '../../public/images/turnkey.png'
import backpack from '../../public/images/backpack.png'
import coinbasewallet from '../../public/images/coinbase.png'
import ledger from '../../public/images/ledger.png'
import fuse from '../../public/images/fuse.png'
import dynamicwallet from '../../public/images/dynamic.png'
import trezor from '../../public/images/trezor.png'
import capsule from '../../public/images/capsule.png'
import okx from '../../public/images/okx.png'
import keystone from '../../public/images/keystone.png'
import privy from '../../public/images/privy.png'
import web3auth from '../../public/images/web3auth.png'
import bitget from '../../public/images/bitget.png'
import exodus from '../../public/images/exodus.png'
import circle from '../../public/images/circle.png'
import binance from '../../public/images/binance.png'
import brave from '../../public/images/brave.png'
import robinhood from '../../public/images/robinhood.png'
import gemWallet from '../../public/images/gemwallet.png'
import tiplink from '../../public/images/tiplink.png'
import trust from '../../public/images/trust.png'
import glow from '../../public/images/glow.png'
import helium from '../../public/images/helium.png'
import crossmintnoncustodial from '../../public/images/crossmint-noncustodial.png'
import crossmintcustodial from '../../public/images/crossmint-custodial.png'
import decaf from '../../public/images/decaf.png'
import walletconnect from '../../public/images/wallet-connect.png'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

import { Wallet } from "lucide-react";

interface NavbarProps {
    onConnectWallet: (option: boolean) => void;
}

export default function WalletModal({ onConnectWallet }: NavbarProps) {
    const modalRef = useRef<HTMLDivElement | null>(null);

    // const handleConnectWallet = () => {
    //     onConnectWallet(false);
    // }

    const handleCLickOutside = (e: React.MouseEvent) => {
        if(modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onConnectWallet(false);
        }
    }

    //array of wallet options
    const walletOptions = [
        { name: "Solfare", icon: solfare },
        { name: "Phantom", icon: phantom },
        { name: "Turnkey", icon: turnkey },
        { name: "Backpack", icon: backpack },
        { name: "Coinbase Wallet", icon: coinbasewallet },
        { name: "Ledger", icon: ledger },
        { name: "Fuse Wallet", icon: fuse },
        { name: "Dynamic", icon: dynamicwallet },
        { name: "Trezor", icon: trezor },
        { name: "Capsule", icon: capsule },
        { name: "OKX", icon: okx },
        { name: "Keystone", icon: keystone },
        { name: "Privy", icon: privy },
        { name: "Web3Auth", icon: web3auth },
        { name: "Bitget", icon: bitget },
        { name: "Exodus", icon: exodus },
        { name: "Circle", icon: circle },
        { name: "Binance Web3 Wallet", icon: binance },
        { name: "Brave", icon: brave },
        { name: "Robinhood", icon: robinhood },
        { name: "Gem Wallet", icon: gemWallet },
        { name: "Tiplink", icon: tiplink },
        { name: "Trust", icon: trust },
        { name: "Glow", icon: glow },
        { name: "Helium", icon: helium },
        { name: "Crossmint Non-Custodial", icon: crossmintnoncustodial },
        { name: "Crossmint Custodial", icon: crossmintcustodial },
        { name: "Decaf", icon: decaf },
        { name: "WalletConnect", icon: walletconnect },
        { name: "I don't have Solana Wallet", icon: ''},
    ]

    //separate always visible and collapsible group of wallets
    const defaultWallets = walletOptions.splice(0, 9);
    const collapsibleWalets = walletOptions.splice(9);



    return (
        <>
            <div className="fixed inset-0 bg-[#333333] bg-opacity-80 flex justify-center items-center z-50 p-[40px]" onClick={handleCLickOutside}>
                <div ref={modalRef} className="bg-white max-w-full p-8 rounded-lg shadow-lg w-[1200px]">
                    <h2 className="text-xl font-semibold mb-4"> Connect Wallet </h2>
                    <Collapsible>
                        <ul className="grid grid-cols-3 gap-4 pb-[20px]">
                            {/* default wallets */}
                            {defaultWallets.map((wallet, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer p-2 hover:bg-gray-200 rounded flex items-center gap-2 border border-gray-300"
                                >
                                    <Image 
                                        src={wallet.icon}
                                        alt={wallet.name}
                                        width={32}
                                        height={32}
                                        className={`w-6 h-6 object-contain ${["Ledger", "Fuse Wallet", "Capsule", "OKX", "Keystone", "Robinhood", "Helium"].includes(wallet.name) ? "bg-[#D4BEE4] rounded-md p-[4px]" : "bg-none"}`}
                                    />
                                    {wallet.name}
                                </li>
                            ))}

                        {/* collapsible wallets */}
                        
                        {collapsibleWalets.map((wallet, index) => (
                            <CollapsibleContent>
                               <li key={index} className="cursor-pointer p-2 hover:bg-gray-200 rounded flex items-center gap-2 border border-gray-300">
                                    {wallet.icon && wallet.icon !== "" ? (
                                        <Image
                                            src={wallet.icon}
                                            alt={wallet.name}
                                            width={32}
                                            height={32}
                                            className={`w-6 h-6 object-contain ${["Ledger", "Fuse Wallet", "Capsule", "OKX", "Keystone", "Robinhood", "Helium"].includes(wallet.name) ? "bg-[#D4BEE4] rounded-lg p-1" : "bg-none"}`}
                                        />
                                    ) : (
                                        <Wallet className="w-6 h-6" />
                                    )}
                                    {wallet.name}
                                </li>
                            </CollapsibleContent>
                        ))}
                        </ul>
                        <div className='pt-3'>
                            <CollapsibleTrigger asChild>
                                    <Button
                                        variant={"selected"}
                                        className="w-full"
                                    >
                                        More Wallet
                                    </Button>
                            </CollapsibleTrigger>
                        </div>
                    </Collapsible>
                </div>
            </div>
        </>
    )

}