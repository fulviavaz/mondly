
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <><main className="flex flex-col items-center justify-between px-10 xl:px-56 2xl:px-[350px] lg:px-24 max-w-[1538px] mx-auto">

      <nav className="flex items-center justify-between w-full bg-white py-4">
        <Image src="/itauagencias/minhasvantagens/mondly/images/logo-itau.png" alt="logo itau" width={79} height={73} />
        <Image src="/itauagencias/minhasvantagens/mondly/images/mondly-logo.png" alt="logo mondly" width={113} height={40} />
      </nav>
      {/* hero */}

      <div className="flex flex-col gap-5 items-center justify-between w-full bg-white py-1">
        <div>
          {/* Imagem para mobile */}
          <Image
            src="/itauagencias/minhasvantagens/mondly/images/hero-mobile.png"
            alt="hero"
            width={328}
            height={437}
            className="block md:hidden" // Visível apenas em mobile
          />

          {/* Imagem para desktop */}
          <Image
            src="/itauagencias/minhasvantagens/mondly/images/hero-desk.png"
            alt="hero"
            width={839}
            height={405}
            className="hidden md:flex" // Visível apenas em telas maiores que 'md'
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[22px] font-normal text-[#2B2B2B] ">Exclusivo para clientes Minhas Vantagens Itaú</p>
          <h1 className="text-black text-[28px] font-bold mt-2">Aprenda mais de 40 idiomas por menos de R$0,30 ao dia!</h1>
        </div>
        <div className=" w-full flex items-start justify-start gap-5">

          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=33691%24jTZga1YC7Sfrcc-iHdTo4oywTzfdk01D&PRODS=46420733&QTY=1&PRICES46420733%5BBRL%5D=29.90&PHASH=sha3-256.e360c9adad598c7c75eeec7f6f56e3b3bf03b1209fa0f64769430dfa2466b84b" target="_blank">
              Assinatura Mensal </Link></Button>
          
          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Assinatura Anual </Link></Button>
        </div>

      </div>

      <div className=" flex-wrap flex items-start justify-start w-full py-5">

        <p className="text-text-a text-[22px] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] font-bold">Fale um novo idioma com apenas 5 minutos por dia!</p>
      </div>
      <div className="w-full flex-wrap lg:flex-nowrap flex items-center justify-between md:justify-center py-2">
        <div className="flex items-center justify-center">
          <Image src="/itauagencias/minhasvantagens/mondly/images/celular.png" alt="telefone" width={444} height={518} /></div>
        <div className="flex items-center justify-center 2xl:w-[300px] xl:w-[380px] lg:w-[350px] w-auto">
          <p className="text-text-a 2xl:text-[29px] xl:text-[25px] text-[17px]  leading-7 font-normal text-start mt-6">
            Clientes Minhas Vantagens Itaú têm acesso a um desconto exclusivo no Mondly by Pearson. Agora você pode aprender inglês,espanhol, francês e muitos outros idiomas com lições rápidas, interativas e acessíveis.</p>
        </div>

      </div>

      <div className=" w-full  2xl:mt-14 mt-4 flex flex-col items-start justify-center ">
        <p className=" text-[22px] font-bold text-[#2B2B2B]">A sua viagem sem barreiras de Idioma!</p>
        <p className=" text-[18px] leading-7 font-normal text-start mt-6 text-black">Viaje com mais segurança e aproveite cada
          momento com confiança total para falar e
          entender.<br /><br />
          Com o Mondly by Pearson, você aprende as frases mais importantes para se comunicar em aeroportos, hotéis, restaurantes e muito mais.</p>
<h1 className="text-black text-[28px] font-bold mt-6">Assine e comece agora!</h1>
        <div className=" w-full flex items-start justify-start gap-5 mt-8">
          

        
            <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=33691%24jTZga1YC7Sfrcc-iHdTo4oywTzfdk01D&PRODS=46420733&QTY=1&PRICES46420733%5BBRL%5D=29.90&PHASH=sha3-256.e360c9adad598c7c75eeec7f6f56e3b3bf03b1209fa0f64769430dfa2466b84b" target="_blank">
              Assinatura Mensal </Link></Button>
          
          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Assinatura Anual </Link></Button>
        </div>
      </div>

      <div className="w-full mb-5 mt-14 flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex items-start justify-center gap-10">
        {/* Imagem do homem */}
        <div className="flex-shrink-0">
          <Image
            src="/itauagencias/minhasvantagens/mondly/images/homem.png"
            alt="homem"
            width={300} // Aumente a largura
            height={300}
            className="rounded-lg object-cover" // Para bordas arredondadas e manter proporção
          />
        </div>

        {/* Div com os ícones e textos */}
        <div className="flex flex-col gap-6">
          {/* Bloco 1 */}
          <div className="flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex 2xl:items-start items-center justify-center gap-4">
            <Image src="/itauagencias/minhasvantagens/mondly/images/icone1.png" alt="icone" width={86} height={87} />
            <p className="text-black text-lg font-normal leading-6">
              <strong>Aprendizado interativo e gamificado</strong>
              <br />
              Transforme o aprendizado em uma jornada divertida com lições curtas, desafios semanais e jogos interativos.
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap flex 2xl:items-start items-center justify-center gap-4">
            <Image src="/itauagencias/minhasvantagens/mondly/images/icone2.png" alt="icone" width={86} height={87} />
            <p className="text-black text-lg font-normal leading-6">
              <strong>Conteúdo personalizado</strong>
              <br />
              Aprenda vocabulário útil para viagens, negócios e situações cotidianas, tudo focado no mundo real.
            </p>
          </div>

          {/* Bloco 3 */}
          <div className="flex-wrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap  flex 2xl:items-start items-center justify-center gap-4">
            <Image src="/itauagencias/minhasvantagens/mondly/images/icone3.png" alt="icone" width={86} height={87} />
            <p className="text-black text-lg font-normal leading-6">
              <strong>Flexibilidade total!</strong>
              <br />
              Estude no smartphone, tablet ou desktop, de onde estiver e a qualquer hora do dia.
            </p>
          </div>
        </div>
      </div>



      <div className="w-full mb-14 flex flex-col items-start justify-center">

      <h1 className="text-black text-[28px] font-bold mt-6">Quero assinar o Mondly!</h1>
        <div className=" w-full flex items-start justify-start gap-5 mt-8">
          

          
          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=33691%24jTZga1YC7Sfrcc-iHdTo4oywTzfdk01D&PRODS=46420733&QTY=1&PRICES46420733%5BBRL%5D=29.90&PHASH=sha3-256.e360c9adad598c7c75eeec7f6f56e3b3bf03b1209fa0f64769430dfa2466b84b" target="_blank">
              Assinatura Mensal </Link></Button>
          
          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Assinatura Anual </Link></Button>
        </div>
      </div>

      <div className="w-full mb-4 flex flex-wrap items-center justify-center gap-4">
        {/* Imagens para mobile */}
        <div className="block md:hidden">
          <Image src="/itauagencias/minhasvantagens/mondly/images/video-mobile.png" alt="video" width={328} height={437} />
        </div>
        <div className="block md:hidden">
          <Image src="/itauagencias/minhasvantagens/mondly/images/bandeiras-mobile.png" alt="bandeiras" width={313} height={320} />
        </div>

        {/* Imagem para desktop */}
        <div className="hidden md:block">
          <Image src="/itauagencias/minhasvantagens/mondly/images/bandeiras-desk.png" alt="video-desktop" width={830} height={464} />
        </div>
      </div>


      <div className="w-full 2xl:mt-14 mt-4 flex flex-col items-start justify-center">
        <p className=" text-[22px] font-bold text-[#2B2B2B]">Comece a aprender hoje mesmo com desconto exclusivo Itaú!</p>
        <p className=" text-[18px] leading-7 font-normal text-start mt-6 text-black">
          Não perca essa oportunidade de transformar seu aprendizado de idiomas. Tenha acesso amais de 40 idiomas e aprenda no seu ritmo, de forma prática e divertida.
        </p>

      <div className=" w-full mb-14 flex flex-col items-start justify-center">

      <h1 className="text-black text-[28px] font-bold mt-6">Assine e comece agora!</h1>
        <div className=" w-full flex items-start justify-start gap-5 mt-8">         

          
          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=33691%24jTZga1YC7Sfrcc-iHdTo4oywTzfdk01D&PRODS=46420733&QTY=1&PRICES46420733%5BBRL%5D=29.90&PHASH=sha3-256.e360c9adad598c7c75eeec7f6f56e3b3bf03b1209fa0f64769430dfa2466b84b" target="_blank">
              Assinatura Mensal </Link></Button>
          
          <Button className=" bg-[#3D75DB] text-white text-sm font-bold 2xl:w-80 xl:w-80 lg:w-80 w-1/2 h-12 ">
            <Link href="https://shop.mondly.com/order/checkout.php?CLEAN_CART=1&CURRENCY=BRL&CART=1&CARD=2&SHORT_FORM=1&ADDITIONAL_B2B_COMPANY_REF=32525%24NSJ8faiZnz4WlzhAQtqN-6zo8jWrqGIs&PRODS=46453293&QTY=1&PRICES46453293%5BBRL%5D=107.28&PHASH=sha3-256.87ab4f89f614a2121f6c524dfa49a3fc5db6c69263b9f3118554ef06583b7b72" target="_blank">
              Assinatura Anual </Link></Button>
        </div>
      </div>


      </div>
      <div className="flex justify-center items-center"><Image src="/itauagencias/minhasvantagens/mondly/images/tels-mobile.png" alt="bandeiras" width={293} height={265} /></div>



    </main><footer className="flex-wrap flex  items-center justify-center gap-4 w-full bg-black py-8">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/itauagencias/minhasvantagens/mondly/images/indico.png" alt="logo indico" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs text-center">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer></>
    
  );
}
