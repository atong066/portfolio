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
  { id: '02', name: 'LMS', type: 'Live product', summary: 'A learning management system centered on course flow, learner progress, and a cleaner training experience.', impact: 'Extends the project lineup with an education-focused application surface.', href: 'https://atong066.github.io/lms/' },
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

const services = [
  {
    id: '01',
    title: 'Frontend systems',
    detail: 'Full-stack application design with a strong frontend layer.',
  },
  {
    id: '02',
    title: 'Responsive delivery',
    detail: 'Responsive React builds with attention to pacing, states, and polish.',
  },
  {
    id: '03',
    title: 'Production scale',
    detail: 'Scalable implementation that supports real product growth after launch.',
  },
]

const heroHighlights = [
  { value: 'Admin UI', label: 'Dashboards and workflow surfaces' },
  { value: 'Motion', label: 'Framer-led interaction systems' },
  { value: 'Ship-ready', label: 'Built for real product delivery' },
]

const stack = ['React', 'JavaScript', 'Node.js', 'Python', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'API integration', 'Full-stack architecture']
const labelClass = 'text-[.12rem] uppercase tracking-[.24em] text-[rgba(245,241,232,0.45)] max-[720px]:text-[.24rem]'
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
      <motion.section ref={heroRef} id="top" style={{ opacity: heroOpacity }} className="relative grid min-h-screen grid-rows-[auto_1fr] overflow-clip px-[.22rem] pt-[.22rem] pb-[.3rem] isolate max-[1080px]:min-h-auto max-[1080px]:pb-[.42rem] max-[720px]:px-[.14rem] max-[720px]:pt-[.16rem] max-[720px]:pb-[.18rem]">
        <motion.div aria-hidden="true" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.18), transparent 18%), radial-gradient(circle at 80% 10%, rgba(255,184,107,.2), transparent 20%), radial-gradient(circle at 50% 80%, rgba(131,225,255,.12), transparent 22%)' }} animate={reduceMotion ? undefined : { x: ['-1%', '2%'], y: ['0%', '2%'], scale: [1, 1.05] }} transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} className="pointer-events-none absolute inset-0 opacity-[.18] blur-[.12rem]" />
        <motion.div aria-hidden="true" style={{ opacity: gridOpacity, backgroundImage: 'linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '.5rem .5rem', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,.72), transparent 90%)' }} className="pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[.6rem] hidden h-[3.8rem] max-[720px]:block" style={{ background: 'radial-gradient(circle at 20% 18%, rgba(111,197,255,0.12), transparent 28%), radial-gradient(circle at 72% 34%, rgba(255,196,124,0.16), transparent 32%)' }} />

        <motion.header initial={{ opacity: 0, y: reduceMotion ? 0 : -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="relative z-[2] flex items-center justify-between gap-[.15rem] max-[720px]:flex-col max-[720px]:items-start max-[720px]:gap-[.08rem]">
          <motion.a className="text-[.18rem] font-extrabold tracking-[.34em] text-inherit no-underline max-[720px]:w-full max-[720px]:text-[.38rem] max-[720px]:tracking-[.18em] max-[720px]:text-left" href="#top" whileHover={reduceMotion ? undefined : { y: -2 }}>VIRGILIO</motion.a>
          <nav className="flex gap-[.18rem] text-[.15rem] text-[rgba(245,241,232,0.74)] max-[720px]:w-full max-[720px]:justify-start max-[720px]:gap-[.14rem] max-[720px]:text-[.22rem] max-[720px]:leading-none">
            {['Work', 'Skills', 'About', 'Contact'].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={reduceMotion ? undefined : { y: -2 }} className="text-inherit no-underline transition-colors duration-200 hover:text-[var(--text-main)]">{item}</motion.a>
            ))}
          </nav>
        </motion.header>

        <motion.div style={{ y: heroY }} initial="hidden" animate="visible" variants={heroVariants(reduceMotion)} className="relative z-[1] max-w-[6.8rem] self-end pt-[1.05rem] pb-[.36rem] max-[1080px]:pt-[.72rem] max-[1080px]:pb-0 max-[720px]:max-w-full max-[720px]:pt-[.24rem] max-[720px]:text-left">
          <motion.p variants={itemVariants(reduceMotion, 0)} className="mb-[.12rem] text-[.15rem] uppercase tracking-[.24em] text-[var(--text-muted)] max-[720px]:mb-[.12rem] max-[720px]:text-[.15rem] max-[720px]:tracking-[.18em]">Full-stack web applications</motion.p>
          <motion.h1 variants={itemVariants(reduceMotion, 0.08)} className="m-0 max-w-[6.1rem] font-[var(--font-display)] text-[.82rem] leading-[.95] font-semibold tracking-[-.03em] text-balance max-[720px]:max-w-[4.5rem] max-[720px]:text-[.64rem] max-[720px]:leading-[.92]">
            I design and build interfaces with cinematic motion, crisp hierarchy, and a distinct frontend voice.
          </motion.h1>
          <motion.p variants={itemVariants(reduceMotion, 0.16)} className="mt-[.16rem] max-w-[4.8rem] text-[.17rem] leading-[1.7] text-[rgba(245,241,232,0.76)] max-[720px]:mt-[.14rem] max-[720px]:max-w-[4.05rem] max-[720px]:text-[.19rem] max-[720px]:leading-[1.54]">
            Full-stack web developer focused on modern application architecture, polished admin surfaces, and interactions that make complex workflows feel clear.
          </motion.p>
          <motion.div variants={itemVariants(reduceMotion, 0.2)} className="hidden max-[720px]:mt-[.14rem] max-[720px]:grid max-[720px]:grid-cols-[1fr_auto] max-[720px]:items-end max-[720px]:gap-[.12rem] max-[720px]:rounded-[.22rem] max-[720px]:border max-[720px]:border-[rgba(255,255,255,0.08)] max-[720px]:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] max-[720px]:px-[.16rem] max-[720px]:py-[.14rem]">
            <div>
              <p className="m-0 text-[.14rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.42)]">Current focus</p>
              <p className="mt-[.05rem] text-[.2rem] leading-[1.45] text-[rgba(245,241,232,0.84)]">Admin dashboards, workflow apps, and high-clarity product UI.</p>
            </div>
            <div className="flex items-center gap-[.06rem]">
              <span className="h-[.12rem] w-[.12rem] rounded-full bg-[#ffc47c] shadow-[0_0_.14rem_rgba(255,196,124,0.7)]" />
              <span className="text-[.14rem] uppercase tracking-[.16em] text-[rgba(245,241,232,0.54)]">Available</span>
            </div>
          </motion.div>
          <motion.div variants={itemVariants(reduceMotion, 0.24)} className="mt-[.24rem] flex flex-wrap gap-[.1rem] max-[720px]:mt-[.18rem] max-[720px]:grid max-[720px]:grid-cols-1 max-[720px]:gap-[.1rem]">
            <CTA href="#work" dark={false}>View selected work</CTA>
            <CTA href="mailto:galiciavigie0@gmail.com" dark>Start a project</CTA>
          </motion.div>
          <motion.div variants={itemVariants(reduceMotion, 0.32)} className="mt-[.26rem] flex flex-wrap gap-[.08rem] max-[720px]:mt-[.16rem] max-[720px]:justify-start max-[720px]:gap-[.08rem]">
            {['React', 'Node.js', 'Python', 'JavaScript', 'Vite', 'Tailwind CSS'].map((skill) => <span key={skill} className="inline-flex items-center rounded-full border border-[rgba(245,241,232,0.12)] bg-[rgba(255,255,255,0.04)] px-[.14rem] py-[.08rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.72)] backdrop-blur-[.08rem] max-[720px]:px-[.2rem] max-[720px]:py-[.12rem] max-[720px]:text-[.2rem] max-[720px]:tracking-[.12em]">{skill}</span>)}
          </motion.div>
          <motion.div variants={itemVariants(reduceMotion, 0.38)} className="mt-[.28rem] hidden grid-cols-3 gap-[.12rem] rounded-[.22rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-[.16rem] shadow-[0_.14rem_.3rem_rgba(0,0,0,0.16)] min-[721px]:grid">
            {heroHighlights.map((item) => (
              <div key={item.value} className="border-l border-[rgba(255,255,255,0.08)] pl-[.12rem] first:border-l-0 first:pl-0">
                <p className="m-0 text-[.24rem] font-semibold tracking-[-.03em] text-[rgba(245,241,232,0.96)]">{item.value}</p>
                <p className="mt-[.04rem] text-[.13rem] uppercase tracking-[.16em] text-[rgba(245,241,232,0.48)]">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div aria-hidden="true" style={{ y: stageY }} className="absolute inset-0 max-[1080px]:relative max-[1080px]:mt-[.24rem] max-[1080px]:min-h-[3.8rem] max-[720px]:mt-[.16rem] max-[720px]:min-h-[.72rem]">
          <div className="pointer-events-none absolute right-[4%] top-[10%] hidden h-[5.2rem] w-[5.6rem] rounded-[.44rem] border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_28%_30%,rgba(111,197,255,0.12),transparent_28%),radial-gradient(circle_at_70%_38%,rgba(255,196,124,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] shadow-[0_.26rem_.8rem_rgba(0,0,0,0.22)] backdrop-blur-[.12rem] min-[1081px]:block" />
          <div className="pointer-events-none absolute right-[31%] top-[56%] hidden h-[1.5rem] w-[.02rem] bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.2),rgba(255,255,255,0))] min-[1081px]:block" />
          <div className="pointer-events-none absolute right-[33%] top-[59%] hidden min-[1081px]:block">
            <p className="text-[.12rem] uppercase tracking-[.22em] text-[rgba(245,241,232,0.38)]">Visual system</p>
            <p className="mt-[.04rem] max-w-[1.3rem] text-[.14rem] leading-[1.5] text-[rgba(245,241,232,0.68)]">Depth, motion, and type built as one composition.</p>
          </div>
          <motion.div initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, rotateX: reduceMotion ? 0 : 14 }} animate={{ opacity: 1, scale: 1, rotateX: 0 }} transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.25, ease }} className="absolute right-[8%] top-[18%] h-[2.8rem] w-[3.5rem] [perspective:12rem] max-[720px]:left-1/2 max-[720px]:right-auto max-[720px]:top-0 max-[720px]:h-[1.16rem] max-[720px]:w-[1.82rem] max-[720px]:-translate-x-1/2">
            <motion.div animate={reduceMotion ? undefined : { rotateY: [-9, 9, -9], rotateX: [8, -4, 8] }} transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="relative h-full w-full [transform-style:preserve-3d]">
              <LogoCard icon={reactLogo} title="React" accent="rgba(97,218,251,0.34)" className="left-[.18rem] top-[.14rem] h-[.9rem] w-[.9rem] rotate-[-12deg] max-[720px]:left-[.18rem] max-[720px]:top-[.04rem] max-[720px]:h-[.46rem] max-[720px]:w-[.46rem]" />
              <LogoCard icon={viteLogo} title="Vite" accent="rgba(176,113,255,0.32)" className="right-[.12rem] top-[.02rem] h-[.82rem] w-[.82rem] rotate-[10deg] max-[720px]:right-[.18rem] max-[720px]:top-0 max-[720px]:h-[.42rem] max-[720px]:w-[.42rem]" />
              <LetterCard label="TS" title="TypeScript" accent="linear-gradient(135deg, rgba(41,116,227,.95), rgba(18,73,160,.86))" glow="rgba(41,116,227,.28)" className="left-[.44rem] bottom-[.18rem] h-[.88rem] w-[.88rem] rotate-[8deg] max-[720px]:left-[.34rem] max-[720px]:bottom-[.06rem] max-[720px]:h-[.44rem] max-[720px]:w-[.44rem]" />
              <LetterCard label="TW" title="Tailwind CSS" accent="linear-gradient(135deg, rgba(59,201,219,.96), rgba(20,115,148,.88))" glow="rgba(59,201,219,.28)" className="right-[.24rem] bottom-[.12rem] h-[.96rem] w-[.96rem] rotate-[-8deg] max-[720px]:right-[.32rem] max-[720px]:bottom-[.04rem] max-[720px]:h-[.46rem] max-[720px]:w-[.46rem]" />
            </motion.div>
          </motion.div>

          <Orb className="right-[9%] top-[20%] h-[3rem] w-[3rem] max-[720px]:left-1/2 max-[720px]:right-auto max-[720px]:top-[.02rem] max-[720px]:h-[.72rem] max-[720px]:w-[.72rem] max-[720px]:-translate-x-[.28rem]" duration={9} movement={{ x: ['0rem', '-0.14rem', '0rem'], y: ['0rem', '0.12rem', '0rem'] }} background="radial-gradient(circle at 30% 30%, rgba(255,220,166,.95), rgba(255,150,109,.2) 60%, transparent 72%)" />
          <Orb className="right-[16%] top-[32%] h-[2.1rem] w-[2.1rem] max-[720px]:left-1/2 max-[720px]:right-auto max-[720px]:top-[.24rem] max-[720px]:h-[.48rem] max-[720px]:w-[.48rem] max-[720px]:translate-x-[.12rem]" duration={11} movement={{ x: ['0rem', '0.1rem', '0rem'], y: ['0rem', '-0.12rem', '0rem'] }} background="radial-gradient(circle at 50% 50%, rgba(130,220,255,.55), rgba(88,113,255,.1) 65%, transparent 74%)" />
          <Orb className="right-[24%] bottom-[18%] h-[1.45rem] w-[1.45rem] max-[720px]:left-1/2 max-[720px]:right-auto max-[720px]:bottom-[.06rem] max-[720px]:h-[.34rem] max-[720px]:w-[.34rem] max-[720px]:translate-x-0" duration={10} movement={{ x: ['0rem', '-0.06rem', '0rem'], y: ['0rem', '-0.08rem', '0rem'], scale: [1, 1.06, 1] }} background="radial-gradient(circle at 50% 50%, rgba(255,235,205,.3), rgba(255,235,205,.04) 70%, transparent 75%)" />

          <div className="absolute right-[9%] top-[20%] h-[3.4rem] w-[3.4rem] max-[720px]:left-1/2 max-[720px]:right-auto max-[720px]:top-0 max-[720px]:h-[.9rem] max-[720px]:w-[.9rem] max-[720px]:-translate-x-1/2">
            {[0, 1, 2].map((ring) => <motion.span key={ring} className="absolute rounded-full border border-[rgba(245,241,232,0.13)]" style={{ inset: ring === 0 ? '0' : ring === 1 ? '12%' : '24%' }} animate={reduceMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.55, 0.2, 0.55] }} transition={reduceMotion ? undefined : { duration: 7, delay: ring, repeat: Infinity, ease: 'easeInOut' }} />)}
          </div>

          <GlassNote title="Now building" body="Full-stack apps, admin systems, and modern dashboard UI" delay={0.45} className="right-[11%] bottom-[12%] max-[720px]:hidden" />
          <GlassNote title="Availability" body="Open for freelance and creative collaborations" delay={0.58} className="top-[20%] right-[34%] max-[720px]:hidden" />
        </motion.div>
      </motion.section>

      <section aria-label="Capabilities" className="relative overflow-hidden border-y border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] max-[720px]:hidden">
        <motion.div animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }} transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: 'linear' }} className="flex w-max gap-[.24rem] py-[.12rem]">
          {stack.concat(stack).map((item, index) => <span key={`${item}-${index}`} className="whitespace-nowrap text-[.12rem] uppercase tracking-[.24em] text-[rgba(245,241,232,0.7)]">{item}</span>)}
        </motion.div>
      </section>

      <Section id="skills" label="Skills">
        <div className="grid max-w-[11rem] grid-cols-[minmax(0,1.08fr)_minmax(0,.92fr)] gap-[.24rem] max-[1080px]:grid-cols-1 max-[720px]:gap-[.18rem]">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="rounded-[.22rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-[.2rem] shadow-[0_.1rem_.24rem_rgba(0,0,0,0.14)] max-[720px]:rounded-[.22rem] max-[720px]:border-[rgba(255,214,169,0.14)] max-[720px]:bg-[radial-gradient(circle_at_top_left,rgba(255,196,124,0.09),transparent_36%),linear-gradient(180deg,rgba(255,232,205,0.1),rgba(255,255,255,0.03))] max-[720px]:p-[.18rem] max-[720px]:shadow-[0_.18rem_.4rem_rgba(0,0,0,0.18)]">
            <p className="mb-[.08rem] text-[.12rem] uppercase tracking-[.2em] text-[rgba(245,241,232,0.56)] max-[720px]:text-[.18rem]">Core stack</p>
            <h2 className="m-0 max-w-[4.8rem] font-[var(--font-display)] text-[.54rem] leading-[.94] font-semibold tracking-[-.03em] max-[720px]:max-w-[3.5rem] max-[720px]:text-[.62rem] max-[720px]:leading-[1.02]">Tools I use to make interfaces feel premium.</h2>
            <div className="mt-[.22rem] grid grid-cols-2 gap-[.1rem] max-[720px]:mt-[.26rem] max-[720px]:grid-cols-1 max-[720px]:gap-[.12rem]">
              {['React + JavaScript', 'Node.js services', 'Python workflows', 'Vite build tooling', 'Framer Motion', 'Tailwind CSS', 'API integration', 'Responsive systems'].map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.05 * index, ease }} className="rounded-[.16rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(10,14,25,0.46)] px-[.14rem] py-[.14rem] text-[.15rem] text-[rgba(245,241,232,0.82)] max-[720px]:rounded-[.18rem] max-[720px]:border-[rgba(255,255,255,0.1)] max-[720px]:bg-[radial-gradient(circle_at_top_right,rgba(111,197,255,0.08),transparent_34%),linear-gradient(180deg,rgba(15,20,34,0.84),rgba(10,14,25,0.96))] max-[720px]:px-[.22rem] max-[720px]:py-[.22rem] max-[720px]:text-[.23rem]">{item}</motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-[.1rem] max-[720px]:gap-[.14rem]">
            {skills.map((skill, index) => (
              <motion.article key={skill.title} initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08 * index, ease }} whileHover={reduceMotion ? undefined : { x: 4 }} className="border-t border-[rgba(255,255,255,0.09)] pt-[.12rem] max-[720px]:rounded-[.22rem] max-[720px]:border max-[720px]:border-[rgba(255,255,255,0.08)] max-[720px]:bg-[radial-gradient(circle_at_top_right,rgba(111,197,255,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] max-[720px]:px-[.18rem] max-[720px]:py-[.18rem] max-[720px]:shadow-[0_.12rem_.3rem_rgba(0,0,0,0.16)]">
                <p className="mb-[.05rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.5)] max-[720px]:text-[.2rem]">{skill.label}</p>
                <h3 className="m-0 text-[.22rem] font-semibold leading-[1.2] text-[rgba(245,241,232,0.96)] max-[720px]:text-[.34rem]">{skill.title}</h3>
                <p className="mt-[.06rem] text-[.15rem] leading-[1.7] text-[rgba(245,241,232,0.68)] max-[720px]:text-[.24rem] max-[720px]:leading-[1.6]">{skill.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about" label="Approach">
        <div className="max-w-[11rem]">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="relative overflow-hidden rounded-[.28rem] border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_top_left,rgba(255,196,124,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] px-[.26rem] py-[.24rem] shadow-[0_.16rem_.38rem_rgba(0,0,0,0.14)] max-[720px]:border-[rgba(255,221,185,0.12)] max-[720px]:bg-[radial-gradient(circle_at_top_left,rgba(255,196,124,0.12),transparent_36%),linear-gradient(180deg,rgba(255,234,210,0.08),rgba(255,255,255,0.02))] max-[720px]:px-[.18rem] max-[720px]:py-[.2rem] max-[720px]:shadow-[0_.16rem_.38rem_rgba(0,0,0,0.16)]">
            <div className="pointer-events-none absolute left-[.18rem] top-[.24rem] hidden h-[.66rem] w-[.02rem] bg-[linear-gradient(180deg,rgba(255,196,124,.9),rgba(255,196,124,0))] min-[721px]:block" />
            <div className="pointer-events-none absolute right-[.22rem] top-[.18rem] hidden h-[1.1rem] w-[1.1rem] rounded-full blur-[.22rem] min-[721px]:block" style={{ background: 'radial-gradient(circle, rgba(111,197,255,0.12), transparent 72%)' }} />
            <motion.div aria-hidden="true" className="pointer-events-none absolute left-[-.06rem] top-[-.08rem] hidden h-[.8rem] w-[.8rem] rounded-full blur-[.18rem] max-[720px]:block" style={{ background: 'radial-gradient(circle, rgba(255,196,124,0.2), transparent 72%)' }} />
            <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-[.18rem] top-0 hidden h-[.02rem] max-[720px]:block" style={{ background: 'linear-gradient(90deg, rgba(255,196,124,0), rgba(255,196,124,.82), rgba(255,196,124,0))' }} />
            <p className="mb-[.1rem] text-[.12rem] uppercase tracking-[.22em] text-[rgba(245,241,232,0.42)] max-[720px]:mb-[.08rem] max-[720px]:text-[.14rem] max-[720px]:tracking-[.2em]">Design stance</p>
            <motion.p className="m-0 max-w-[6.8rem] pl-[.18rem] text-[.32rem] leading-[1.38] max-[720px]:max-w-[3.45rem] max-[720px]:pl-0 max-[720px]:text-[.26rem] max-[720px]:leading-[1.4]">
              I like bold pages that still know how to behave. That means strong typography, very few colors, meaningful movement, and enough systems thinking underneath to keep the work maintainable.
            </motion.p>
          </motion.div>
          <div className="mt-[.18rem] grid gap-[.1rem] max-[720px]:mt-[.16rem] max-[720px]:gap-[.1rem]">
            {principles.map((principle, index) => (
              <motion.div key={principle} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08 * index, ease }} className="grid grid-cols-[.52rem_minmax(0,1fr)] items-start gap-[.16rem] rounded-[.18rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.028),rgba(255,255,255,0.01))] px-[.18rem] py-[.16rem] shadow-[0_.1rem_.24rem_rgba(0,0,0,0.12)] max-[720px]:grid-cols-[.32rem_minmax(0,1fr)] max-[720px]:gap-[.12rem] max-[720px]:bg-[radial-gradient(circle_at_left_center,rgba(255,196,124,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] max-[720px]:px-[.16rem] max-[720px]:py-[.15rem] max-[720px]:shadow-[0_.1rem_.24rem_rgba(0,0,0,0.14)]">
                <span className="flex h-[.34rem] w-[.34rem] items-center justify-center rounded-full border border-[rgba(255,196,124,0.2)] bg-[rgba(255,196,124,0.08)] text-[.14rem] font-semibold text-[rgba(255,214,169,0.88)] max-[720px]:h-[.28rem] max-[720px]:w-[.28rem] max-[720px]:text-[.13rem]">
                  {index + 1}
                </span>
                <p className="m-0 pt-[.02rem] text-[.2rem] leading-[1.55] text-[rgba(245,241,232,0.8)] max-[720px]:pt-0 max-[720px]:text-[.21rem] max-[720px]:leading-[1.56]">{principle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="work" label="Selected work">
        <div className="grid max-w-[11rem] gap-[.14rem] max-[720px]:gap-[.12rem]">
          {projects.map((project, index) => (
            <motion.article key={project.name} initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.09 * index, ease }} whileHover={reduceMotion ? undefined : { y: -4 }} className={`group relative grid grid-cols-[1.1rem_minmax(0,1.45fr)_minmax(2.2rem,1fr)] items-start gap-[.22rem] overflow-hidden rounded-[.28rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))] px-[.2rem] py-[.24rem] shadow-[0_.14rem_.3rem_rgba(0,0,0,0.12)] max-[1080px]:grid-cols-1 max-[720px]:gap-[.14rem] max-[720px]:rounded-[.24rem] max-[720px]:border-[rgba(255,255,255,0.08)] max-[720px]:bg-[radial-gradient(circle_at_top_right,rgba(111,197,255,0.07),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] max-[720px]:px-[.18rem] max-[720px]:py-[.18rem] max-[720px]:shadow-[0_.12rem_.3rem_rgba(0,0,0,0.16)]`}>
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[.03rem] bg-[linear-gradient(180deg,rgba(255,196,124,.85),rgba(111,197,255,.25),rgba(255,196,124,0))] opacity-70" />
              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[2.8rem] bg-[radial-gradient(circle_at_center,rgba(255,196,124,0.1),transparent_72%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 min-[721px]:block" />
              <div className="grid gap-[.05rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.44)] max-[720px]:gap-[.04rem] max-[720px]:text-[.16rem]"><span>{project.id}</span><span>{project.type}</span></div>
              <div>
                <h2 className="mb-[.08rem] font-[var(--font-display)] text-[.46rem] leading-[.98] font-semibold tracking-[-.03em] max-[720px]:text-[.36rem]">
                  {project.href ? <motion.a href={project.href} target="_blank" rel="noreferrer" whileHover={reduceMotion ? undefined : { x: 4 }} className="text-inherit no-underline">{project.name}</motion.a> : project.name}
                </h2>
                <p className={`${copyClass} max-w-[5.2rem] text-[.18rem] leading-[1.65] max-[720px]:text-[.16rem] max-[720px]:leading-[1.6]`}>{project.summary}</p>
                {project.href ? (
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={reduceMotion ? undefined : { x: 4 }}
                    className="mt-[.14rem] inline-flex items-center gap-[.08rem] text-[.14rem] font-semibold uppercase tracking-[.16em] text-[rgba(255,196,124,0.9)] no-underline transition-colors duration-200 hover:text-[rgba(255,221,185,1)] max-[720px]:mt-[.12rem] max-[720px]:text-[.16rem]"
                  >
                    View live project
                    <span aria-hidden="true" className="text-[.18rem] leading-none">↗</span>
                  </motion.a>
                ) : null}
              </div>
              <div className="relative rounded-[.2rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.018)] px-[.16rem] py-[.16rem] min-[721px]:min-h-[1.7rem]">
                <p className="mb-[.06rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.4)]">Project note</p>
                <p className={`${copyClass} max-w-[2.35rem] text-[.17rem] leading-[1.62] max-[1080px]:max-w-none max-[720px]:text-[.16rem] max-[720px]:leading-[1.6]`}>{project.impact}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section label="Services">
        <div className="grid max-w-[11rem] grid-cols-[minmax(0,1.18fr)_minmax(0,.82fr)] gap-[.22rem] min-[721px]:-mt-[.12rem] max-[1080px]:grid-cols-1">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.7, ease }} className="relative overflow-hidden rounded-[.32rem] border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_top_left,rgba(255,196,124,0.09),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.012))] px-[.24rem] py-[.24rem] shadow-[0_.16rem_.38rem_rgba(0,0,0,0.14)] max-[720px]:rounded-[.26rem] max-[720px]:border-[rgba(255,221,185,0.12)] max-[720px]:bg-[radial-gradient(circle_at_top_left,rgba(255,196,124,0.12),transparent_38%),linear-gradient(180deg,rgba(255,236,212,0.07),rgba(255,255,255,0.02))] max-[720px]:px-[.2rem] max-[720px]:py-[.22rem] max-[720px]:shadow-[0_.16rem_.38rem_rgba(0,0,0,0.18)]">
            <div className="pointer-events-none absolute left-[.2rem] top-[.24rem] hidden h-[.8rem] w-[.02rem] bg-[linear-gradient(180deg,rgba(255,196,124,.85),rgba(255,196,124,0))] min-[721px]:block" />
            <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-[.24rem] top-0 h-[.02rem] bg-[linear-gradient(90deg,rgba(255,196,124,0),rgba(255,196,124,.9),rgba(255,196,124,0))] max-[1080px]:hidden max-[720px]:block" />
            <p className="mb-[.12rem] pl-[.16rem] text-[.12rem] uppercase tracking-[.22em] text-[rgba(245,241,232,0.46)] max-[720px]:mb-[.08rem] max-[720px]:pl-0 max-[720px]:text-[.16rem] max-[720px]:tracking-[.18em]">Build, refine, ship</p>
            <h2 className="m-0 max-w-[5.6rem] pl-[.16rem] font-[var(--font-display)] text-[.72rem] leading-[.9] font-semibold tracking-[-.04em] text-balance max-[720px]:max-w-[3.3rem] max-[720px]:pl-0 max-[720px]:text-[.5rem] max-[720px]:leading-[.92]">From visual concept to production-ready frontend.</h2>
            <p className="mt-[.14rem] max-w-[4.4rem] pl-[.16rem] text-[.18rem] leading-[1.6] text-[rgba(245,241,232,0.7)] max-[720px]:mt-[.12rem] max-[720px]:max-w-[3.5rem] max-[720px]:pl-0 max-[720px]:text-[.21rem] max-[720px]:leading-[1.55]">
              I turn interface ideas into web applications that feel intentional on the surface and dependable underneath.
            </p>
          </motion.div>
          <div className="grid content-start gap-[.1rem]">
            {services.map((item, index) => (
              <motion.article key={item.id} initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.08 * index, ease }} className="grid grid-cols-[.6rem_minmax(0,1fr)] items-start gap-[.16rem] rounded-[.22rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.026),rgba(255,255,255,0.01))] px-[.18rem] py-[.18rem] shadow-[0_.12rem_.28rem_rgba(0,0,0,0.12)] max-[720px]:grid-cols-[.52rem_minmax(0,1fr)] max-[720px]:gap-[.12rem] max-[720px]:rounded-[.2rem] max-[720px]:bg-[radial-gradient(circle_at_top_right,rgba(111,197,255,0.06),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.028),rgba(255,255,255,0.012))] max-[720px]:px-[.16rem] max-[720px]:py-[.16rem] max-[720px]:shadow-[0_.12rem_.28rem_rgba(0,0,0,0.14)]">
                <div className="flex h-[.48rem] w-[.48rem] items-center justify-center rounded-full border border-[rgba(255,196,124,0.22)] bg-[rgba(255,196,124,0.08)] text-[.16rem] font-semibold tracking-[.08em] text-[rgba(255,214,169,0.88)] max-[720px]:h-[.42rem] max-[720px]:w-[.42rem]">
                  {item.id}
                </div>
                <div>
                  <p className="mb-[.05rem] text-[.12rem] uppercase tracking-[.18em] text-[rgba(245,241,232,0.42)] max-[720px]:text-[.16rem]">
                    {item.title}
                  </p>
                  <p className="m-0 text-[.22rem] leading-[1.5] text-[rgba(245,241,232,0.82)] max-[720px]:text-[.22rem] max-[720px]:leading-[1.5]">
                    {item.detail}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" label="Contact">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.75, ease }} className="relative max-w-[11rem] overflow-hidden rounded-[.34rem] border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_78%_28%,rgba(255,196,124,0.12),transparent_24%),radial-gradient(circle_at_62%_78%,rgba(111,197,255,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-[.28rem] py-[.28rem] shadow-[0_.18rem_.44rem_rgba(0,0,0,0.16)] max-[720px]:rounded-[.28rem] max-[720px]:border-[rgba(255,221,185,0.12)] max-[720px]:bg-[radial-gradient(circle_at_top_left,rgba(255,196,124,0.12),transparent_34%),linear-gradient(180deg,rgba(255,236,212,0.06),rgba(255,255,255,0.01))] max-[720px]:px-[.18rem] max-[720px]:py-[.2rem] max-[720px]:shadow-[0_.18rem_.42rem_rgba(0,0,0,0.16)]">
          <div className="pointer-events-none absolute left-[.16rem] top-[.3rem] hidden h-[.92rem] w-[.02rem] bg-[linear-gradient(180deg,rgba(255,196,124,.88),rgba(255,196,124,0))] min-[721px]:block" />
          <motion.div aria-hidden="true" className="pointer-events-none absolute left-[.18rem] top-[.18rem] h-[1rem] w-[1rem] rounded-full blur-[.18rem] max-[720px]:bg-[radial-gradient(circle,rgba(255,196,124,0.22),transparent_72%)]" />
          <motion.div aria-hidden="true" className="pointer-events-none absolute right-[-.12rem] bottom-[-.08rem] hidden h-[1.18rem] w-[1.18rem] rounded-full blur-[.22rem] max-[720px]:block" style={{ background: 'radial-gradient(circle, rgba(120,205,255,0.16), transparent 72%)' }} />
          <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-[.18rem] top-0 hidden h-[.02rem] max-[720px]:block" style={{ background: 'linear-gradient(90deg, rgba(255,196,124,0), rgba(255,196,124,.85), rgba(255,196,124,0))' }} />
          <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { opacity: [0.22, 0.5, 0.22], scale: [1, 1.08, 1] }} transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute top-[-.2rem] right-0 h-[2rem] w-[2rem] blur-[.1rem]" style={{ background: 'radial-gradient(circle, rgba(255,196,124,.18), transparent 70%)' }} />
          <div className="grid items-end gap-[.24rem] min-[721px]:grid-cols-[minmax(0,1.2fr)_minmax(2.2rem,.7fr)]">
            <div className="pt-[.05rem] min-[721px]:pl-[.04rem]">
              <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.55, ease }} className="mb-[.12rem] text-[.13rem] uppercase tracking-[.24em] text-[var(--text-muted)] max-[720px]:mb-[.1rem] max-[720px]:text-[.14rem]">Let&apos;s make something memorable</motion.p>
              <motion.h2 initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.06, ease }} className="m-0 max-w-[7.6rem] font-[var(--font-display)] text-[.68rem] leading-[.92] font-semibold tracking-[-.04em] text-balance max-[720px]:max-w-[3.8rem] max-[720px]:text-[.56rem] max-[720px]:leading-[.92]">
                If you want a full-stack web application that feels polished, usable, and production-ready, let&apos;s talk.
              </motion.h2>
            </div>
            <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.12, ease }} className="hidden rounded-[.24rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.018)] p-[.18rem] min-[721px]:block">
              <p className="m-0 text-[.12rem] uppercase tracking-[.2em] text-[rgba(245,241,232,0.42)]">What I build</p>
              <p className="mt-[.08rem] text-[.2rem] leading-[1.5] text-[rgba(245,241,232,0.82)]">Product UI, dashboards, admin surfaces, and frontend systems built to ship cleanly.</p>
            </motion.div>
          </div>
          <motion.p initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.1, ease }} className="hidden max-[720px]:mt-[.14rem] max-[720px]:block max-[720px]:max-w-[3.5rem] max-[720px]:text-[.23rem] max-[720px]:leading-[1.55] max-[720px]:text-[rgba(245,241,232,0.74)]">
            Product UI, dashboards, admin surfaces, and frontend systems built to ship cleanly.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={once} transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.14, ease }} className="mt-[.2rem] flex items-center justify-between gap-[.16rem] rounded-[.24rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.01))] px-[.18rem] py-[.18rem] max-[720px]:mt-[.2rem] max-[720px]:grid max-[720px]:gap-[.12rem] max-[720px]:rounded-[.2rem] max-[720px]:bg-[radial-gradient(circle_at_top_right,rgba(111,197,255,0.06),transparent_34%),rgba(10,14,25,0.36)] max-[720px]:px-[.14rem] max-[720px]:py-[.14rem]">
            <div>
              <p className="m-0 text-[.12rem] uppercase tracking-[.2em] text-[rgba(245,241,232,0.42)] max-[720px]:text-[.14rem] max-[720px]:tracking-[.18em]">Email</p>
              <p className="mt-[.05rem] text-[.2rem] font-medium text-[rgba(245,241,232,0.8)] max-[720px]:text-[.18rem]">Available for new work</p>
            </div>
            <motion.a href="mailto:galiciavigie0@gmail.com" whileHover={reduceMotion ? undefined : { y: -4, scale: 1.03, boxShadow: '0 .18rem .46rem rgba(255,196,124,.28)' }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} className="inline-flex min-h-[.56rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#f1e3c8_0%,#ffc47c_100%)] px-[.24rem] py-[.16rem] text-[.18rem] font-bold tracking-[.01em] text-[#0d1421] no-underline shadow-[0_.14rem_.4rem_rgba(255,196,124,0.18)] max-[720px]:w-full max-[720px]:px-[.16rem] max-[720px]:py-[.16rem] max-[720px]:text-[.16rem] max-[720px]:leading-[1.2] max-[720px]:break-all">
              galiciavigie0@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
      </Section>
    </motion.main>
  )
}

function Section({ children, id, label }: { children: ReactNode; id?: string; label: string }) {
  return <section id={id} className="grid grid-cols-[minmax(1rem,1.7rem)_minmax(0,1fr)] gap-[.24rem] px-[.22rem] py-[.52rem] max-[1080px]:grid-cols-1 max-[1080px]:gap-[.12rem] max-[720px]:gap-[.06rem] max-[720px]:px-[.14rem] max-[720px]:pt-[.18rem] max-[720px]:pb-[.3rem]"><div className={labelClass}>{label}</div>{children}</section>
}

function CTA({ children, dark, href }: { children: ReactNode; dark?: boolean; href: string }) {
  const reduceMotion = !!useReducedMotion()
  const base = 'inline-flex min-h-[.5rem] items-center justify-center rounded-full px-[.2rem] py-[.14rem] text-[.15rem] font-bold tracking-[.01em] no-underline transition duration-200 max-[720px]:w-full max-[720px]:text-[.24rem]'
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
