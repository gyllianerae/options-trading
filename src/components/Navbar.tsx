'use client'
import { buttonVariants } from "@/src/components/ui/button"
import { Switch } from "@/src/components/ui/switch"
import { cn } from "@/src/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface NavbarProps {
    onConnectWallet: (option: boolean) => void;
}

export default function Navbar({ onConnectWallet }: NavbarProps) {
    //to track active menu
    const [activeMenu, setActiveMenu] = useState<string>("Option")

    //to handle changing of active menu
    const handleMenuClick = (menu:string) => {
        if(activeMenu!==menu){
            setActiveMenu(menu)
        }
    }

    //to handle connect wallet state
    const handleConnectWallet = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        onConnectWallet(true);
    }

    return (
        <>
            <header className="bg-[#FDFDFD] border-gray-200">
                <nav className="container mx-auto py-4 flex justify-between items-center">
                    <div className="flex gap-[10px]">
                        {/* left-side menus */}
                        <Link href="/" className={cn(
                            buttonVariants({ variant: activeMenu === "Option" ? "selected" : "hover"}),
            
                        )}
                            onClick={() => handleMenuClick("Option")}
                        >
                            Option
                        </Link>
                        {/* <Link href="/" className={cn(
                            buttonVariants({ variant: activeMenu === "Move" ? "selected" : "hover" })
                        )}
                            onClick={() => handleMenuClick("Move")}
                        >
                            Move
                        </Link> */}
                        <Link href="/" className={cn(
                            buttonVariants({ variant: activeMenu === "Earn" ? "selected" : "hover"})
                        )}
                            onClick={() => handleMenuClick("Earn")}
                        >
                            Earn
                        </Link>
                        <Link href="/" className={cn(
                            buttonVariants({ variant: activeMenu === "Portfolio" ?  "selected" : "hover"})
                        )}
                            onClick={() => handleMenuClick("Portfolio")}
                        >
                            Portfolio
                        </Link>
                        <Link href="/" className={cn(
                            buttonVariants({ variant: activeMenu === "More" ? "selected" : "hover" })
                        )}
                            onClick={() => handleMenuClick("More")}
                        >
                            More
                        </Link>
                    </div>


                    {/* right-side menus */}
                    <div className="flex gap-[10px]">
                        <div
                            className={cn(
                                buttonVariants({ variant: "secondary" }),
                                "p-[8px] hover:bg-none hover:text-none"
                            )}
                        >
                            <Switch className="data-[state=checked]:bg-[#3B1E54] data-[state=unchecked]:bg-[3B1E5480]"/>
                            Options Chain
                        </div>
                        <Link href="/" className={buttonVariants({ variant: "secondary" })} onClick={handleConnectWallet}>
                            Connect Wallet
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}