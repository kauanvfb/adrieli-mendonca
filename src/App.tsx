import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";
import {ArrowUpRight,CalendarDays,ChevronDown,Clock3,Instagram,Menu,MessageCircle,Sparkles,Star,X} from "lucide-react";


import adrieliCapa from "./assets/webp/adrieli-capa.webp";
import fotoCapa from "./assets/foto_capa.png";

import { LiquidMetalButton } from "./components/ui/liquid-metal-button";

// SOBRANCELHAS
import designPersonalizado1 from "./assets/webp/design-personalizado-1.webp";
import designPersonalizado2 from "./assets/webp/design-personalizado-2.webp";
import designPersonalizado3 from "./assets/webp/design-personalizado-3.webp";
import designPersonalizado4 from "./assets/webp/design-personalizado-4.webp";

import designHenna1 from "./assets/webp/design-henna-1.webp";
import designHenna2 from "./assets/webp/design-henna-2.webp";
import designHenna3 from "./assets/webp/design-henna-3.webp";
import designHenna4 from "./assets/webp/design-henna-4.webp";

import browLamination1 from "./assets/webp/brow-lamination-1.webp";
import browLamination2 from "./assets/webp/brow-lamination-2.webp";
import browLamination3 from "./assets/webp/brow-lamination-3.webp";
import browLamination4 from "./assets/webp/brow-lamination-4.webp";
import browLamination5 from "./assets/webp/brow-lamination-5.webp";
import browLamination6 from "./assets/webp/brow-lamination-6.webp";


// PELE
import dermaplaning1 from "./assets/webp/dermaplaning-1.webp";
import dermaplaning2 from "./assets/webp/dermaplaning-2.webp";
import dermaplaning3 from "./assets/webp/dermaplaning-3.webp";
import dermaplaning4 from "./assets/webp/dermaplaning-4.webp";
import dermaplaning5 from "./assets/webp/dermaplaning-5.webp";

import epilacaoFacial1 from "./assets/webp/epilacao-facial-1.webp";
import epilacaoFacial2 from "./assets/webp/epilacao-facial-2.webp";

import epilacaoBuco1 from "./assets/webp/epilacao-buco-1.webp";


// CÍLIOS
import lashLifting1 from "./assets/webp/lash-lifting-1.webp";
import lashLifting2 from "./assets/webp/lash-lifting-2.webp";
import lashLifting3 from "./assets/webp/lash-lifting-3.webp";
import lashLifting4 from "./assets/webp/lash-lifting-4.webp";
import lashLifting5 from "./assets/webp/lash-lifting-5.webp";
import lashLifting6 from "./assets/webp/lash-lifting-6.webp";

import volumeClassico1 from "./assets/webp/volume-classico-1.webp";
import volumeClassico2 from "./assets/webp/volume-classico-2.webp";
import volumeClassico3 from "./assets/webp/volume-classico-3.webp";
import volumeClassico4 from "./assets/webp/volume-classico-4.webp";
import volumeClassico5 from "./assets/webp/volume-classico-5.webp";

import volumeLight1 from "./assets/webp/volume-light-1.webp";
import volumeLight2 from "./assets/webp/volume-light-2.webp";

import volumeBrasileiro1 from "./assets/webp/volume-brasileiro-1.webp";
import volumeBrasileiro2 from "./assets/webp/volume-brasileiro-2.webp";
import volumeBrasileiro3 from "./assets/webp/volume-brasileiro-3.webp";

import volumeBrasileiroMarrom1 from "./assets/webp/volume-brasileiro-marrom-1.webp";
import volumeBrasileiroMarrom2 from "./assets/webp/volume-brasileiro-marrom-2.webp";
import volumeBrasileiroMarrom3 from "./assets/webp/volume-brasileiro-marrom-3.webp";
import volumeBrasileiroMarrom4 from "./assets/webp/volume-brasileiro-marrom-4.webp";

import volumeEgipcio1 from "./assets/webp/volume-egipcio-1.webp";
import volumeEgipcio2 from "./assets/webp/volume-egipcio-2.webp";
import volumeEgipcio3 from "./assets/webp/volume-egipcio-3.webp";
import volumeEgipcio4 from "./assets/webp/volume-egipcio-4.webp";
import volumeEgipcio5 from "./assets/webp/volume-egipcio-5.webp";

import megaVolume1 from "./assets/webp/mega-volume-1.webp";
import megaVolume2 from "./assets/webp/mega-volume-2.webp";
import megaVolume3 from "./assets/webp/mega-volume-3.webp";
import megaVolume4 from "./assets/webp/mega-volume-4.webp";



const WA_LINK = "https://wa.me/5516996147087";

const agendarProcedimento = (procedimento: string) => {
  const mensagem = `Oi, Adrieli! Vi o site e gostaria de agendar um horário para ${procedimento}. Poderia me passar os horários disponíveis?`;

  window.open(
    `${WA_LINK}?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
};
const INSTAGRAM_LINK="https://www.instagram.com/adrielimendonca_?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==";

const services = [
  {
    category: "Sobrancelhas",
    name: "Design Personalizado",
    price: "R$ 40",
    duration: "30min",
    images: [
  designPersonalizado1,
  designPersonalizado2,
  designPersonalizado3,
  designPersonalizado4,
],
    description:
      "Design feito de acordo com a estrutura da sua sobrancelha, respeitando sempre o desenho natural.",
  },
  {
    category: "Sobrancelhas",
    name: "Design com Henna",
    price: "R$ 55",
    duration: "1h",
    images: [
  designHenna1,
  designHenna2,
  designHenna3,
  designHenna4,
],
    description:
      "Henna personalizada ao seu estilo, do efeito natural ao marcante, para realçar o olhar.",
  },
  {
    category: "Sobrancelhas",
    name: "Brow Lamination",
    price: "R$ 120",
    duration: "1h30",
    images: [
  browLamination1,
  browLamination2,
  browLamination3,
  browLamination4,
  browLamination5,
  browLamination6,
],
    description:
      "Alinhamento e modelagem dos fios para uma sobrancelha mais preenchida, definida e natural.",
  },

  {
    category: "Pele",
    name: "Dermaplaning",
    price: "R$ 100",
    duration: "1h30",
    images: [
  dermaplaning1,
  dermaplaning2,
  dermaplaning3,
  dermaplaning4,
  dermaplaning5,
],
    description:
      "Esfoliação física que melhora a textura da pele, remove células mortas e pelos faciais.",
  },
  {
    category: "Pele",
    name: "Epilação Facial",
    price: "R$ 50",
    duration: "40min",
    images: [
  epilacaoFacial1,
  epilacaoFacial2,
],
    description:
      "Remoção dos pelos com cera fria, garantindo pele lisa por mais tempo.",
  },
  {
    category: "Pele",
    name: "Epilação Buço",
    price: "R$ 10",
    duration: "10min",
    images: [
  epilacaoBuco1,
],
    description:
      "Remoção dos pelos do buço com cera fria ou linha.",
  },

  {
    category: "Cílios",
    name: "Lash Lifting",
    price: "R$ 130",
    duration: "1h30",
    images: [
  lashLifting1,
  lashLifting2,
  lashLifting3,
  lashLifting4,
  lashLifting5,
],
    description:
      "Curvatura e alinhamento dos seus próprios cílios, com efeito de rímel e fios mais alongados.",
  },
  {
    category: "Cílios",
    name: "Volume Clássico",
    price: "R$ 170",
    duration: "2h30",
    images: [
  volumeClassico1,
  volumeClassico2,
  volumeClassico3,
  volumeClassico4,
],
    description:
      "Extensão de cílios com acabamento natural, discreto e sofisticado.",
  },
  {
  category: "Cílios",
  name: "Volume Light",
  price: "R$ 170",
  duration: "2h",
  images: [
    volumeLight1,
    volumeLight2,
  ],
  description:
    "Um volume leve e sofisticado, que proporciona mais destaque ao olhar sem perder a naturalidade.",
},
  {
    category: "Cílios",
    name: "Volume Brasileiro",
    price: "R$ 170",
    duration: "2h30",
    images: [
  volumeBrasileiro1,
  volumeBrasileiro2,
  volumeBrasileiro3,
],
    description:
      "Cílios cheios e alinhados, sem abrir mão da naturalidade.",
  },
  {
    category: "Cílios",
    name: "Volume Brasileiro Marrom",
    price: "R$ 170",
    duration: "2h30",
    images: [
  volumeBrasileiroMarrom1,
  volumeBrasileiroMarrom2,
  volumeBrasileiroMarrom3,
  volumeBrasileiroMarrom4,
],
    description:
      "Fios em tom marrom para um resultado sofisticado e suave.",
  },
  {
    category: "Cílios",
    name: "Volume Egípcio",
    price: "R$ 170",
    duration: "2h30",
    images: [
  volumeEgipcio1,
  volumeEgipcio2,
  volumeEgipcio3,
  volumeEgipcio4,
],
    description:
      "Técnica que cria um efeito volumoso e elegante, destacando os olhos com leveza.",
  },
  {
    category: "Cílios",
    name: "Mega Volume",
    price: "R$ 190",
    duration: "2h30",
    images: [
  megaVolume1,
  megaVolume2,
  megaVolume3,
  megaVolume4,
],
    description:
      "Técnica que deixa os cílios mais cheios, trazendo um toque de sofisticação.",
  },
  {
    category: "Cílios",
    name: "Manutenção",
    price: "R$ 120",
    duration: "2h30",
    description:
      "Manutenção das extensões de cílios, podendo ser realizada em até 20 dias.",
  },
];
const gallery = [
  {
    image: volumeEgipcio5,
    name: "Volume Egípcio",
  },
  {
    image: designHenna2,
    name: "Design com Henna",
  },
  {
    image: lashLifting6,
    name: "Lash Lifting",
  },
  {
    image: browLamination5,
    name: "Brow Lamination",
  },
];
const testimonials = [
  {
    name: "Mayara",
    text: "Ai que perfeito, nem acredito que sou eu. Sempre foi falhada minha sobrancelha. Obrigada mesmo Dri, sou sua fã!",
  },
  {
    name: "Elaine",
    text: "Nossa, estou me sentindo linda! Muito obrigada por me proporcionar isso… Você é muito talentosa… Obrigada!",
  },
  {
    name: "Camila",
    text: "A melhor profissional da vida!!!!",
  },
];

 const faq = [
  
  [
    "Como funciona o agendamento?",
    "Você escolhe o procedimento e entra em contato pelo WhatsApp para consultar os horários disponíveis."
  ],
  [
    "Quais formas de pagamento?",
    "As formas de pagamento disponíveis podem ser confirmadas diretamente pelo WhatsApp no momento do agendamento."
  ],
  [
    "Quanto tempo dura cada procedimento?",
    "O tempo varia de acordo com o serviço. Na seção de procedimentos você encontra a duração estimada de cada atendimento."
  ],
  [
    "Preciso fazer algum preparo?",
    "Alguns procedimentos possuem orientações específicas. Após o agendamento, você recebe todas as recomendações necessárias."
  ],
  [
    "Existe tolerância para atrasos?",
    "Para não comprometer os próximos atendimentos, é importante chegar no horário marcado. Dependendo do tempo de atraso, o atendimento poderá não ser realizado."
  ],
  
];

function Logo(){return <div className="logo-lockup" aria-label="Adrieli Mendonça"><span className="logo-script">am</span><span className="logo-name">ADRIELI MENDONÇA</span></div>}
function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}} className={className}>{children}</motion.div>}
function ServiceGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [current, setCurrent] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [shouldPreload, setShouldPreload] = useState(false);

  useEffect(() => {
    const element = galleryRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPreload(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "250px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (!shouldPreload || images.length <= 1) return;

  const nextIndex =
    current === images.length - 1 ? 0 : current + 1;

  const previousIndex =
    current === 0 ? images.length - 1 : current - 1;

  const nextImage = new Image();
  nextImage.src = images[nextIndex];

  const previousImage = new Image();
  previousImage.src = images[previousIndex];
}, [current, images, shouldPreload]);

  const previousImage = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      ref={galleryRef}
      className="relative h-full w-full overflow-hidden"
    >
      <img
        src={images[current]}
        alt={`${name} - foto ${current + 1}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previousImage}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-xl text-[#4f4039] shadow-md backdrop-blur transition hover:bg-white"
            aria-label="Foto anterior"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-xl text-[#4f4039] shadow-md backdrop-blur transition hover:bg-white"
            aria-label="Próxima foto"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full ${
                  current === index
                    ? "bg-white"
                    : "bg-white/50"
                }`}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}



export default function App(){
 const [menuOpen, setMenuOpen] = useState(false);
const [filter, setFilter] = useState("Todos");
const [openFaq, setOpenFaq] = useState<number | null>(null);
 return <div className="min-h-screen overflow-x-hidden bg-[#f8f3ee] text-[#241f1c]">
  <header className="fixed inset-x-0 top-0 z-50 border-b border-[#2d272320] bg-[#f8f3eee8] backdrop-blur-md md:backdrop-blur-xl">
   <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
    <a href="#inicio"><Logo/></a>
    <nav className="hidden items-center gap-8 text-sm text-[#5d514a] md:flex"><a href="#procedimentos" className="nav-link relative">Procedimentos</a><a href="#resultados" className="nav-link relative">Resultados</a><a href="#sobre" className="nav-link relative">Sobre</a><a href="#faq" className="nav-link relative">Dúvidas</a></nav>
    <a href={WA_LINK} className="hidden rounded-full bg-[#6e5549] px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-15px_#6e5549] transition hover:-translate-y-0.5 hover:bg-[#584238] md:inline-flex">Agendar horário</a>
    <button className="rounded-full p-2 md:hidden" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen?<X/>:<Menu/>}</button>
   </div>
   {menuOpen&&<div className="border-t border-[#2d272315] px-5 py-5 md:hidden"><div className="flex flex-col gap-4 text-[#5d514a]">{["procedimentos","resultados","sobre","faq"].map(id=><a key={id} href={`#${id}`} onClick={()=>setMenuOpen(false)} className="capitalize">{id}</a>)}<a href={WA_LINK} className="mt-2 rounded-full bg-[#6e5549] px-5 py-3 text-center text-white">Agendar horário</a></div></div>}
  </header>
  <main id="inicio">
   <section className="relative flex min-h-[760px] items-center overflow-hidden px-5 pb-24 pt-36 lg:min-h-[850px] lg:px-8">
    <div className="absolute left-1/2 top-[20%] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#d9b9ae55] blur-[60px] md:blur-[110px]"/><div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#ead9cb70] blur-[90px]"/><div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#d2b8aa55] blur-[100px]"/>
    <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
     <div className="max-w-2xl">
      <Reveal>
  <div
    className="
      mb-7
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-[#d9c8bf]
      px-4
      py-2.5
      text-xs
      uppercase
      tracking-[0.18em]
      text-[#725d52]
      shadow-[0_8px_24px_-18px_rgba(86,61,50,0.22),inset_0_1px_0_rgba(255,255,255,0.5)]
      backdrop-blur
    "
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(248,241,236,0.92) 55%, rgba(235,221,213,0.88) 100%)",
    }}
  >
    <span
      className="
        inline-flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        border
        border-[#e7d8d0]
        bg-white/70
        text-[#8e7164]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_4px_10px_-8px_rgba(86,61,50,0.3)]
      "
    >
      <Sparkles size={12} strokeWidth={1.7} />
    </span>

    <span>Beleza • Cuidado • Você</span>
  </div>
</Reveal>
      <Reveal delay={.08}><h1 className="font-serif text-6xl leading-[.93] tracking-[-0.045em] text-[#2a211e] sm:text-7xl lg:text-[6.8rem]">Seu olhar,<span className="block italic text-[#8e7164]">sua essência.</span></h1></Reveal>
      <Reveal delay={.16}><p className="mt-7 max-w-xl text-base leading-8 text-[#6b5c54] sm:text-lg">Cílios, sobrancelhas e cuidados com a pele em um atendimento pensado para realçar a sua beleza com naturalidade.</p></Reveal>
      <Reveal delay={.24}><div className="mt-9 flex flex-wrap gap-3"><a
  href={WA_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    px-6
    py-4
    text-sm
    font-medium
    text-white
    shadow-[0_18px_40px_-18px_#6e5549]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_18px_35px_rgba(86,61,50,0.28)]
  "
  style={{
    background:
      "linear-gradient(110deg, #6e5549 0%, #8e7164 20%, #d7b3a3 38%, #8e7164 55%, #6e5549 75%, #a78373 100%)",
    backgroundSize: "250% 100%",
    animation: "liquidMetalFlow 5s ease-in-out infinite",
  }}
>
  <CalendarDays size={18} />

  Agendar agora

  <ArrowUpRight
    size={17}
    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  />
</a><a
  href={INSTAGRAM_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-[#6e55493b]
    px-6
    py-4
    text-sm
    font-medium
    text-[#4f4039]
    backdrop-blur
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_28px_rgba(86,61,50,0.14)]
  "
  style={{
    background:
      "linear-gradient(110deg, #fffaf6 0%, #ead8cf 25%, #fff4ed 45%, #d9b8aa 65%, #fffaf6 100%)",
    backgroundSize: "220% 100%",
    animation: "liquidMetalFlow 5.5s ease-in-out infinite",
  }}
>
  <Instagram size={18} />
  Instagram
</a></div></Reveal>
      <Reveal delay={.3}><div className="mt-10 flex items-center gap-6 text-sm text-[#786960]"><span><strong className="text-[#332a26]">+6 anos</strong><br/>de experiência</span><span className="h-10 w-px bg-[#6e55492b]"/><span><strong className="text-[#332a26]">Atendimento</strong><br/>personalizado</span></div></Reveal>
     </div>
     <Reveal delay={.2} className="relative mx-auto w-full max-w-[540px]"><div className="absolute inset-8 rounded-[48px] bg-[#cfaea155] blur-[60px]"/><div className="relative overflow-hidden rounded-[38px] border border-white/80 bg-white/50 p-3 shadow-[0_35px_100px_-45px_#5e493f] backdrop-blur"><div className="relative aspect-[4/5] overflow-hidden rounded-[30px]">
     <img
  src={adrieliCapa} 
  alt="Adrieli Mendonça"
  fetchPriority="high"
  decoding="async"
  className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
  />
<div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/50 bg-[#fffaf5cc] p-4 shadow-xl backdrop-blur-md md:backdrop-blur-xl"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.18em] text-[#806b60]">Seu momento</p><p className="mt-1 font-serif text-2xl text-[#332a26]">começa aqui.</p></div><div className="grid h-11 w-11 place-items-center rounded-full bg-[#6e5549] text-white"><Sparkles size={18}/></div></div></div></div></div></Reveal>
    </div>
   </section>

   <section
  id="procedimentos"
  className="px-5 py-24 lg:px-8 lg:py-32"
>
  <div className="mx-auto max-w-7xl">

    <Reveal>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Escolha o seu</p>
          <h2 className="section-title">Procedimentos</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Todos", "Sobrancelhas", "Cílios", "Pele"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                filter === item
                  ? "border-[#6e5549] bg-[#6e5549] text-white"
                  : "border-[#6e554928] bg-white/50 text-[#68584f] hover:bg-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </Reveal>

    {/* TODOS */}
    {filter === "Todos" && (
      <div className="mt-12 space-y-20">

        {["Sobrancelhas", "Cílios", "Pele"].map((category) => {

          const categoryServices = services.filter(
            (s) => s.category === category
          );

          const displayedServices = categoryServices;

          return (
            <div key={category}>

              <Reveal>
                <p className="eyebrow mb-8">{category}</p>
              </Reveal>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {displayedServices.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.08}>

                    <article className="group overflow-hidden rounded-[30px] border border-[#5d4c4320] bg-[#fffaf6] shadow-[0_24px_70px_-55px_#503c33] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-50px_#503c33]">

                      <div className="relative aspect-[4/4.6] overflow-hidden">

  {s.name === "Manutenção" ? (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#eadbd3] via-[#f7eee8] to-[#d8bfb4] px-8 text-center">

      <div className="mb-5 grid h-16 w-16 place-items-center rounded-full border border-white/60 bg-white/50 shadow-lg backdrop-blur">
        <Clock3 size={28} className="text-[#6e5549]" />
      </div>

      <p className="text-xs uppercase tracking-[0.22em] text-[#8b7469]">
        Manutenção
      </p>

      <h4 className="mt-3 font-serif text-3xl text-[#3b302b]">
        Até 20 dias
      </h4>

      <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#725f56]">
        Para manter sua extensão bonita, alinhada e saudável.
      </p>

    </div>
  ) : "images" in s && s.images ? (
    <ServiceGallery
      images={s.images}
      name={s.name}
    />
  ) : (
    <img
      src={s.images}
      alt={s.name}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  )}

  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#fffaf5d9] px-3 py-1.5 text-xs text-[#67564d] backdrop-blur">
    {s.category}
  </span>

</div>

                      <div className="p-6">

                        <div className="flex items-start justify-between gap-4">

                          <div>
                            <h3 className="font-serif text-2xl text-[#302622]">
                              {s.name}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-[#786960]">
                              {s.description}
                            </p>
                          </div>

                          <span className="whitespace-nowrap text-lg font-medium text-[#6e5549]">
                            {s.price}
                          </span>

                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-[#5d4c4316] pt-5 text-sm text-[#85756c]">

                          <span className="flex items-center gap-2">
                            <Clock3 size={16} />
                            {s.duration}
                          </span>

                          <button
                            onClick={() => agendarProcedimento(s.name)}
                            className="inline-flex items-center gap-2 font-medium text-[#5c473d] transition-all duration-300 group-hover:gap-3"
                          >
                            Agendar
                            <ArrowUpRight size={16} />
                          </button>

                        </div>

                      </div>

                    </article>

                  </Reveal>
                ))}

              </div>

            </div>
          );
        })}

      </div>
    )}

    {/* FILTRO INDIVIDUAL */}
    {filter !== "Todos" && (() => {

      const categoryServices = services.filter(
        (s) => s.category === filter
      );

      const displayedServices = categoryServices;

      return (
        <div className="mt-12">

          <Reveal>
            <p className="eyebrow mb-8">{filter}</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {displayedServices.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>

                <article className="group overflow-hidden rounded-[30px] border border-[#5d4c4320] bg-[#fffaf6] shadow-[0_24px_70px_-55px_#503c33] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_80px_-50px_#503c33]">

                  <div className="relative aspect-[4/4.6] overflow-hidden">

  {s.name === "Manutenção" ? (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#eadbd3] via-[#f7eee8] to-[#d8bfb4] px-8 text-center">

      <div className="mb-5 grid h-16 w-16 place-items-center rounded-full border border-white/60 bg-white/50 shadow-lg backdrop-blur">
        <Clock3 size={28} className="text-[#6e5549]" />
      </div>

      <p className="text-xs uppercase tracking-[0.22em] text-[#8b7469]">
        Manutenção
      </p>

      <h4 className="mt-3 font-serif text-3xl text-[#3b302b]">
        Até 20 dias
      </h4>

      <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#725f56]">
        Para manter suas extensões bonitas, alinhadas e bem preenchidas.
      </p>

      <div className="mt-6 rounded-full border border-[#6e55492b] bg-white/50 px-4 py-2 text-xs font-medium text-[#5f4b42] backdrop-blur">
        Retorno recomendado
      </div>

    </div>
  ) : "images" in s && s.images ? (
    <ServiceGallery
      images={s.images}
      name={s.name}
    />
  ) : (
    <img
      src={s.images}
      alt={s.name}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
  )}

  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#fffaf5d9] px-3 py-1.5 text-xs text-[#67564d] backdrop-blur">
    {s.category}
  </span>

</div>

                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3 className="font-serif text-2xl text-[#302622]">
                          {s.name}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#786960]">
                          {s.description}
                        </p>

                      </div>

                      <span className="whitespace-nowrap text-lg font-medium text-[#6e5549]">
                        {s.price}
                      </span>

                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-[#5d4c4316] pt-5 text-sm text-[#85756c]">

                      <span className="flex items-center gap-2">
                        <Clock3 size={16} />
                        {s.duration}
                      </span>

                      <button
                        onClick={() => agendarProcedimento(s.name)}
                        className="inline-flex items-center gap-2 font-medium text-[#5c473d] transition-all duration-300 group-hover:gap-3"
                      >
                        Agendar
                        <ArrowUpRight size={16} />
                      </button>

                    </div>

                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>
      );

    })()}

  </div>
</section>

   <section
  id="resultados"
  className="relative overflow-hidden border-y border-[#5d4c4315] bg-[#f1e8e1] px-5 py-24 lg:px-8 lg:py-32"
>
  {/* GLOWS */}
  <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#d9b9ae40] blur-[120px]" />

  <div className="pointer-events-none absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#cfaea140] blur-[120px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* TÍTULO */}
    <Reveal>
      <p className="eyebrow">Beleza em detalhes</p>

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <h2 className="section-title max-w-2xl">
          Resultados que falam por si.
        </h2>

        <p className="max-w-md text-sm leading-7 text-[#786960]">
          Conheça alguns dos resultados que fazem parte do meu trabalho.
        </p>
      </div>
    </Reveal>

    {/* FOTOS */}
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">

      {gallery.map((item, i) => (
        <Reveal
          key={item.name}
          delay={i * 0.08}
          className={
            i === 1
              ? "lg:translate-y-12"
              : i === 3
              ? "lg:translate-y-20"
              : ""
          }
        >
          <div>

            <div
  className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/60 shadow-[0_25px_70px_-35px_rgba(79,60,51,0.45)]"
>
              <img
  src={item.image}
  alt={item.name}
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
/>

              {/* BRILHO NO HOVER */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover:left-[130%]" />
              </div>

            </div>

            {/* NOME DO PROCEDIMENTO */}
            <div className="mt-4 flex items-center justify-center gap-3">

              <span className="h-px w-6 bg-[#8e716480]" />

              <p className="font-serif text-base text-[#51423b]">
                {item.name}
              </p>

              <span className="h-px w-6 bg-[#8e716480]" />

            </div>

          </div>
        </Reveal>
      ))}

    </div>

  </div>
</section>

   <section id="sobre" className="px-5 py-24 lg:px-8 lg:py-36"><div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr]"><Reveal className="relative"><div className="absolute -inset-5 rounded-[50px] bg-[#d5b7aa66] blur-[55px]"/><div className="relative aspect-[4/5] overflow-hidden rounded-[38px]"><img
  src={fotoCapa}
  alt="Profissional de beleza"
  loading="lazy"
  decoding="async"
  className="h-full w-full object-cover"
/></div></Reveal><Reveal delay={.1}><p className="eyebrow">Sobre o atendimento</p><h2 className="section-title">Beleza com naturalidade,<br/><span className="italic text-[#8e7164]">cuidado em cada detalhe.</span></h2><p className="mt-7 max-w-xl text-base leading-8 text-[#6d5d55]">Mais do que um procedimento, cada atendimento é pensado para valorizar seus traços e criar um momento de autocuidado.</p><div className="mt-9 grid max-w-xl grid-cols-2 gap-3">{[["01","Atendimento personalizado"],["02","Técnicas cuidadosas"],["03","Ambiente acolhedor"],["04","Resultado natural"]].map(([n,t])=><div key={n} className="rounded-2xl border border-[#5d4c4318] bg-white/45 p-4"><span className="text-xs text-[#a38b7f]">{n}</span><p className="mt-2 text-sm font-medium text-[#51423b]">{t}</p></div>)}</div></Reveal></div></section>

   <section className="relative overflow-hidden bg-[#2d2522] px-5 py-24 text-[#f8f3ee] lg:px-8 lg:py-32">

  {/* DETALHES DECORATIVOS */}
  <div className="pointer-events-none absolute -left-32 bottom-[-100px] h-[400px] w-[400px] rounded-full border border-[#b8958450]" />

  <div className="pointer-events-none absolute -right-28 top-[-40px] h-[420px] w-[420px] rounded-full border border-[#b8958450]" />

  <div className="relative mx-auto max-w-7xl">

    {/* TÍTULO */}
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-[#c5a79a]">
          Depoimentos
        </p>

        <div className="mx-auto mt-5 h-px w-20 bg-[#b8958470]" />

        <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
          Quem vem,{" "}
          <span className="italic text-[#d0aa9a]">
            conta.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#cbbfb9] sm:text-base">
          Mais que resultados, são experiências de quem já viveu esse cuidado por aqui.
        </p>

      </div>
    </Reveal>

    {/* DEPOIMENTOS */}
    <div className="mt-14 grid gap-5 md:grid-cols-3">

      {testimonials.map((item, i) => (
        <Reveal
          key={item.name}
          delay={i * 0.08}
          className="h-full"
        >

          <div className="relative flex h-full min-h-[270px] flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">

            {/* ESTRELAS */}
            <div className="flex gap-1 text-[#d7b3a3]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={15}
                  fill="currentColor"
                />
              ))}
            </div>

            {/* ASPAS */}
            <div className="absolute right-7 top-5 font-serif text-6xl leading-none text-[#a3817250]">
              “
            </div>

            {/* TEXTO */}
            <p className="mt-7 flex-1 text-sm leading-7 text-[#eee5df] sm:text-[15px]">
              “{item.text}”
            </p>

            {/* NOME */}
            <div className="mt-8 flex items-center gap-4">

              <span className="h-px w-7 bg-[#b8958480]" />

              <p className="text-xs uppercase tracking-[0.2em] text-[#c5a79a]">
                {item.name}
              </p>

            </div>

          </div>

        </Reveal>
      ))}

    </div>

  </div>
</section>

   <section id="faq" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[.7fr_1.3fr]"><Reveal><p className="eyebrow">Dúvidas</p><h2 className="section-title">Tudo mais simples antes do seu horário.</h2></Reveal><div>{faq.map(([q,a],i)=><Reveal key={q} delay={i*.05}><div className="border-b border-[#5d4c4320]"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="flex w-full items-center justify-between py-6 text-left"><span className="font-serif text-xl text-[#342b27]">{q}</span><ChevronDown className={`transition ${openFaq===i?"rotate-180":""}`} size={19}/></button>{openFaq===i&&<p className="pb-6 pr-10 text-sm leading-7 text-[#786960]">{a}</p>}</div></Reveal>)}</div></div></section>

   <section className="px-5 pb-24 lg:px-8 lg:pb-32"><Reveal><div
  className="
    relative
    mx-auto
    max-w-7xl
    overflow-hidden
    rounded-[40px]
    border
    border-white/40
    px-7
    py-16
    text-center
    shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_30px_80px_-50px_rgba(85,60,50,0.35)]
    sm:px-12
    lg:py-24
  "
  style={{
    background:
      "linear-gradient(135deg, #d9c1b6 0%, #ead9d0 40%, #d3b7aa 100%)",
  }}
>{/* GLOW CENTRAL */}
<div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-[100px]" />

{/* LUZ ESQUERDA */}
<div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#f6e8df]/60 blur-[80px]" />

{/* ROSÉ DIREITO */}
<div className="pointer-events-none absolute -right-20 bottom-[-80px] h-72 w-72 rounded-full bg-[#a98373]/25 blur-[90px]" />

{/* DETALHE SUPERIOR */}
<div className="pointer-events-none absolute left-1/2 top-8 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8e7164]/40 to-transparent" />

{/* CONTEÚDO */}
<div className="relative z-10"><Sparkles className="mx-auto text-[#725d52]" size={22}/><h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-[#302622] sm:text-5xl lg:text-6xl">Seu momento de autocuidado começa aqui.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#66564d]">Escolha seu procedimento e fale comigo para encontrar o melhor horário.</p><div className="mt-8 flex flex-wrap items-center justify-center gap-3">

  <LiquidMetalButton
  label="Falar no WhatsApp"
  onClick={() => {
    window.open(
      WA_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  }}
/>

  <a
  href={INSTAGRAM_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    inline-flex
    h-12
    items-center
    justify-center
    overflow-hidden
    rounded-full
    p-[2px]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_28px_rgba(86,61,50,0.16)]
  "
  style={{
    background:
      "linear-gradient(110deg, #b99788 0%, #e4cfc4 25%, #fff5ef 45%, #d9b8aa 65%, #a98373 100%)",
    backgroundSize: "220% 100%",
    animation: "liquidMetalFlow 5.5s ease-in-out infinite",
  }}
>
  <span
    className="
      relative
      z-10
      flex
      h-full
      items-center
      justify-center
      gap-2.5
      rounded-full
      bg-[#f8eee8]
      px-7
      text-sm
      font-medium
      text-[#5f493f]
      transition
      duration-300
      group-hover:bg-[#fff7f2]
    "
  >
    <Instagram size={17} />
    Ver Instagram
  </span>
</a>

</div></div></div></Reveal></section>
  </main>
  <footer className="border-t border-[#5d4c4315] px-5 py-10 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between"><Logo/><p className="text-xs text-[#8a7a71]">© {new Date().getFullYear()} Adrieli Mendonça. Todos os direitos reservados.</p><div className="flex gap-2"><a href={INSTAGRAM_LINK} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-[#5d4c4320] transition hover:bg-white"><Instagram size={17}/></a><a href={WA_LINK} aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-[#5d4c4320] transition hover:bg-white"><MessageCircle size={17}/></a></div></div></footer>
 </div>
}