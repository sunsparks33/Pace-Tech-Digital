import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check, ChevronDown, Cloud, Code2, Globe2, Menu, ShieldCheck, Sparkles, Sun, Moon, X } from 'lucide-react'
import './styles.css'

const copy = {
  fr: {
    nav: ['Expertises', 'Méthode', 'Offres', 'Contact'],
    cta: 'Parlons de votre projet',
    eyebrow: 'CASABLANCA · MAROC',
    heroTitle: <>L’ingénierie digitale<br />qui donne du <i>rythme</i><br />à votre croissance.</>,
    heroText: 'Nous concevons des produits web, des plateformes cloud et des systèmes sécurisés pour les entreprises qui avancent vite.',
    seeWork: 'Découvrir nos expertises',
    statOne: 'projets livrés', statTwo: 'disponibilité cible',
    servicesTitle: <>Une expertise pensée<br />pour les enjeux <i>réels.</i></>,
    servicesText: 'Du cadrage au déploiement, nos équipes transforment vos besoins opérationnels en outils fiables, utiles et évolutifs.',
    services: [
      ['01', 'Produits web & SaaS', 'Applications métier, portails clients et plateformes e-commerce conçus pour évoluer avec votre activité.', 'Découvrir le pôle web'],
      ['02', 'Cloud & cybersécurité', 'Infrastructure résiliente, sauvegarde, contrôle des accès et accompagnement vers une conformité maîtrisée.', 'Sécuriser mon infrastructure'],
      ['03', 'Digitalisation des processus', 'Automatisez les flux qui ralentissent vos équipes et centralisez vos données dans un environnement clair.', 'Digitaliser mes opérations']
    ],
    methodEyebrow: 'NOTRE APPROCHE',
    methodTitle: <>Du premier échange<br />au produit qui <i>compte.</i></>,
    method: [['01', 'Comprendre', 'Nous analysons vos usages, vos contraintes et les résultats attendus.'], ['02', 'Concevoir', 'Une feuille de route lisible, des interfaces utiles et une architecture durable.'], ['03', 'Construire', 'Des itérations courtes, des points réguliers et une qualité contrôlée.'], ['04', 'Faire évoluer', 'Nous restons présents après la mise en ligne pour améliorer ce qui compte.']],
    offerEyebrow: 'OFFRES DE DÉPART', offerTitle: <>Des formats clairs,<br />un impact <i>mesurable.</i></>, offerText: 'Chaque projet commence par une conversation. Ces repères vous aident à imaginer le bon périmètre.',
    plans: [
      ['Essentiel', 'Site vitrine premium', 'à partir de', '8 900', ['Design sur mesure', 'Site responsive performant', 'SEO technique de base', 'Formation à la gestion']],
      ['Croissance', 'Plateforme métier', 'à partir de', '24 900', ['Cadrage produit complet', 'Interface et espace client', 'Back-office sécurisé', 'Accompagnement au lancement']],
      ['Sur mesure', 'Transformation digitale', 'sur étude', '', ['Audit de vos processus', 'Architecture cloud adaptée', 'Intégrations métier', 'Support et évolution continue']]
    ],
    tax: 'MAD HT', choose: 'Choisir cette offre', contactTitle: <>Un projet en tête ?<br /><i>Faisons-le avancer.</i></>, contactText: 'Parlez-nous de votre ambition. Nous vous répondons avec une première lecture concrète de votre besoin.', email: 'bonjour@pacetechdigital.ma', location: 'Sidi Maârouf, Casablanca', footer: 'PACE TECH DIGITAL SARL · Ingénierie numérique'
  },
  en: {
    nav: ['Expertise', 'Method', 'Offers', 'Contact'], cta: 'Let’s talk about your project', eyebrow: 'CASABLANCA · MOROCCO',
    heroTitle: <>Digital engineering<br />that gives your growth<br /><i>momentum.</i></>, heroText: 'We design web products, cloud platforms and secure systems for businesses that move fast.', seeWork: 'Explore our expertise', statOne: 'projects delivered', statTwo: 'target availability',
    servicesTitle: <>Expertise built for<br /><i>real-world</i> challenges.</>, servicesText: 'From discovery to deployment, our teams turn your operational needs into reliable, useful and scalable tools.',
    services: [['01', 'Web products & SaaS', 'Business apps, customer portals and e-commerce platforms designed to grow with your activity.', 'Explore web'], ['02', 'Cloud & cybersecurity', 'Resilient infrastructure, backups, access control and practical compliance support.', 'Secure my infrastructure'], ['03', 'Process digitalisation', 'Automate the workflows that slow your teams down and centralise data in a clear environment.', 'Digitise operations']],
    methodEyebrow: 'OUR APPROACH', methodTitle: <>From the first conversation<br />to a product that <i>matters.</i></>, method: [['01', 'Understand', 'We explore your use cases, constraints and desired outcomes.'], ['02', 'Design', 'A clear roadmap, useful interfaces and durable architecture.'], ['03', 'Build', 'Short iterations, regular checkpoints and controlled quality.'], ['04', 'Evolve', 'We stay involved after launch to improve what matters.']],
    offerEyebrow: 'STARTER OFFERS', offerTitle: <>Clear formats,<br /><i>measurable</i> impact.</>, offerText: 'Every project starts with a conversation. These benchmarks help define the right scope.', plans: [['Essential', 'Premium showcase website', 'from', '8,900', ['Custom design', 'Fast responsive website', 'Basic technical SEO', 'Content management training']], ['Growth', 'Business platform', 'from', '24,900', ['Complete product discovery', 'Customer interface and portal', 'Secure admin panel', 'Launch support']], ['Tailored', 'Digital transformation', 'on request', '', ['Process audit', 'Fitted cloud architecture', 'Business integrations', 'Continuous support and evolution']]], tax: 'MAD excl. tax', choose: 'Choose this offer', contactTitle: <>A project in mind?<br /><i>Let’s move it forward.</i></>, contactText: 'Tell us about your ambition. We will respond with a practical first reading of your need.', email: 'hello@pacetechdigital.ma', location: 'Sidi Maârouf, Casablanca', footer: 'PACE TECH DIGITAL SARL · Digital engineering'
  },
  ar: {
    nav: ['خبراتنا', 'منهجيتنا', 'العروض', 'تواصل'], cta: 'لنناقش مشروعك', eyebrow: 'الدار البيضاء · المغرب',
    heroTitle: <>هندسة رقمية<br />تمنح نموّك <i>زخماً</i><br />حقيقياً.</>, heroText: 'نصمم منتجات ويب ومنصات سحابية وأنظمة آمنة للشركات التي تتحرك بسرعة.', seeWork: 'اكتشف خبراتنا', statOne: 'مشروعاً تم تسليمه', statTwo: 'نسبة الإتاحة المستهدفة',
    servicesTitle: <>خبرة مصممة<br />لتحديات <i>حقيقية.</i></>, servicesText: 'من فهم الاحتياج إلى الإطلاق، نحوّل متطلباتكم العملية إلى أدوات موثوقة وفعّالة وقابلة للتوسع.',
    services: [['01', 'منتجات الويب وSaaS', 'تطبيقات الأعمال وبوابات العملاء ومنصات التجارة الإلكترونية المصممة للنمو مع نشاطكم.', 'اكتشف قطب الويب'], ['02', 'السحابة والأمن السيبراني', 'بنية تحتية مرنة ونسخ احتياطي وإدارة وصول ودعم عملي للامتثال.', 'أمّن بنيتك التحتية'], ['03', 'رقمنة العمليات', 'أتمتة التدفقات التي تبطئ فرقكم وتوحيد البيانات في بيئة واضحة.', 'رقمنة العمليات']],
    methodEyebrow: 'منهجيتنا', methodTitle: <>من أول نقاش<br />إلى منتج <i>مؤثر.</i></>, method: [['01', 'نفهم', 'نحلل استخداماتكم وقيودكم والنتائج المنتظرة.'], ['02', 'نصمم', 'خارطة طريق واضحة وواجهات مفيدة وبنية مستدامة.'], ['03', 'نبني', 'دورات قصيرة ونقاط متابعة منتظمة وجودة مضبوطة.'], ['04', 'نطوّر', 'نبقى إلى جانبكم بعد الإطلاق لتحسين ما يهم.']],
    offerEyebrow: 'عروض الانطلاق', offerTitle: <>صيغ واضحة،<br />أثر <i>ملموس.</i></>, offerText: 'كل مشروع يبدأ بنقاش. تساعدكم هذه المراجع على تحديد النطاق المناسب.', plans: [['الأساسية', 'موقع تعريفي مميز', 'ابتداءً من', '8 900', ['تصميم مخصص', 'موقع سريع ومتجاوب', 'أساسيات SEO التقنية', 'تدريب على إدارة المحتوى']], ['النمو', 'منصة أعمال', 'ابتداءً من', '24 900', ['دراسة شاملة للمنتج', 'واجهة ومساحة للعملاء', 'لوحة إدارة آمنة', 'مرافقة عند الإطلاق']], ['حسب الطلب', 'تحول رقمي', 'عرض مخصص', '', ['تدقيق العمليات', 'بنية سحابية ملائمة', 'تكاملات الأعمال', 'دعم وتطوير مستمران']]], tax: 'درهم مغربي دون الضريبة', choose: 'اختر هذا العرض', contactTitle: <>لديك مشروع؟<br /><i>لنمنحه انطلاقة.</i></>, contactText: 'أخبرنا بطموحك. سنعود إليك بقراءة عملية أولية لاحتياجك.', email: 'bonjour@pacetechdigital.ma', location: 'سيدي معروف، الدار البيضاء', footer: 'PACE TECH DIGITAL SARL · هندسة رقمية'
  }
}

function Logo() { return <a className="logo" href="#top" aria-label="PACE TECH DIGITAL"><span className="logo-mark"><b>PTD</b><em /></span><span>PACE<br /><strong>TECH DIGITAL</strong></span></a> }

function App() {
  const [lang, setLang] = useState('fr'); const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState('light')
  const t = copy[lang]; const isAr = lang === 'ar'
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])
  const links = ['#expertises', '#methode', '#offres', '#contact']
  return <main dir={isAr ? 'rtl' : 'ltr'} lang={lang}>
    <section className="hero" id="top">
      <nav className="nav shell"><Logo /><div className="nav-links">{t.nav.map((item, i) => <a href={links[i]} key={item}>{item}</a>)}</div><div className="nav-actions"><div className="lang-switch" aria-label="Language selector">{['fr','en','ar'].map(code => <button onClick={() => setLang(code)} className={lang === code ? 'active' : ''} key={code}>{code}</button>)}</div><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title={theme === 'dark' ? 'Light theme' : 'Dark theme'}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}<span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span></button><a className="nav-cta" href="#contact">{t.cta} <ArrowUpRight size={15}/></a><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X/> : <Menu/>}</button></div></nav>
      <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>{t.nav.map((item,i)=><a onClick={()=>setMenu(false)} href={links[i]} key={item}>{item}</a>)}</motion.div>}</AnimatePresence>
      <div className="hero-grid" /> <div className="glow glow-a" /><div className="glow glow-b" />
      <div className="hero-content shell"><motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.55}} className="eyebrow"><span />{t.eyebrow}</motion.p><motion.h1 initial={{opacity:0,y:32}} animate={{opacity:1,y:0}} transition={{duration:.7, delay:.1}}>{t.heroTitle}</motion.h1><motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.22}} className="hero-bottom"><p>{t.heroText}</p><a className="button primary" href="#expertises">{t.seeWork} <ArrowRight size={17}/></a></motion.div></div>
      <div className="hero-meta shell"><span>© 2026 PTD</span><div className="hero-stats"><span><b>+20</b> {t.statOne}</span><span><b>99,9%</b> {t.statTwo}</span></div><a href="#expertises" className="scroll">SCROLL <ChevronDown size={15}/></a></div>
    </section>
    <section className="services section shell" id="expertises"><div className="section-head"><div><p className="eyebrow dark"><span />EXPERTISES</p><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></div><div className="service-list">{t.services.map((service,index)=><motion.article className="service" key={service[0]} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{delay:index*.1}}><span className="service-number">{service[0]}</span><div className="service-icon">{index===0?<Code2/>:index===1?<ShieldCheck/>:<Cloud/>}</div><div><h3>{service[1]}</h3><p>{service[2]}</p></div><a href="#contact" aria-label={service[3]}><ArrowUpRight /></a></motion.article>)}</div></section>
    <section className="method" id="methode"><div className="method-grid shell"><div className="method-copy"><p className="eyebrow"><span />{t.methodEyebrow}</p><h2>{t.methodTitle}</h2><div className="orbit"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><span className="orbit-dot"/><strong>PTD</strong></div></div><div className="steps">{t.method.map((step,index)=><motion.article initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:index*.1}} key={step[0]}><span>{step[0]}</span><div><h3>{step[1]}</h3><p>{step[2]}</p></div></motion.article>)}</div></div></section>
    <section className="offers section shell" id="offres"><div className="section-head offer-head"><div><p className="eyebrow dark"><span />{t.offerEyebrow}</p><h2>{t.offerTitle}</h2></div><p>{t.offerText}</p></div><div className="plans">{t.plans.map((plan,index)=><motion.article className={'plan '+(index===1?'featured':'')} key={plan[0]} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.1}}>{index===1&&<small>LE PLUS CHOISI</small>}<div className="plan-top"><span>{plan[0]}</span><Sparkles size={19}/></div><h3>{plan[1]}</h3><div className="price"><span>{plan[2]}</span>{plan[3]&&<><b>{plan[3]}</b><small>{t.tax}</small></>}</div><ul>{plan[4].map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul><a href="#contact" className="plan-button">{t.choose} <ArrowRight size={16}/></a></motion.article>)}</div></section>
    <section className="contact" id="contact"><div className="contact-grid shell"><div><p className="eyebrow"><span />CONTACT</p><h2>{t.contactTitle}</h2></div><div className="contact-side"><p>{t.contactText}</p><a href="mailto:bonjour@pacetechdigital.ma" className="contact-email">{t.email} <ArrowUpRight /></a><p className="location"><Globe2 size={16}/>{t.location}</p></div></div></section>
    <footer className="footer shell"><Logo/><span>{t.footer}</span><a href="#top">↑</a></footer>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
