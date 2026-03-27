import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

const projects: Array<{
  id: string
  name: string
  type: string
  summary: string
  impact: string
  href?: string
}> = [
  { id: '01', name: 'HRMS', type: 'Live product', summary: 'A human resources management system focused on employee workflows, admin visibility, and operational clarity.', impact: 'Built as a live web experience with a production-style dashboard surface.', href: 'https://atong066.github.io/hrms/' },
]

const skills = [
  { label: 'Frontend systems', title: 'React architecture with calm, scalable structure', detail: 'Interfaces that feel expressive on the surface and maintainable underneath.' },
  { label: 'Motion craft', title: 'Framer Motion scenes that feel authored', detail: 'Scroll, hover, and entrance motion sharpen hierarchy instead of adding noise.' },
  { label: 'Visual polish', title: 'Tailwind workflows tuned to a design eye', detail: 'Fast iteration, precise spacing, and more intentional surfaces without generic component soup.' },
]

const principles = [
  'Interfaces should feel inevitable, not assembled.',
  'Motion should clarify hierarchy before it decorates.',
  'Every screen needs one dominant idea and one clear next step.',
]

const stack = ['React', 'JavaScript', 'Node.js', 'Python', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'API integration', 'Full-stack architecture']
const labelClass = 'text-[.12rem] uppercase tracking-[.24em] text-[rgba(245,241,232,0.45)]'
const copyClass = 'm-0 text-[.16rem] leading-[1.7] text-[rgba(245,241,232,0.72)]'
const once = { once: true, amount: 0.28 }
const ease = [0.22, 1, 0.36, 1] as const

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null)
  const reduceMotion = !!useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0rem', reduceMotion ? '0rem' : '0.36rem'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, reduceMotion ? 1 : 0.55])
  const stageY = useTransform(scrollYProgress, [0, 1], ['0rem', reduceMotion ? '0rem' : '-0.24rem'])
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.24, reduceMotion ? 0.24 : 0.08])

  return (
    <motion.main className="min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.6, ease }}>
      <motion.section ref={heroRef} id="top" style={{ opacity: heroOpacity }} className="relative grid min-h-screen grid-rows-[auto_1fr] overflow-clip px-[.22rem] pt-[.22rem] pb-[.3rem] isolate max-[1080px]:min-h-auto max-[1080px]:pb-[.42rem] max-[720px]:px-[.14rem]">
        <motion.div aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.18), transparent 18%), radial-gradient(circle at 80% 10%, rgba(255,184,107,.2), transparent 20%), radial-gradient(circle at 50% 80%, rgba(131,225,255,.12), transparent 22%)' }} animate={reduceMotion ? undefined : { x: ['-1%', '2%'], y: ['0%', '2%'], scale: [1, 1.05] }} transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} className="pointer-events-none absolute inset-0 opacity-[.18] blur-[.12rem]" />
        <motion.div aria-hidden="true" style={{ opacity: gridOpacity, backgroundImage: 'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '.5rem .5rem', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,.72), transparent 90%)' }} className="pointer-events-none absolute inset-0" />

        <motion.header initial={{ opacity: 0, y: reduceMotion ? 0 : -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="relative z-[2] flex items-center justify-between gap-[.15rem] max-[720px]:flex-col max-[720px]:items-start">
          <motion.a className="text-[.15rem] font-extrabold tracking-[.34em] text-inherit no-underline" href="#top" whileHover={reduceMotion ? undefined : { y: -2 }}>VIRGILIO</motion.a>
          <nav className="flex gap-[.18rem] text-[.15rem] text-[rgba(245,241,232,0.74)] max-[720px]:flex-col max-[720px]:items-start">
            {['Work', 'Skills', 'About', 'Contact'].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={reduceMotion ? undefined : { y: -2 }} className="text-inherit no-underline transition-colors duration-200 hover:text-[var(--text-main)]">{item}</motion.a>
            ))}
          </nav>
        </motion.header>

        <motion.div style={{ y: heroY }} initial="hidden" animate="visible" variants={heroVariants(reduceMotion)} className="relative z-[1] max-w-[6.8rem] self-end pt-[1.05rem] pb-[.36rem] max-[1080px]:pt-[.72rem] max-[1080px]:pb-0">
          <motion.p variants={itemVariants(reduceMotion, 0)} className="mb-[.12rem] text-[.13rem] uppercase tracking-[.24em] text-[var(--text-muted)]">Full-stack web applications</motion.p>
          <motion.h1 variants={itemVariants(reduceMotion, 0.08)} className="m-0 max-w-[6.4rem] font-[var(--font-display)] text-[.9rem] leading-[.94] font-semibold tracking-[-.03em] text-balance">
            I design and build interfaces with cinematic motion, crisp hierarchy, and a distinct frontend voice.
          </motion.h1>
          <motion.p variants={itemVariants(reduceMotion, 0.16)} className="mt-[.16rem] max-w-[4.8rem] text-[.17rem] leading-[1.7] text-[rgba(245,241,232,0.76)]">
            Full-stack web developer focused on modern application architecture, polished admin surfaces, and interactions that make complex workflows feel clear.
          </motion.p>
          <motion.div variants={itemVariants(reduceMotion, 0.24)} className="mt-[.24rem] flex flex-wrap gap-[.1rem] max-[720px]:flex-col max-[720px]:items-start">
            <CTA href="#work" dark={false}>View selected work</CTA>
            <CTA href="mailto:galiciavigie0@gmail.com" dark>Start a project</CTA>
          </motion.div>
          <motion.div variants={itemVariants(reduceMotion, 0.32)} className="mt-[.26rem] flex flex-wrap gap-[.08rem]">
            {['React', 'Node.js', 'Python', 'JavaScript', 'Vite', 'Tailwind CSS'].map((skill) => <span key={skill} className="inline-flex items-center rounded-full border border-[rgba(245,241,232,0.12)] bg-[rgba(255,255,255,0.04)] px-[.14rem] py-[.08rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.72)] backdrop-blur-[.08rem]">{skill}</span>)}
          </motion.div>
        </motion.div>

        <motion.div aria-hidden="true" style={{ y: stageY }} className="absolute inset-0 max-[1080px]:relative max-[1080px]:mt-[.24rem] max-[1080px]:min-h-[3.8rem] max-[720px]:min-h-[3.2rem]">
          <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, rotateX: reduceMotion ? 0 : 14 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.25, ease }} className="absolute right-[10%] top-[18%] h-[2.8rem] w-[3.5rem] [perspective:12rem] max-[720px]:right-[.08rem] max-[720px]:top-[.52rem] max-[720px]:h-[2.18rem] max-[720px]:w-[2.56rem]">
            <motion.div animate={reduceMotion ? undefined : { rotateY: [-9, 9, -9], rotateX: [8, -4, 8] }} transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="relative h-full w-full [transform-style:preserve-3d]">
              <LogoCard icon={reactLogo} title="React" accent="rgba(97,218,251,0.34)" className="left-[.18rem] top-[.14rem] h-[.9rem] w-[.9rem] rotate-[-12deg]" />
              <LogoCard icon={viteLogo} title="Vite" accent="rgba(176,113,255,0.32)" className="right-[.12rem] top-[.02rem] h-[.82rem] w-[.82rem] rotate-[10deg]" />
              <LetterCard label="TS" title="TypeScript" accent="linear-gradient(135deg, rgba(41,116,227,.95), rgba(18,73,160,.86))" glow="rgba(41,116,227,.28)" className="left-[.44rem] bottom-[.18rem] h-[.88rem] w-[.88rem] rotate-[8deg]" />
              <LetterCard label="TW" title="Tailwind CSS" accent="linear-gradient(135deg, rgba(59,201,219,.96), rgba(20,115,148,.88))" glow="rgba(59,201,219,.28)" className="right-[.24rem] bottom-[.12rem] h-[.96rem] w-[.96rem] rotate-[-8deg]" />
            </motion.div>
          </motion.div>

          <Orb className="right-[9%] top-[16%] h-[3rem] w-[3rem] max-[720px]:right-0 max-[720px]:top-[.3rem] max-[720px]:h-[2rem] max-[720px]:w-[2rem]" duration={9} movement={{ x: ['0rem', '-0.14rem', '0rem'], y: ['0rem', '0.12rem', '0rem'] }} background="radial-gradient(circle at 30% 30%, rgba(255,220,166,.95), rgba(255,150,109,.2) 60%, transparent 72%)" />
          <Orb className="right-[18%] top-[28%] h-[2.1rem] w-[2.1rem] max-[720px]:right-[.34rem] max-[720px]:top-[.64rem] max-[720px]:h-[1.42rem] max-[720px]:w-[1.42rem]" duration={11} movement={{ x: ['0rem', '0.1rem', '0rem'], y: ['0rem', '-0.12rem', '0rem'] }} background="radial-gradient(circle at 50% 50%, rgba(130,220,255,.55), rgba(88,113,255,.1) 65%, transparent 74%)" />
          <Orb className="right-[30%] bottom-[18%] h-[1.45rem] w-[1.45rem] max-[720px]:right-[.72rem] max-[720px]:bottom-[.34rem] max-[720px]:h-[.94rem] max-[720px]:w-[.94rem]" duration={10} movement={{ x: ['0rem', '-0.06rem', '0rem'], y: ['0rem', '-0.08rem', '0rem'], scale: [1, 1.06, 1] }} background="radial-gradient(circle at 50% 50%, rgba(255,235,205,.3), rgba(255,235,205,.04) 70%, transparent 75%)" />

          <div className="absolute right-[9%] top-[16%] h-[3.4rem] w-[3.4rem] max-[720px]:right-[-.18rem] max-[720px]:top-[.16rem] max-[720px]:h-[2.3rem] max-[720px]:w-[2.3rem]">
            {[0, 1, 2].map((ring) => <motion.span key={ring} className="absolute rounded-full border border-[rgba(245,241,232,0.13)]" style={{ inset: ring === 0 ? '0' : ring === 1 ? '12%' : '24%' }} animate={reduceMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.55, 0.2, 0.55] }} transition={reduceMotion ? undefined : { duration: 7, delay: ring, repeat: Infinity, ease: 'easeInOut' }} />)}
          </div>

          <GlassNote title="Now building" body="Full-stack apps, admin systems, and modern dashboard UI" delay={0.45} className="right-[11%] bottom-[12%] max-[720px]:right-auto max-[720px]:left-0" />
          <GlassNote title="Availability" body="Open for freelance and creative collaborations" delay={0.58} className="top-[20%] right-[34%] max-[720px]:top-[.12rem] max-[720px]:right-auto max-[720px]:left-0" />
        </motion.div>
      </motion.section>

      <section aria-label="Capabilities" className="relative overflow-hidden border-y border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
        <motion.div animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }} transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-[.24rem] py-[.12rem]">
          {stack.concat(stack).map((item, index) => <span key={`${item}-${index}`} className="whitespace-nowrap text-[.12rem] uppercase tracking-[.24em] text-[rgba(245,241,232,0.7)]">{item}</span>)}
        </motion.div>
      </section>

      <Section id="skills" label="Skills">
        <div className="grid max-w-[11rem] grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] gap-[.24rem] max-[1080px]:grid-cols-1">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="rounded-[.22rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-[.2rem] shadow-[0_.1rem_.24rem_rgba(0,0,0,0.14)]">
            <p className="mb-[.08rem] text-[.12rem] uppercase tracking-[.2em] text-[rgba(245,241,232,0.56)]">Core stack</p>
            <h2 className="m-0 max-w-[4.8rem] font-[var(--font-display)] text-[.54rem] leading-[.94] font-semibold tracking-[-.03em]">Tools I use to make interfaces feel premium.</h2>
            <div className="mt-[.22rem] grid grid-cols-2 gap-[.1rem]">
              {['React + JavaScript', 'Node.js services', 'Python workflows', 'Vite build tooling', 'Framer Motion', 'Tailwind CSS', 'API integration', 'Responsive systems'].map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.05 * index, ease }} className="rounded-[.16rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,14,25,0.46)] px-[.14rem] py-[.14rem] text-[.15rem] text-[rgba(245,241,232,0.82)]">{item}</motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-[.1rem]">
            {skills.map((skill, index) => (
              <motion.article key={skill.title} initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08 * index, ease }} whileHover={reduceMotion ? undefined : { x: 4 }} className="border-t border-[rgba(255,255,255,0.09)] pt-[.12rem]">
                <p className="mb-[.05rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.5)]">{skill.label}</p>
                <h3 className="m-0 text-[.22rem] font-semibold leading-[1.2] text-[rgba(245,241,232,0.96)]">{skill.title}</h3>
                <p className="mt-[.06rem] text-[.15rem] leading-[1.7] text-[rgba(245,241,232,0.68)]">{skill.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" label="Approach">
        <div className="max-w-[11rem]">
          <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="m-0 max-w-[6.2rem] text-[.26rem] leading-[1.45]">
            I like bold pages that still know how to behave. That means strong typography, very few colors, meaningful movement, and enough systems thinking underneath to keep the work maintainable.
          </motion.p>
          <div className="mt-[.24rem] grid gap-[.12rem]">
            {principles.map((principle, index) => (
              <motion.p key={principle} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08 * index, ease }} className="m-0 border-t border-[rgba(255,255,255,0.08)] pt-[.12rem] text-[.16rem] leading-[1.7] text-[rgba(245,241,232,0.72)]">{principle}</motion.p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="work" label="Selected work">
        <div className="grid max-w-[11rem]">
          {projects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.09 * index, ease }} whileHover={reduceMotion ? undefined : { x: 4 }} className={`grid grid-cols-[1rem_minmax(0,1.5fr)_minmax(2.1rem,1fr)] items-start gap-[.18rem] border-t border-[rgba(255,255,255,0.1)] py-[.22rem] max-[1080px]:grid-cols-1 ${index === projects.length - 1 ? 'border-b border-b-[rgba(255,255,255,0.1)]' : ''}`}>
              <div className="grid gap-[.04rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.44)]"><span>{project.id}</span><span>{project.type}</span></div>
              <div>
                <h2 className="mb-[.06rem] font-[var(--font-display)] text-[.42rem] leading-[1] font-semibold tracking-[-.03em]">
                  {project.href ? <motion.a href={project.href} target="_blank" rel="noreferrer" whileHover={reduceMotion ? undefined : { x: 4 }} className="text-inherit no-underline">{project.name}</motion.a> : project.name}
                </h2>
                <p className={copyClass}>{project.summary}</p>
              </div>
              <p className={`${copyClass} max-w-[2.3rem] max-[1080px]:max-w-none`}>{project.impact}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section label="Services">
        <div className="grid max-w-[11rem] grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-[.24rem] max-[1080px]:grid-cols-1">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, ease }}>
            <h2 className="m-0 font-[var(--font-display)] text-[.58rem] leading-[.94] font-semibold tracking-[-.03em] text-balance">From visual concept to production-ready frontend.</h2>
          </motion.div>
          <div className="grid content-start gap-[.12rem]">
            {['Full-stack application design with a strong frontend layer.', 'Responsive React builds with attention to pacing, states, and polish.', 'Scalable implementation that supports real product growth after launch.'].map((item, index) => (
              <motion.p key={item} initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08 * index, ease }} className="m-0 border-t border-[rgba(255,255,255,0.08)] pt-[.12rem] text-[.16rem] leading-[1.7] text-[rgba(245,241,232,0.72)]">{item}</motion.p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" label="Contact">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.75, ease }} className="relative max-w-[11rem] pt-[.22rem]">
          <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { opacity: [0.22, 0.5, 0.22], scale: [1, 1.08, 1] }} transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute top-[-.2rem] right-0 h-[2rem] w-[2rem] blur-[.1rem]" style={{ background: 'radial-gradient(circle, rgba(255,196,124,.18), transparent 70%)' }} />
          <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.55, ease }} className="mb-[.12rem] text-[.13rem] uppercase tracking-[.24em] text-[var(--text-muted)]">Let&apos;s make something memorable</motion.p>
          <motion.h2 initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.06, ease }} className="m-0 font-[var(--font-display)] text-[.58rem] leading-[.94] font-semibold tracking-[-.03em] text-balance">
            If you want a full-stack web application that feels polished, usable, and production-ready, let&apos;s talk.
          </motion.h2>
          <motion.a href="mailto:galiciavigie0@gmail.com" whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03, boxShadow: '0 .18rem .46rem rgba(255,196,124,.28)' }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.14, ease }} className="mt-[.22rem] inline-flex min-h-[.5rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#f1e3c8_0%,#ffc47c_100%)] px-[.2rem] py-[.14rem] text-[.15rem] font-bold tracking-[.01em] text-[#0d1421] no-underline shadow-[0_.14rem_.4rem_rgba(255,196,124,0.18)]">
            galiciavigie0@gmail.com
          </motion.a>
        </motion.div>
      </Section>
    </motion.main>
  )
}

function Section({ children, id, label }: { children: ReactNode; id?: string; label: string }) {
  return <section id={id} className="grid grid-cols-[minmax(1rem,1.7rem)_minmax(0,1fr)] gap-[.24rem] px-[.22rem] py-[.64rem] max-[1080px]:grid-cols-1 max-[1080px]:gap-[.12rem] max-[720px]:px-[.14rem] max-[720px]:py-[.5rem]"><div className={labelClass}>{label}</div>{children}</section>
}

function CTA({ children, dark, href }: { children: ReactNode; dark?: boolean; href: string }) {
  const reduceMotion = !!useReducedMotion()
  const base = 'inline-flex min-h-[.5rem] items-center justify-center rounded-full px-[.2rem] py-[.14rem] text-[.15rem] font-bold tracking-[.01em] no-underline transition duration-200 max-[720px]:w-full'
  const tone = dark ? 'border border-[rgba(245,241,232,0.18)] bg-[rgba(255,255,255,0.04)] text-[var(--text-main)] backdrop-blur-[.12rem]' : 'bg-[linear-gradient(135deg,#f1e3c8_0%,#ffc47c_100%)] text-[#0d1421] shadow-[0_.14rem_.4rem_rgba(255,196,124,0.18)]'
  return <motion.a href={href} whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className={`${base} ${tone}`}>{children}</motion.a>
}

function Orb({ background, className, duration, movement }: { background: string; className: string; duration: number; movement: { x?: string[]; y?: string[]; scale?: number[] } }) {
  const reduceMotion = !!useReducedMotion()
  return <motion.div className={`absolute rounded-full opacity-[.82] blur-[.16rem] ${className}`} style={{ background }} animate={reduceMotion ? undefined : movement} transition={reduceMotion ? undefined : { duration, repeat: Infinity, ease: 'easeInOut' }} />
}

function GlassNote({ body, className, delay, title }: { body: string; className: string; delay: number; title: string }) {
  const reduceMotion = !!useReducedMotion()
  return <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease }} whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }} className={`absolute max-w-[2rem] rounded-[.18rem] border border-[rgba(255,255,255,0.12)] bg-[rgba(10,14,25,0.52)] px-[.14rem] py-[.12rem] shadow-[0_.2rem_.3rem_rgba(0,0,0,0.18)] backdrop-blur-[.12rem] max-[720px]:max-w-[1.7rem] ${className}`}><p className="mb-[.05rem] text-[.11rem] uppercase tracking-[.18em] text-[var(--text-muted)]">{title}</p><strong className="block text-[.14rem] leading-[1.5] font-semibold">{body}</strong></motion.div>
}

function LogoCard({ accent, className, icon, title }: { accent: string; className: string; icon: string; title: string }) {
  const reduceMotion = !!useReducedMotion()
  return <motion.div whileHover={reduceMotion ? undefined : { y: -6, rotateZ: 0, scale: 1.04 }} className={`absolute rounded-[.22rem] border border-[rgba(255,255,255,0.09)] bg-[rgba(12,17,29,0.82)] p-[.12rem] shadow-[0_.14rem_.36rem_rgba(0,0,0,0.26)] [transform-style:preserve-3d] ${className}`} style={{ boxShadow: `0 .16rem .36rem rgba(0,0,0,0.26), 0 0 .3rem ${accent}` }}><div className="absolute inset-[.05rem] rounded-[.18rem] opacity-[.9]" style={{ background: `linear-gradient(180deg, ${accent}, rgba(255,255,255,0))`, transform: 'translateZ(-1px)' }} /><img src={icon} alt={title} className="relative z-[1] h-full w-full object-contain drop-shadow-[0_.06rem_.16rem_rgba(0,0,0,.45)]" /></motion.div>
}

function LetterCard({ accent, className, glow, label, title }: { accent: string; className: string; glow: string; label: string; title: string }) {
  const reduceMotion = !!useReducedMotion()
  return <motion.div whileHover={reduceMotion ? undefined : { y: -6, rotateZ: 0, scale: 1.04 }} className={`absolute flex items-center justify-center rounded-[.22rem] border border-[rgba(255,255,255,0.08)] text-[.22rem] font-black tracking-[-.04em] text-white shadow-[0_.14rem_.36rem_rgba(0,0,0,0.26)] ${className}`} style={{ background: accent, boxShadow: `0 .16rem .36rem rgba(0,0,0,0.26), 0 0 .28rem ${glow}` }} aria-label={title}><span className="drop-shadow-[0_.04rem_.08rem_rgba(0,0,0,.24)]">{label}</span></motion.div>
}

function heroVariants(reduceMotion: boolean) {
  return { hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }
}

function itemVariants(reduceMotion: boolean, delay: number) {
  return { hidden: { opacity: 0, y: reduceMotion ? 0 : 22 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease } } }
}
