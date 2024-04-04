
"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';

// interface Dados{
//     id : number;
//     nome : string;
//     preco : number;
//     descricao : string;
//     slug : string;
//     imagem : string;
// }

const Card = () =>{

    const[data,setData] =useState<any[]>([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch("/discos.json");
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    },[])


    const getRandomElementes = (arr : any[], numElements: number) =>{
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    }

    const randomData = getRandomElementes(data,8);

    return(
        <>
            <div className="content">
                <div className="content-card">
                    {randomData.map((item) => (
                        <div className="card" key={ item.id}>
                            <Link href={"Produtos/" + item.slug}>
                                <Image src={"/imagens/" + item.slug + ".jpg"} width={100} height={100} alt="Teste"></Image>
                            </Link>
                            <h2>{ item.album }</h2>
                        </div>
                    ))}                
                </div>
            </div>
        </>
    )
}
export default Card;