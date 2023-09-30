import Image from 'next/image';
import { asset, belezza } from './layout';
import CheckIcon from '@mui/icons-material/Check';
import { FramerMotion } from '@/components/FramerMotion';

export default function Home() {
  const loginHandler = () => {
    console.log('login');
  };

  return (
    <main>
      <div className=" h-[calc(100vh)] bottom-[0px] flex flex-col bg-cover bg-center bg-[url('/images/barbeariadojao_main.jpg')]">
        <div className="w-full h-full bg-gradient-to-r from-black to-transparent flex">
          <div className="w-[50%] h-full flex justify-end items-center">
            <p className={`lg:w-[60%] w-[75%] text-[4em] ${belezza.className}`}>
              CORTE FEITO COM PAIXÃO.
              <br />
              <span className="text-yellow-500">BARBEARIA DO JÃO </span>É
              TRADIÇÃO.
            </p>
          </div>
          <div className="w-[50%] h-full flex flex-col justify-center items-center gap-y-[10px] text-[1.5em]">
            <div className="bg-black/50 w-[450px] items-center justify-center px-[30px] py-[15px] rounded-[10px]">
              <p>Tabela de valores</p>
              <div className="border-y-[1px] border-y-slate-600 py-[10px] my-[10px]">
                <div className={`flex items-center justify-between`}>
                  <p>CORTE</p>
                  <p className="text-yellow-300 font-semibold text-[1.4em]">
                    <sup className="text-white text-[0.5rem] align-super">
                      R$
                    </sup>
                    55
                  </p>
                </div>
                <div
                  className={`flex items-center justify-between gap-x-[12px]`}
                >
                  <p>CORTE COM TESOURA</p>
                  <p className="text-yellow-300 font-semibold text-[1.4em]">
                    <sup className="text-white text-[0.5rem] align-super">
                      R$
                    </sup>
                    65
                  </p>
                </div>
                <div
                  className={`flex items-center justify-between gap-x-[12px]`}
                >
                  <p>CORTE COM DESENHO</p>
                  <p className="text-yellow-300 font-semibold text-[1.4em]">
                    <sup className="text-white text-[0.5rem] align-super">
                      R$
                    </sup>
                    75
                  </p>
                </div>
                <div
                  className={`flex items-center justify-between gap-x-[12px]`}
                >
                  <p>BARBA</p>
                  <p className="text-yellow-300 font-semibold text-[1.4em]">
                    <sup className="text-white text-[0.5rem] align-super">
                      R$
                    </sup>
                    35
                  </p>
                </div>
                <div
                  className={`flex items-center justify-between gap-x-[12px]`}
                >
                  <p>SOBRANCELHA</p>
                  <p className="text-yellow-300 font-semibold text-[1.4em]">
                    <sup className="text-white text-[0.5rem] align-super">
                      R$
                    </sup>
                    25
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center font-extralight">
                <p>OU</p>
              </div>
              <p className="flex items-center justify-center">
                <a href="#plans">Acesse nossos planos</a>
              </p>
            </div>
            <button
              className="bg-yellow-400 p-[15px] rounded-[8px] font-semibold text-[1.4em]
             text-black"
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-row justify-start items-start gap-x-[10px] overflow-x-hidden">
        <div className="w-[35%] h-[600px] relative bg-green-100">
          <Image
            src="/images/barber1.jpg"
            alt="Barber 1"
            fill={true}
            objectFit="cover"
            className=""
          />
        </div>
        <div className="w-[65%] h-[600px] relative">
          <div className="w-full h-[50%] relative flex gap-x-[5px]">
            <div className="w-[33.3%] h-full opacity-20 relative">
              <Image
                src="/images/barber1.jpg"
                alt="Barber 1"
                fill={true}
                objectFit="cover"
                className=""
              />
            </div>
            <div className="w-[33.3%] h-full opacity-20 relative">
              <Image
                src="/images/barber4.jpg"
                alt="Barber 4"
                fill={true}
                objectFit="cover"
                className=""
              />
            </div>
            <div className="w-[33.3%] h-full opacity-20 relative">
              <Image
                src="/images/barber5.jpg"
                alt="Barber 5"
                fill={true}
                objectFit="cover"
                className=""
              />
            </div>
          </div>
          <div className="w-full h-[50%] relative">
            <Image
              src="/images/barber3.jpg"
              alt="Barber 3"
              fill={true}
              objectFit="cover"
              className=""
            />
          </div>
        </div>
        <FramerMotion
          className="w-[700px] h-[600px] absolute bg-gradient-to-t from-yellow-400 to-50%
          rounded-[10px] right-[0px] bottom-[0px]"
        >
          <div className="w-full h-full absolute motion-object">
            <Image
              src="/images/barber2.png"
              alt="Barber 2"
              fill={true}
              objectFit="cover"
              className=""
            />
          </div>
          {/* <div className="absolute w-full h-[50%] bottom-[0px]" /> */}
        </FramerMotion>
      </div>
      <div
        className="w-full h-[100vh] relative flex flex-col justify-center items-center"
        id="plans"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-[1.6em]">Planos</p>
          <p>Tenha acesso a até 4 cortes por mês pagando menos!</p>
        </div>
        <div className="p-[10px] flex justify-center items-center gap-x-[10px] w-full h-[75%] text-black">
          <div className="w-[350px] min-h-[400px] py-[20px] bg-slate-100 rounded-[10px] flex flex-col items-center justify-around">
            <div className="flex items-center w-[70%] border-b-[1px] border-b-black/30 justify-center">
              <p className="flex items-center justify-center p-[10px] text-semibold text-[1.3em]">
                PLATINUM
              </p>
            </div>
            <div className="pt-[25px]">
              <p className="font-semibold text-[2.4em] text-black">
                <sup className="text-[0.5rem] align-super">R$</sup>
                350
                <sub className="text-[0.7rem] align-baseline">/mês</sub>
              </p>
            </div>
            <ul className="flex flex-col w-full py-[40px] px-[20px] gap-y-[20px]">
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso a 12 bebidas por mês.
              </li>
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Hidratação pós barba / corte.
              </li>
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso total aos videogames.
              </li>
            </ul>
            <button
              className="bg-yellow-400 py-[15px] px-[40px] rounded-[8px] font-semibold text-[1.4em]
              text-black"
              type="button"
            >
              Assine
            </button>
          </div>
          <div className="w-[350px] min-h-[500px] py-[20px] bg-yellow-400 rounded-[10px] flex flex-col items-center justify-around">
            <div className="flex items-center justify-center w-[70%] border-b-[1px] border-b-black/30">
              <p className="flex items-center justify-center p-[10px] text-semibold text-[1.3em] text-black">
                BASIC
              </p>
            </div>
            <div className="pt-[25px]">
              <p className="font-semibold text-[2.4em] text-black">
                <sup className="text-[0.5rem] align-super">R$</sup>
                150
                <sub className="text-[0.7rem] align-baseline">/mês</sub>
              </p>
            </div>
            <ul className="flex flex-col w-full py-[40px] px-[20px] gap-y-[20px]">
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso a 6 bebidas por mês.
              </li>
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso a 6 bebidas por mês.
              </li>
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso a 6 bebidas por mês.
              </li>
            </ul>
            <button
              className="bg-white py-[15px] px-[40px] rounded-[8px] font-semibold text-[1.4em]
              text-black"
              type="button"
            >
              Assine
            </button>
          </div>
          <div className="w-[350px] min-h-[400px] py-[20px] bg-slate-100 rounded-[10px] flex flex-col items-center justify-around">
            <div className="flex items-center justify-center w-[70%] border-b-[1px] border-b-black/30">
              <p className="flex items-center justify-center p-[10px] text-semibold text-[1.3em] text-black">
                PRO
              </p>
            </div>
            <div className="pt-[25px]">
              <p className="font-semibold text-[2.4em] text-black">
                <sup className="text-[0.5rem] align-super">R$</sup>
                250
                <sub className="text-[0.7rem] align-baseline">/mês</sub>
              </p>
            </div>
            <ul className="flex flex-col w-full py-[40px] px-[20px] gap-y-[20px]">
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso a 10 bebidas por mês.
              </li>
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso total aos videogames.
              </li>
              <li className="flex items-center gap-x-[10px]">
                <CheckIcon className="text-green-300" />
                Acesso total aos videogames.
              </li>
            </ul>
            <button
              className="bg-yellow-400 py-[15px] px-[40px] rounded-[8px] font-semibold text-[1.4em]
              text-black"
              type="button"
            >
              Assine
            </button>
          </div>
        </div>
      </div>
      <header
        className="h-[80px] w-full bg-black/40 flex items-center justify-between
        fixed top-[0px] border-b-[1px] border-b-yellow-600"
      >
        <div className="relative h-[100%] w-[200px]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill={true}
            objectFit="contain"
            className=""
          />
        </div>
        <nav
          className="px-[25px] flex items-center justify-around text-[1.2em]
         text-yellow-400"
        >
          <button

          // onClick={loginHandler}
          >
            Login
          </button>
        </nav>
      </header>
    </main>
  );
}
