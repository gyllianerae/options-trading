import Link from "next/link";
import Bitcoin from "../../public/images/bitcoin.png";
import Ethereum from "../../public/images/ethereum.png";
import Solana from "../../public/images/solana.png"
import { cn } from "../lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function CryptoOptions() {
    return (
        <>
            <section>
                <div className="border-[] border-[1px] p-[8px] container mx-auto flex gap-4 rounded-[6px]">
                    {/*Bitcoin*/}
                    <Link href='/'
                        className={cn(
                            buttonVariants({ variant: "secondary"})
                        )}
                    >
                        <div className="flex items-center gap-[10px]">
                            <Image
                                src={Bitcoin}
                                alt="Bitcoin"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full"
                            />
                        </div>
                        <div className="text-[14px] font-bold">BTC</div>
                        <div className="text-[#D30000] text-[14px]">↓ -1.30%</div>

                    </Link>
                    {/*Ethereum*/}
                    <Link href='/'
                        className={cn(
                            buttonVariants({ variant: "secondary"})
                        )}
                    >
                        <div className="flex items-center gap-[10px]">
                            <Image
                                src={Ethereum}
                                alt="Ethereum"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full"
                            />
                        </div>
                        <div className="text-[14px] font-bold">ETH</div>
                        <div className="text-[#92DA00] text-[14px]">↑ +0.10%</div>
                    </Link>
                    {/*Solana*/}
                    <Link href='/'
                        className={cn(
                            buttonVariants({ variant: "secondary"})
                        )}
                    >
                        <div className="flex items-center gap-[10px]">
                            <Image
                                src={Solana}
                                alt="Solana"
                                width={24}
                                height={24}
                                className="w-6 h-6 rounded-full"
                            />
                        </div>
                        <div className="text-[14px] font-bold">SOL</div>
                        <div className="text-[#D30000] text-[14px]">↓ -1.30%</div>
                    </Link>
                </div>
                
            </section>
        </>
    )
}