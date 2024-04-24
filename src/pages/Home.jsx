import backgroundOcean from '/src/assets/about/seaBackground.jpg'
import { gsap } from "gsap";
import {useLayoutEffect, useRef} from "react";


function Home() {

    let titleRef = useRef();
    let nameRef = useRef();

    useLayoutEffect(() => {
        gsap.from(titleRef.current, {x: "-25%", duration: 0.5})
        gsap.from(nameRef.current, {x: "-25%", duration: 0.5});
    }, []);


    return (
        <div className="h-[84vh] overflow-clip flex items-center">
            <img src={backgroundOcean} className="h-full w-full object-cover" alt=""/>
            <div className="flex flex-col justify-center left-[2%] absolute">
                <h1 ref={titleRef} className="text-8xl font-bold font-dev text-slate-100">DÉVELOPPEUR FULL STACK</h1>
                <h1 ref={nameRef} className="mb-16 text-5xl font-bold font-ocean text-slate-100">PELLERIN Aimery</h1>
                <p className="w-[40%] text-slate-200 text-xl">L'informatique à toujours été une discipline qui me passionne
                depuis tout petit. Année après année, j'ai pris goût à découvrir de nouveaux languages de programmation ou à
                utiliser de nouvelles applications afin de développer ma créativité et nourrir ma curiosité. Je suis actuellement
                entrain d'apprendre ces compétences à l'IUT 2 de Grenoble.</p>
            </div>
        </div>
    );
}

export default Home;