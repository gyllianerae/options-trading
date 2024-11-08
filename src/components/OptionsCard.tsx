'use client'

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { RefreshCcw } from 'lucide-react';
import bitcoin from '../../public/images/bitcoin.png'
import ethereum from '../../public/images/ethereum.png'
import solana from '../../public/images/solana.png'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select"
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

export default function OptionsCard() {
    const [optionState, setOptionState] = useState("Long")
    const [paying, setPaying] = useState("")
    const [buying, setBuying] = useState("")
    const [strikePrice, setStrikePrice] = useState("")
    const [selectedCrypto, setSelectedCrypto] = useState("BTC")
    const [selectedBuy, setSelectedBuy] = useState("Call")
    const [date, setDate] = React.useState<Date>()

    //handle option state{
    const handleOptionState = (option: string) => {
        if(optionState !== option){
            setOptionState(option);
        }
    }

    //reset all input fields
    const handleReset = () => {
        setPaying("");
        setBuying("");
        setStrikePrice("");
        setDate(undefined);
        setSelectedCrypto("BTC")
        setSelectedBuy("Call")
    }

    const cryptoLogo = [
        {name: "BTC", icon: bitcoin},
        {name: "ETH", icon: ethereum},
        {name: "SOL", icon: solana}
    ]

    return (
        <>
            <Card className="max-w-[600px] h-[800px] mt-5 mx-auto p-[40px]">
                <div className="w-[522px] h-[656px]">
                    <CardHeader className="mb-[24px] p-0">
                        <div className="bg-[#F5F0F8] rounded-[6px] p-2">
                            <Button 
                                className={cn(buttonVariants({variant: optionState === "Long" ? "selected" : "hover"}),
                                    "h-[40px] bg-inherit w-1/2 shadow-none"
                                )} 
                                onClick={() => handleOptionState("Long")}>Long</Button>
                            <Button 
                                className={cn(buttonVariants({variant: optionState === "Short" ? "selected" : "hover"}),
                                    "h-[40px] bg-[#F5F0F8] w-1/2 shadow-none"
                                )} 
                                onClick={() => handleOptionState("Short")}>Short</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="h-[438px] p-0">
                        <div className="flex justify-end mb-[20px] h-[30px]">
                            <Button variant="refresh" size="icon" className="h-[30px] w-[30px]" onClick={handleReset}>
                                <RefreshCcw className="text-[#9B7EBD] text-sm"/>
                            </Button>
                        </div>
                        <div>
                            <div className="space-y-1 mb-[20px]">
                                <Label htmlFor="paying" className="block text-sm font-semibold text-black">Your Selling</Label>
                                <div className="relative">
                                    <Input 
                                        type="number"
                                        id="paying"
                                        name="paying"
                                        step="0.01"
                                        value={paying}
                                        onChange={(e) => setPaying(e.target.value)}
                                        placeholder="0.00"
                                        className="block h-[56px] w-full p-[8px] border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm text-right"
                                    />
                                    <div className="absolute inset-y-2 left-2 flex items-center w-[150px] h-[40px]">
                                        <Select value={selectedCrypto} onValueChange={(value) => setSelectedCrypto(value)}>
                                            <SelectTrigger className="flex bg-[#F5F0F8] border-none justify-between text-sm text-[#9B7EBD] focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                                                    <SelectValue placeholder={selectedCrypto} />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#F5F0F8] text-[#9B7EBD] border-none">
                                                {cryptoLogo.map((crypto) => (
                                                    <SelectItem key={crypto.name} value={crypto.name}>
                                                        <div className="flex gap-1">
                                                            <Image height={20} width={20} src={crypto.icon} alt={`${crypto.name} Logo`} className="rounded-full"/>
                                                            {crypto.name}
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[20px]">
                                <Label htmlFor="paying" className="block text-sm font-bold text-[#333333]">Your Buying</Label>
                                <div className="relative">
                                    <Input 
                                        type="number"
                                        id="buying"
                                        name="buying"
                                        step="0.01"
                                        placeholder="0.00"
                                        value={buying}
                                        onChange={(e) => setBuying(e.target.value)}    
                                        className="block h-[56px] w-full p-[8px] border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm text-right"
                                    />
                                    <div className="absolute inset-y-2 left-2 flex items-center w-[150px] h-[40px]">
                                        <Select value={selectedBuy} onValueChange={(value) => setSelectedBuy(value)}>
                                            <SelectTrigger className="flex bg-[#F5F0F8] border-none justify-between text-sm text-[#9B7EBD] focus:outline-none focus:ring-0 active:outline-none active:ring-0">
                                                <SelectValue placeholder={selectedBuy} />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#F5F0F8] text-[#9B7EBD] border-none">
                                                <SelectItem value="Call">Call</SelectItem>
                                                <SelectItem value="Put">Put</SelectItem>
                                                <SelectItem value="Straddle">Straddle</SelectItem>
                                                <SelectItem value="IronCondor">Iron Condor</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-[20px]">
                                <Label htmlFor="paying" className="block text-sm font-bold text-[#333333]">Expiry Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "block h-[56px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm text-left",
                                            !date && "text-muted-foreground"
                                        )}
                                        >
                                        {date ? format(date, "MM/dd/yyyy") : <span>Enter a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="">
                                <Label htmlFor="paying" className="block text-sm font-bold text-[#333333]">Strike Price</Label>
                                <Input 
                                type="number"
                                id="strike-price"
                                name="strike-price"
                                step="0.01"
                                placeholder="Enter Strike Price"
                                value={strikePrice}
                                onChange={(e) => setStrikePrice(e.target.value)}  
                                className="block h-[56px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm outline-none"
                                />
                            </div>
                        </div>
                    </CardContent>
                </div>
                <CardFooter className="p-0 pt-11">
                    <Button variant={"selected"} className="w-full">
                        Connect Wallet To Trade
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}