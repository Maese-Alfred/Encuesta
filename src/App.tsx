import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Menu } from 'lucide-react';

import { Header, Sidebar, Footer } from './components/layout';
import {
  PerfilSection,
  LaboralSection,
  BienestarSection,
  PsicosocialSection,
  DigitalSection,
  ClimaSection,
  MotivacionSection,
  BienestarLaboralSection,
  LiderazgoSection,
  ProyeccionSection,
  CambioSection,
  AbiertasSection,
} from './components/sections';

import { useSurveyForm } from './hooks/useSurveyForm';
import { SECTIONS } from './constants/survey';
import type { SectionId } from './types/survey';
import './index.css';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('perfil');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { formData, setField, submitStatus, handleSaveDraft, handleSubmit } = useSurveyForm();

  const handleSectionChange = (id: SectionId) => {
    setActiveSection(id);
    setIsSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onMenuToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="flex flex-1 pt-16">
        {/* Mobile backdrop */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-30 bg-black/40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
        </AnimatePresence>

        <Sidebar
          sections={SECTIONS}
          activeSection={activeSection}
          isOpen={isSidebarOpen}
          onSectionChange={handleSectionChange}
          onSave={handleSaveDraft}
        />

        <main className="flex-1 px-4 sm:px-6 md:px-12 py-8 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight leading-tight">
              Evaluación Integral del Talento Humano
            </h1>
            <p className="text-base sm:text-lg text-secondary max-w-3xl leading-relaxed">
              Su opinión es fundamental para construir un mejor entorno laboral. Esta encuesta es
              anónima y los resultados se utilizarán para fines de mejora institucional.
            </p>
          </motion.div>

          <div className="space-y-10 pb-16">
            <PerfilSection data={formData} onChange={setField} />
            <LaboralSection data={formData} onChange={setField} />
            <BienestarSection data={formData} onChange={setField} />
            <PsicosocialSection data={formData} onChange={setField} />
            <DigitalSection data={formData} onChange={setField} />
            <ClimaSection data={formData} onChange={setField} />
            <MotivacionSection data={formData} onChange={setField} />
            <BienestarLaboralSection data={formData} onChange={setField} />
            <LiderazgoSection data={formData} onChange={setField} />
            <ProyeccionSection data={formData} onChange={setField} />
            <CambioSection data={formData} onChange={setField} />
            <AbiertasSection data={formData} onChange={setField} />

            {/* Consent & Submit */}
            <section className="pt-10 border-t border-outline-variant/30 flex flex-col items-center space-y-8">
              <div className="w-full max-w-3xl">
                <label className="flex items-start gap-4 p-6 sm:p-8 bg-surface-container-low rounded-3xl cursor-pointer hover:bg-surface-container-high transition-all group border border-outline-variant/40">
                  <input
                    type="checkbox"
                    checked={formData.autorizacion}
                    onChange={(e) => setField('autorizacion', e.target.checked)}
                    className="mt-1 w-5 h-5 sm:w-7 sm:h-7 rounded-lg text-primary border-outline-variant focus:ring-primary/30 shrink-0"
                  />
                  <span className="text-sm text-secondary leading-relaxed group-hover:text-on-surface transition-colors">
                    <strong className="text-on-surface block mb-1">
                      Autorización de Tratamiento de Datos (Ley 1581 de 2012):
                    </strong>
                    Acepto el tratamiento de mis datos personales de acuerdo con la Política de
                    Privacidad de la Institución. Entiendo que esta información es confidencial y
                    solo se utilizará con fines estadísticos y de bienestar laboral.
                  </span>
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!formData.autorizacion || submitStatus === 'loading'}
                className="w-full sm:w-auto px-10 sm:px-16 h-16 sm:h-20 bg-gradient-to-r from-primary to-primary-container text-white text-lg sm:text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                <CheckCircle2 size={24} />
                {submitStatus === 'loading' ? 'Enviando...' : 'Enviar Encuesta'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-tertiary font-semibold text-center">
                  ¡Encuesta enviada exitosamente! Gracias por su participación.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 font-semibold text-center">
                  Ocurrió un error al enviar. Por favor intente de nuevo.
                </p>
              )}
            </section>
          </div>

          <Footer />
        </main>
      </div>

      {/* Mobile FAB */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="lg:hidden fixed bottom-8 right-8 z-50"
          >
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Abrir navegación"
              className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
            >
              <Menu size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


