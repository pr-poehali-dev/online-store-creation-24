import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const LOGO_IMG = 'https://cdn.poehali.dev/projects/38ed5611-118f-40d9-82d8-42708e5ee95c/bucket/f4b86a4b-182f-4c7c-9693-1e3f1a82701a.png';

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <img src={LOGO_IMG} alt="ALBABAGNO" className="h-14 w-auto object-contain" />
  </Link>
);

const advantages = [
  { icon: 'History', title: 'Богатый опыт', desc: 'Мы работаем на рынке много лет, что позволяет нам учитывать все нюансы и предлагать оптимальные решения.' },
  { icon: 'Gem', title: 'Элитный уровень', desc: 'Мы работаем только с премиальными материалами и оборудованием от ведущих мировых и российских производителей.' },
  { icon: 'Users', title: 'Профессионализм', desc: 'В нашей команде — высококвалифицированные инженеры, электрики и сантехники, регулярно проходящие обучение и сертификацию.' },
  { icon: 'Sparkles', title: 'Индивидуальный подход', desc: 'Мы разрабатываем проекты, учитывая все пожелания клиента, особенности объекта и современные стандарты комфорта.' },
  { icon: 'Layers', title: 'Комплексный подход', desc: 'От проектирования и подбора оборудования до монтажа, пусконаладки и сервисного обслуживания.' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--gold))] selection:text-[hsl(var(--navy-deep))]">
      <header className="border-b border-border/60 bg-[hsl(var(--navy-deep))]">
        <div className="container flex items-center gap-6 py-4">
          <Logo />
          <div className="hidden xl:block text-right leading-tight ml-auto">
            <div className="text-[hsl(var(--gold))] font-semibold text-lg tracking-wide">+7 (495) 123-45-67</div>
            <div className="text-[11px] text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
          </div>
        </div>
      </header>

      <div className="border-b border-border/60 bg-[hsl(var(--navy))]">
        <div className="container flex items-center gap-2 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-[hsl(var(--gold))]">Главная</Link>
          <Icon name="ChevronRight" size={13} />
          <span className="text-foreground">О компании</span>
        </div>
      </div>

      <section className="container pt-12 pb-8">
        <p className="text-[hsl(var(--gold))] tracking-[0.4em] text-sm mb-3">О НАС</p>
        <h1 className="font-display silver-text text-4xl md:text-5xl tracking-[0.1em] font-bold">О КОМПАНИИ</h1>
        <div className="italy-line h-[3px] w-40 mt-4 rounded-full" />
      </section>

      <section className="container pb-14">
        <div className="glass-card rounded-sm p-8 md:p-12 max-w-4xl">
          <p className="font-serif-alt text-2xl leading-relaxed text-foreground/90">
            ALBABAGNO — компания с многолетней историей, специализирующаяся на оказании услуг в сфере элитной электрики и сантехники.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-5">
            За годы работы мы заслужили репутацию надёжного партнёра, способного реализовать проекты любой сложности с безупречным качеством.
          </p>
        </div>
      </section>

      <section className="container pb-16">
        <h2 className="font-display tracking-widest text-xl mb-8">НАШИ КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map((a) => (
            <div key={a.title} className="glass-card rounded-sm p-7 hover-lift">
              <Icon name={a.icon} size={32} className="text-[hsl(var(--gold))] mb-4" />
              <h3 className="font-display tracking-widest text-base mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-[hsl(var(--navy-deep))]">
        <div className="container py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3">
            <Icon name="MapPin" size={26} className="text-[hsl(var(--gold))]" />
            <div>
              <p className="text-xs text-muted-foreground tracking-widest">АДРЕС</p>
              <p className="font-serif-alt text-lg">Москва, 41 км МКАД, строительный рынок «Мельница»</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[hsl(var(--navy-deep))] border-t border-border/60">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-muted-foreground">© 2026 ALBABAGNO. Perfect Sanitaryware.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
