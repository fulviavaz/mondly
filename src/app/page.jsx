
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <nav className="flex items-center justify-between w-full bg-white py-4 2xl:px-20 px-10">
        <Image src="/images/logo-itau.png" alt="logo itau" width={79} height={73} />
        <Image src="/images/mondly-logo.png" alt="logo mondly" width={113} height={40}/>
      </nav>
      {/* hero */}
      
      <div className="flex flex-wrap gap-5 items-center justify-between w-full bg-white py-1 2xl:px-30 xl:px-40 lg:px-30 px-10">
        <div>
          <Image src="/images/hero-mobile.png" alt="hero" width={328} height={437} />
        </div>
        <div className="2xl:w-[500px] xl:w-[500px] lg:w-[500px] flex flex-col">
            <p className="text-[22px] font-normal text-black ">Exclusivo para clientes Minhas Vantagens Itaú</p>
          <h1 className="text-black 2xl:text-4xl xl:text-4xl lg:text-4xl text-[28px] font-bold mt-2">Aprenda mais de 40 idiomas por menos de R$0,30 ao dia!</h1>        
        </div>  
          <div className="2xl:px-20 w-full  flex flex-col items-start justify-center ">
        
          <Button className=" bg-[#3D75DB] text-white text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Quero assinar o Mondly! </Link></Button>        
      </div>
        
        </div>

      <div className="2xl:px-20 px-10 flex flex-col items-start justify-start w-full  py-3">
      
        <p className="text-text-a text-[22px] font-normal">Fale um novo idioma com apenas 5 minutos por dia!</p>
      </div>               
      <div className="2xl:px-20 px-10 w-full flex flex-wrap items-center justify-center 2xl:gap-32 py-6">     
        <div className="flex items-center justify-center">
          <Image src="/images/celular.png" alt="telefone" width={444} height={518} /></div>
        <div className="flex items-center justify-center 2xl:w-[261px] xl:w-[261px] w-auto">
          <p className="text-text-a text-[17px]  leading-7 font-normal text-start mt-6">
            Clientes Itaú têm acesso a um desconto exclusivo noMondly by Pearson. Agora você pode aprender inglês,espanhol, francês e muitos outros idiomas com lições rápidas, interativas e acessíveis.</p>
        </div>     
        
      </div>

      <div className="2xl:px-20 px-10 w-full  2xl:mt-14 mt-10 flex flex-col items-start justify-center ">
        
        <Button className=" bg-yellow-main text-black text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12 mt-8 "><Link href="https://pagamento.escolaconquer.com.br/CW-30102024105512907CRSTNHLND?utm_source=ITAU&utm_medium=ITAU&utm_campaign=ITAU&utm_id=ITAU&utm_term=ITAU&utm_content=ITAU" target="_blank">Comece agora </Link></Button>        
      </div>

      <div className="2xl:px-20 px-10 w-full mb-14 mt-14 flex flex-wrap items-center justify-center gap-14">
        <div className="flex items-center justify-center">
          <Image src="/itauuniclass/minhasvantagens/conquerplus/images/lanc.png" alt="carreira" width={364} height={387} />
        </div>
        <div className="flex items-center justify-center w-[399px] ">
            <ul className="list-disc list-inside ">
    <li className="text-black 2xl:text-lg font-bold leading-6">
    Você aprende com um conteúdo mão na massa, colocando em prática cada curso imediatamente.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Seus professores vivem o que ensinam, então você vai aprender aquilo que já foi validado no mercado
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Além do conhecimento técnico, você terá acesso a mais de 80 cursos para acelerar ainda mais o seu crescimento.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Sem enrolação! Aqui você desenvolve uma nova habilidade em dias focando no que realmente é importante.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      A rotina está agitada? Não se preocupe. Aqui você acompanha as aulas de onde, quando e quantas vezes quiser.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Conquiste certificados de peso e coloque a sua carreira em destaque
            </li>
            
  </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-14">
        <Card className="w-[370px] h-[200px]">
          <CardContent className="p-10">
            <ul className="list-disc list-inside">
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Comunicação e Oratória
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Inteligência Emocional
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Produtividade e Gestão de Tempo
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Análise de Dados e Power BI
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Excel do Básico ao Avançado
              </li>
            </ul>
          </CardContent>
        </Card>

          <Card className="w-[370px] h-[200px]">
          <CardContent className="p-10">
            <ul className="list-disc list-inside">
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Negociação e Influência
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Liderança
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Gestão Financeira
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Programação Neurolinguística
              </li>
              <li className="text-black 2xl:text-lg font-bold leading-6">
                Gestão e Metodologias Ágeis
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="2xl:px-20 px-10 w-full  mb-14 flex flex-col items-start justify-center ">
      
        <Button className=" bg-yellow-main text-black text-lg font-bold 2xl:w-80 xl:w-80 lg:w-80 w-full h-12 mt-8 ">
          <Link href="https://pagamento.escolaconquer.com.br/CW-30102024105512907CRSTNHLND?utm_source=ITAU&utm_medium=ITAU&utm_campaign=ITAU&utm_id=ITAU&utm_term=ITAU&utm_content=ITAU" target="_blank">Comece agora </Link></Button>        
      </div>

      <footer className="flex flex-wrap items-center justify-center gap-6 w-full bg-black py-8 2xl:px-20 px-10">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/itauuniclass/minhasvantagens/conquerplus/images/indico.png" alt="logo itau" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs ">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
    
    </main>
  );
}
