import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function UnlockSection() {
    return (
        <section className="relative w-full overflow-hidden bg-[#0052FE] py-20 sm:py-28 font-satoshi">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px), linear-gradient(to bottom, rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                    backgroundSize: "120px 120px",
                }}
            />

            <div className="hidden sm:block absolute -left-10 lg:left-0 top-0 w-35 sm:w-47.5 lg:w-60 pointer-events-none select-none z-10 animate-float">
                <Image src="/creator-cta/lime-coiled-ribbon.svg" alt="Lime Coiled Ribbon 3D Shape" width={266} height={225} className="w-full h-auto" />
            </div>

            <div className="hidden md:block absolute left-10 sm:left-24 lg:left-36 top-[8%] w-20 sm:w-27.5 lg:w-35 pointer-events-none select-none z-10 animate-float-reverse">
                <Image src="/creator-cta/white-wavy-spring.svg" alt="White Wavy Spring 3D Shape" width={177} height={176} className="w-full h-auto" />
            </div>

            <div className="hidden md:block absolute -left-6 sm:left-0 lg:left-4 bottom-[20%] w-17.5 sm:w-23.75 lg:w-30 pointer-events-none select-none z-10 animate-float-slow">
                <Image src="/creator-cta/white-cone-pyramid.svg" alt="White Cone Pyramid 3D Shape" width={140} height={189} className="w-full h-auto" />
            </div>

            <div className="hidden sm:block absolute -left-8 sm:left-0 lg:left-4 bottom-0 w-40 sm:w-55 lg:w-70 pointer-events-none select-none z-10 animate-float">
                <Image src="/creator-cta/lime-torus-ring.svg" alt="Lime Torus Ring 3D Shape" width={346} height={190} className="w-full h-auto" />
            </div>

            <div className="hidden md:block absolute right-12 sm:right-28 lg:right-40 top-[5%] w-22.5 sm:w-30 lg:w-37.5 pointer-events-none select-none z-10 animate-float-slow">
                <Image src="/creator-cta/lime-pyramid.svg" alt="Lime Pyramid 3D Shape" width={190} height={189} className="w-full h-auto" />
            </div>

            <div className="hidden sm:block absolute -right-8 lg:right-0 top-0 w-27.5 sm:w-37.5 lg:w-47.5 pointer-events-none select-none z-10 animate-float-reverse">
                <Image src="/creator-cta/white-curved-cylinder.svg" alt="White Curved Cylinder 3D Shape" width={218} height={372} className="w-full h-auto" />
            </div>

            <div className="hidden sm:block absolute -right-8 sm:right-0 lg:right-2 bottom-0 w-37.5 sm:w-52.5 lg:w-65 pointer-events-none select-none z-10 animate-float">
                <Image src="/creator-cta/lime-zigzag-wave.svg" alt="Lime Zigzag Wave 3D Shape" width={334} height={199} className="w-full h-auto" />
            </div>

            <ScrollReveal direction="up" distance={24} duration={650} className="container relative mx-auto px-4 z-20 flex flex-col items-center">
                <h2 className="font-clash font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white tracking-tight leading-snug sm:leading-[1.12]">
                    Unlock Your Potential as a
                    <br className="hidden sm:inline" />
                    Creator with ByteSpace
                </h2>

                <p className="mt-6 text-center text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-2xl sm:max-w-3xl mx-auto">
                    Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course
                    on the ByteSpace Course Library.
                </p>

                <Link
                  href="/register"
                  className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D4FB20] text-neutral-950 font-bold text-sm sm:text-base hover:bg-[#c3ea1a] hover:shadow-[0_10px_25px_rgba(212,251,32,0.35)] hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-md cursor-pointer"
                >
                  Join as Creator
                </Link>
            </ScrollReveal>
        </section>
    );
}
