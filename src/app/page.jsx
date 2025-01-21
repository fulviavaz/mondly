
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between 2xl:px-[340px]">
      <nav className="flex items-center justify-between w-full bg-white py-4 md:px-10">
        <Image src="/images/logo-itau.png" alt="logo itau" width={79} height={73} />
        <Image src="/images/mondly-logo.png" alt="logo mondly" width={113} height={40}/>
      </nav>
      {/* hero */}
      
      <div className="flex flex-col gap-5 items-center justify-between w-full bg-white py-1 md:px-10">
      <div>
  {/* Imagem para mobile */}
  <Image
    src="/images/hero-mobile.png"
    alt="hero"
    width={328}
    height={437}
    className="block md:hidden" // Visível apenas em mobile
  />
  
  {/* Imagem para desktop */}
  <Image
    src="/images/hero-desk.png"
    alt="hero"
    width={839}
    height={405}
    className="hidden md:flex" // Visível apenas em telas maiores que 'md'
  />
</div>
        <div className="flex flex-col">
            <p className="text-[22px] font-normal text-[#2B2B2B] ">Exclusivo para clientes Minhas Vantagens Itaú</p>
          <h1 className="text-black text-[28px] font-bold mt-2">Aprenda mais de 40 idiomas por menos de R$0,30 ao dia!</h1>        
        </div>  
          <div className=" w-full flex flex-col items-start justify-center">
        
          <Button className=" bg-[#3D75DB] text-white text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Quero assinar o Mondly! </Link></Button>        
      </div>
        
        </div>

      <div className=" px-10 flex-wrap flex items-start justify-start w-full py-5">
      
        <p className="text-text-a text-[22px] 2xl:text-[28px] font-bold">Fale um novo idioma com apenas 5 minutos por dia!</p>
      </div>               
      <div className=" px-10 w-full flex-wrap flex items-center justify-between py-2">     
        <div className="flex items-center justify-center">
          <Image src="/images/celular.png" alt="telefone" width={444} height={518} /></div>
        <div className="flex items-center justify-center 2xl:w-[300px] w-auto">
          <p className="text-text-a 2xl:text-[29px] text-[17px]  leading-7 font-normal text-start mt-6">
            Clientes Itaú têm acesso a um desconto exclusivo no Mondly by Pearson. Agora você pode aprender inglês,espanhol, francês e muitos outros idiomas com lições rápidas, interativas e acessíveis.</p>
        </div>     
        
      </div>

      <div className="2xl:px-20 px-10 w-full  2xl:mt-14 mt-4 flex flex-col items-start justify-center ">
        <p className=" text-[22px] font-bold text-[#2B2B2B]">A sua viagem sem barreiras de Idioma!</p>
        <p className=" text-[18px] leading-7 font-normal text-start mt-6 text-black">Viaje com mais segurança e aproveite cada
    momento com confiança total para falar e
    entender.
    Com o Mondly by Pearson, você aprende as frases mais importantes para se comunicar em aeroportos, hotéis, restaurantes e muito mais.</p>
        
              <Button className=" bg-[#3D75DB] text-white text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12  mt-6">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Assinar e começar agora! </Link></Button>      
      </div>

      <div className="2xl:px-20 px-10 w-full mb-14 mt-14 flex flex-wrap items-center justify-center gap-14">
        <div className="flex items-center justify-center">
          <Image src="/images/homem.png" alt="homem" width={255} height={264} />
        </div>
        <div className="flex-wrap flex items-center justify-center w-[390px] ">
          
          <Image src="/images/icone1.png" alt="icone" width={86} height={87} />
          <p className="text-black 2xl:text-lg font-normal leading-6 text-[20px"><strong>Aprendizado interativo e gamificado</strong><br />
         Transforme o aprendizado em uma jornada divertida com lições curtas,desafios semanais e jogos interativos</p>
        
        </div>
        <div className="flex-wrap flex items-center justify-center w-[390px] ">
          
          <Image src="/images/icone2.png" alt="icone" width={86} height={87} />
          <p className="text-black 2xl:text-lg font-normal leading-6 text-[20px">
            <strong>Conteúdo personalizado</strong><br />
      Aprenda vocabulário útil para viagens, negócios e situações cotidianas, tudofocado no mundo real.
          </p>
        
        </div>
          <div className="flex-wrap flex items-center justify-center w-[390px] ">
          
          <Image src="/images/icone3.png" alt="icone" width={86} height={87} />
          <p className="text-black 2xl:text-lg font-normal leading-6 text-[20px">
            <strong>Flexibilidade total!</strong><br />
Estude no smartphone, tablet ou desktop, de onde estiver e a qualquer hora do dia.
          </p>
        
        </div>
      </div>

      <div className="2xl:px-20 px-10 w-full  mb-14 flex flex-col items-start justify-center ">
      
          <Button className=" bg-[#3D75DB] text-white text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12  mt-6">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Quero assinar o Mondly!

 </Link></Button>    
      </div>

      <div className="2xl:px-20 px-10 w-full mb-4 flex flex-wrap items-center justify-center gap-4">
        <Image src="/images/video-mobile.png" alt="video" width={328} height={437} />
        <Image src="/images/bandeiras-mobile.png" alt="bandeiras" width={313} height={320} />
      </div>

        <div className="2xl:px-20 px-10 w-full  2xl:mt-14 mt-4 flex flex-col items-start justify-center ">
        <p className=" text-[22px] font-bold text-[#2B2B2B]">Comece a aprender hoje mesmo com desconto exclusivo Itaú!</p>
        <p className=" text-[18px] leading-7 font-normal text-start mt-6 text-black">
          Não perca essa oportunidade de transformar seu aprendizado de idiomas. Tenha acesso amais de 40 idiomas e aprenda no seu ritmo, de forma prática e divertida.
        </p>
        
              <Button className=" bg-[#3D75DB] text-white text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12  mt-6 mb-4">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
            Assinar e começar agora! </Link></Button>  
          <Image src="/images/tels-mobile.png" alt="bandeiras" width={293} height={265} />
      </div>

      <footer className="flex-wrap flex  items-center justify-center gap-4 w-full bg-black py-8 2xl:px-20 px-10">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/images/indico.png" alt="logo indico" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs text-center">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
    
    </main>
  );
}
