"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-secondary selection:bg-primary selection:text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "nav-scrolled py-2" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-white shadow-md">
                <Image
                  src="/images/LOGO TIPO MIA HOGAR.jpg"
                  alt="Mia Hogar Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-secondary">
                MIA HOGAR
              </span>
            </div>

            <nav className="hidden md:flex space-x-10 text-sm font-bold uppercase tracking-widest">
              {["Inicio", "Servicios", "Propiedades", "Nosotros", "Contacto"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary/70 hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <a href="#contacto" className="bg-secondary text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95">
              Contactar
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-accent">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-6 translate-x-1/4 hidden lg:block opacity-40"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-border text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Líderes en Bienes Raíces
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-secondary mb-10 leading-[0.95] tracking-tighter">
                  Tu <span className="text-primary italic">hogar</span><br />
                  soñado,<br />
                  en manos<br />
                  expertas.
                </h1>
                <p className="max-w-xl mx-auto lg:mx-0 text-xl text-muted mb-12 leading-relaxed font-medium">
                  En <span className="text-secondary font-bold">Mia Hogar</span>, brindamos asesoría profesional y exclusiva para la venta y renta de las mejores propiedades de Honduras.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <a href="#categorias" className="bg-secondary text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-primary transition-all shadow-2xl hover:-translate-y-1 text-xs">
                    Ver Catálogo
                  </a>
                  <a href="#servicios" className="bg-white border-2 border-primary/30 text-secondary px-12 py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-accent transition-all text-xs">
                    Ver Servicios
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex justify-end relative animate-slide-up">
                <div className="relative w-[500px] h-[500px]">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] scale-125"></div>
                  <Image
                    src="/images/LOGO TIPO MIA HOGAR.jpg"
                    alt="Mia Hogar Logo Hero"
                    fill
                    className="relative rounded-full shadow-2xl border-[15px] border-white object-cover"
                    priority
                  />
                </div>
                <div className="absolute top-1/2 -left-12 bg-white p-10 rounded-[3rem] shadow-2xl border border-accent animate-float">
                  <p className="text-5xl font-black text-primary tracking-tighter">10+</p>
                  <p className="text-xs font-black text-muted uppercase tracking-[0.2em]">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32 max-w-3xl mx-auto">
              <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-6">Excelencia en Servicio</p>
              <h2 className="text-5xl md:text-6xl font-black text-secondary mb-8 tracking-tighter">Asesoría Integral</h2>
              <p className="text-muted text-xl font-medium leading-relaxed">Cada propiedad tiene una historia, nosotros nos encargamos de que su próximo capítulo sea legendario.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Venta Profesional", desc: "Maximizamos el valor de su activo con estrategias de marketing directo y posicionamiento Premium.", icon: "🏠" },
                { title: "Renta Segura", desc: "Garantizamos inquilinos de perfil alto y contratos robustos para su total tranquilidad financiera.", icon: "🔑" },
                { title: "Consultoría", desc: "Análisis profundo del mercado para inversiones inmobiliarias de alto rendimiento.", icon: "📊" }
              ].map((service, i) => (
                <div key={i} className="group p-12 bg-accent hover:bg-white border-2 border-transparent hover:border-border rounded-[3.5rem] transition-all duration-700 card-shadow text-center">
                  <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center mx-auto mb-10 text-5xl shadow-sm group-hover:rotate-6 transition-transform duration-700">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-secondary mb-6 tracking-tighter">{service.title}</h3>
                  <p className="text-muted text-lg font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section id="categorias" className="py-32 px-4 sm:px-6 lg:px-8 bg-accent">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 gap-12 text-center md:text-left">
              <div className="max-w-xl">
                <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-6">Nuestro Portafolio</p>
                <h2 className="text-5xl md:text-6xl font-black text-secondary mb-4 tracking-tighter">Más de 20+ Propiedades.</h2>
                <p className="text-muted text-lg font-medium">Contáctanos directamente para recibir nuestro catálogo actualizado.</p>
              </div>
              <a href="https://wa.me/50498294183" target="_blank" className="text-primary font-black uppercase tracking-widest text-xs border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all pb-2">Solicitar Catálogo vía WhatsApp</a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Apartamentos", info: "Vistas Urbanas", icon: "🏢" },
                { name: "Condominios", info: "Lujo & Comunidad", icon: "🏘️" },
                { name: "Casas", info: "Hogares Familiares", icon: "🏡" },
                { name: "Locales", info: "Nodos Comerciales", icon: "🏬" }
              ].map((cat, i) => (
                <div key={i} className="group relative overflow-hidden rounded-[3rem] bg-white p-12 flex flex-col items-center text-center border-2 border-transparent hover:border-primary transition-all duration-700 card-shadow h-full">
                  <div className="w-28 h-28 rounded-full bg-accent text-primary flex items-center justify-center mb-10 group-hover:scale-110 transition-all duration-700 text-5xl">
                    {cat.icon}
                  </div>
                  <h3 className="font-black text-2xl text-secondary mb-4 tracking-tight">{cat.name}</h3>
                  <p className="text-muted text-xs font-black uppercase tracking-widest opacity-60">{cat.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2 relative space-y-12">
                <div className="aspect-[4/5] bg-accent rounded-[5rem] overflow-hidden border-[15px] border-accent card-shadow transform rotate-2 hover:rotate-0 transition-transform duration-1000">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center p-20">
                    <p className="text-secondary font-black text-4xl text-center italic leading-tight">"Nuestra visión es abrir la puerta de tu próximo gran capítulo."</p>
                  </div>
                </div>
                <div className="absolute -bottom-12 -left-12 bg-secondary text-white p-12 rounded-[4rem] shadow-2xl hidden md:block">
                  <p className="font-black text-xs uppercase tracking-[0.3em] mb-3 opacity-60">Catálogo</p>
                  <p className="text-5xl font-black tracking-tight">20+ PROPIEDADES</p>
                </div>
              </div>

              <div className="lg:w-1/2">
                <p className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-6">Conócenos</p>
                <h2 className="text-5xl md:text-7xl font-black text-secondary mb-12 tracking-tighter leading-[0.9]">Pasión por el detalle e integridad total.</h2>
                <div className="space-y-10">
                  <p className="text-2xl text-muted font-medium leading-relaxed">
                    <span className="text-secondary font-black">Mia Hogar Bienes Raíces</span> destaca por un acompañamiento humano y técnico en cada decisión inmobiliaria.
                  </p>
                  <p className="text-xl text-muted leading-relaxed font-medium">
                    No solo facilitamos transacciones; construimos patrimonios. Nuestro conocimiento local y visión global nos permiten ofrecer oportunidades únicas en el mercado hondureño.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                    {["Asesoría para Bienes Raíces", "Cálculo estimado para financiamiento"].map((val) => (
                      <div key={val} className="flex flex-col gap-2">
                        <div className="flex items-center gap-5 text-secondary font-black text-xl tracking-tight">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">✓</div>
                          {val}
                        </div>
                        {val.includes("financiamiento") && (
                          <a
                            href="https://calculadoradefinanzas.com/tabla-amortizacion"
                            target="_blank"
                            className="text-primary text-xs font-bold hover:underline ml-14"
                          >
                            Ver herramienta de cálculo →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[5rem] p-16 md:p-24 card-shadow flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <h2 className="text-5xl md:text-7xl font-black text-secondary mb-10 tracking-tighter">¿Hablamos hoy?</h2>
              <p className="text-2xl text-muted font-medium mb-20 max-w-2xl leading-relaxed">
                Agenda una consultoría personalizada y descubre el valor real de tu próxima propiedad.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-20">
                {[
                  { label: "WhatsApp", val: "+504 9829-4183" },
                  { label: "Correo", val: "inmomihogar77@gmail.com" },
                  { label: "Oficina", val: "Tegucigalpa, Honduras" }
                ].map((item, i) => (
                  <div key={i} className="bg-accent p-10 rounded-[3rem] border border-border">
                    <p className="text-primary font-black mb-4 uppercase tracking-[0.2em] text-[10px]">{item.label}</p>
                    <p className="text-secondary font-black text-lg break-words tracking-tight">{item.val}</p>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/50498294183" target="_blank" className="inline-flex items-center gap-6 bg-primary text-white text-lg px-16 py-7 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                Enviar Mensaje Directo
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 bg-accent border-t border-border">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <Image src="/images/LOGO TIPO MIA HOGAR.jpg" alt="Footer Logo" width={60} height={60} className="rounded-full shadow-md" />
            <span className="font-black text-3xl text-secondary tracking-tighter">MIA HOGAR</span>
          </div>
          <p className="text-secondary font-black text-center italic text-xl">"Abriendo las puertas <br className="hidden sm:block" /> de tu futuro."</p>
          <div className="text-center md:text-right">
            <p className="text-muted text-[10px] font-black uppercase tracking-[0.3em] mb-2">Copyright 2026</p>
            <p className="text-secondary font-black text-sm uppercase tracking-tighter">MIA HOGAR BIENES RAÍCES - HONDURAS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
