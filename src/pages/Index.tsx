import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/38ed5611-118f-40d9-82d8-42708e5ee95c/files/c23d9112-ea90-4204-8f02-3044372e7f00.jpg';

const navLinks = ['САНТЕХНИКА', 'ОСВЕЩЕНИЕ', 'МЕБЕЛЬ ДЛЯ ВАННОЙ', 'ПРЕМИУМ БРЕНДЫ', 'НОВИНКИ', 'АКЦИИ', 'О КОМПАНИИ', 'КОНТАКТЫ'];

const categories = [
  { title: 'САНТЕХНИКА', icon: 'Bath', desc: 'Унитазы, раковины, ванны, смесители' },
  { title: 'ОСВЕЩЕНИЕ', icon: 'Lightbulb', desc: 'Люстры, бра, точечный свет' },
  { title: 'МЕБЕЛЬ ДЛЯ ВАННОЙ', icon: 'Archive', desc: 'Тумбы, пеналы, зеркала' },
  { title: 'ПРЕМИУМ БРЕНДЫ', icon: 'Award', desc: 'Gessi, Grohe, Villeroy & Boch' },
];

const newProducts = [
  { name: 'Gessi Inciso', type: 'Смеситель для раковины', price: '89 990 ₽', icon: 'Droplet' },
  { name: 'Salini S-Sense', type: 'Отдельностоящая ванна', price: '249 990 ₽', icon: 'Bath' },
  { name: 'Masiero Ola', type: 'Люстра подвесная', price: '129 990 ₽', icon: 'Lightbulb' },
  { name: 'Antonio Lupi Sesamo', type: 'Мебель для ванной', price: '189 990 ₽', icon: 'Archive' },
];

const saleProducts = [
  { name: 'Grohe Rainshower', type: 'Душевая система', price: '79 990 ₽', old: '99 990 ₽', off: '-20%', icon: 'ShowerHead' },
  { name: 'Villeroy & Boch Subway', type: 'Унитаз подвесной', price: '29 990 ₽', old: '35 290 ₽', off: '-15%', icon: 'Bath' },
  { name: 'Maytoni Modern', type: 'Подвесной светильник', price: '17 990 ₽', old: '19 990 ₽', off: '-10%', icon: 'Lightbulb' },
];

const advantages = [
  { icon: 'Package', title: 'Широкий ассортимент', desc: 'Более 10 000 товаров в наличии' },
  { icon: 'ShieldCheck', title: 'Официальная гарантия', desc: 'Гарантия от производителя' },
  { icon: 'Headphones', title: 'Профессиональная консультация', desc: 'Помощь в подборе товаров' },
  { icon: 'Truck', title: 'Удобная доставка', desc: 'По всей России и СНГ' },
];

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full border-2 border-[#c8ccd2] flex items-center justify-center bg-[hsl(var(--navy-deep))]">
      <span className="font-display font-bold text-lg silver-text tracking-tighter">AB</span>
    </div>
    <div className="leading-none">
      <div className="font-display text-2xl silver-text tracking-[0.15em] font-semibold">ALBABAGNO</div>
      <div className="text-[9px] tracking-[0.35em] text-[#8a94a6] mt-1">PERFECT SANITARYWARE</div>
      <div className="italy-line h-[2px] w-full mt-1 rounded-full" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--gold))] selection:text-[hsl(var(--navy-deep))]">
      {/* TOP BAR */}
      <header className="border-b border-border/60 bg-[hsl(var(--navy-deep))]">
        <div className="container flex items-center gap-6 py-4">
          <Logo />
          <button className="hidden lg:flex items-center gap-2 ml-2 px-6 py-3 border border-[hsl(var(--gold))] text-[hsl(var(--gold))] text-sm tracking-wider hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--navy-deep))] transition-colors">
            <Icon name="Menu" size={16} /> КАТАЛОГ
          </button>
          <div className="hidden md:flex flex-1 items-center bg-[hsl(var(--navy))] border border-border rounded-sm overflow-hidden">
            <input placeholder="Поиск по каталогу..." className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="px-4 text-[hsl(var(--gold))]"><Icon name="Search" size={18} /></button>
          </div>
          <div className="hidden xl:block text-right leading-tight mr-2">
            <div className="text-[hsl(var(--gold))] font-semibold text-lg tracking-wide">+7 (495) 123-45-67</div>
            <div className="text-[11px] text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
          </div>
          <div className="flex items-center gap-5">
            {[['Heart', 'Избранное'], ['Scale', 'Сравнение'], ['User', 'Войти']].map(([ic, label]) => (
              <button key={label} className="flex flex-col items-center gap-1 text-muted-foreground hover:text-[hsl(var(--gold))] transition-colors">
                <Icon name={ic} size={20} />
                <span className="text-[10px]">{label}</span>
              </button>
            ))}
            <button className="flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] px-5 py-3 rounded-sm hover:brightness-110 transition">
              <Icon name="ShoppingCart" size={18} />
              <span className="text-sm font-semibold">Корзина</span>
              <span className="ml-1 bg-[hsl(var(--navy-deep))] text-[hsl(var(--gold))] w-5 h-5 rounded-full text-xs flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </header>

      {/* NAV */}
      <nav className="border-b border-border/60 bg-[hsl(var(--navy))]">
        <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3">
          {navLinks.map((l) => (
            <a key={l} href="#" className="text-xs tracking-widest text-foreground/80 hover:text-[hsl(var(--gold))] transition-colors flex items-center gap-1">
              {l}
              {['САНТЕХНИКА', 'ОСВЕЩЕНИЕ'].includes(l) && <Icon name="ChevronDown" size={13} />}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 items-center gap-8 py-14">
          <div className="animate-fade-up">
            <p className="text-[hsl(var(--gold))] tracking-[0.4em] text-sm mb-4">ИТАЛЬЯНСКИЙ СТИЛЬ</p>
            <h1 className="font-display silver-text text-6xl md:text-7xl tracking-[0.12em] font-bold leading-none">ALBABAGNO</h1>
            <p className="font-serif-alt text-2xl tracking-[0.3em] text-[#a9b1bf] mt-3">PERFECT SANITARYWARE</p>
            <div className="italy-line h-[3px] w-full max-w-md my-6 rounded-full" />
            <p className="text-foreground/80 text-lg leading-relaxed max-w-md">
              Премиальная сантехника<br />и световое оборудование
            </p>
            <div className="flex flex-wrap gap-8 my-8">
              {[['Gem', 'ПРЕМИАЛЬНОЕ КАЧЕСТВО'], ['ShieldCheck', 'ОФИЦИАЛЬНАЯ ГАРАНТИЯ'], ['Truck', 'БЫСТРАЯ ДОСТАВКА']].map(([ic, t]) => (
                <div key={t} className="flex flex-col items-center text-center max-w-[90px]">
                  <Icon name={ic} size={26} className="text-[hsl(var(--gold))] mb-2" />
                  <span className="text-[10px] tracking-wider text-muted-foreground leading-tight">{t}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] px-8 py-4 text-sm tracking-wider font-semibold hover:brightness-110 transition">КАТАЛОГ ТОВАРОВ</button>
              <button className="border border-border px-8 py-4 text-sm tracking-wider hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition">НОВИНКИ</button>
              <button className="border border-border px-8 py-4 text-sm tracking-wider hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition">АКЦИИ</button>
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden shadow-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <img src={HERO_IMG} alt="ALBABAGNO premium bathroom" className="w-full h-[540px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-deep))]/70 to-transparent" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-16">
        {categories.map((c) => (
          <div key={c.title} className="glass-card rounded-sm p-7 hover-lift cursor-pointer group">
            <Icon name={c.icon} size={34} className="text-[hsl(var(--gold))] mb-5" />
            <h3 className="font-display tracking-widest text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{c.desc}</p>
            <span className="flex items-center gap-2 text-sm text-[hsl(var(--gold))] group-hover:gap-3 transition-all">
              Смотреть все <Icon name="ArrowRight" size={16} />
            </span>
          </div>
        ))}
      </section>

      {/* NEW + SALE + ADVANTAGES */}
      <section className="container grid lg:grid-cols-3 gap-6 pb-16">
        {/* NEW */}
        <div className="glass-card rounded-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display tracking-widest text-xl">НОВИНКИ</h2>
            <a href="#" className="text-sm text-[hsl(var(--gold))] flex items-center gap-1">Смотреть все <Icon name="ArrowRight" size={14} /></a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {newProducts.map((p) => (
              <div key={p.name} className="group cursor-pointer">
                <div className="aspect-square rounded-sm bg-[hsl(var(--navy-deep))] flex items-center justify-center mb-3 hover-lift">
                  <Icon name={p.icon} size={40} className="text-[hsl(var(--silver))]/50 group-hover:text-[hsl(var(--gold))] transition-colors" />
                </div>
                <p className="font-serif-alt text-lg leading-tight">{p.name}</p>
                <p className="text-[11px] text-muted-foreground mb-1">{p.type}</p>
                <p className="text-[hsl(var(--gold))] font-semibold">{p.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SALE */}
        <div className="glass-card rounded-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display tracking-widest text-xl">АКЦИОННЫЕ ТОВАРЫ</h2>
            <a href="#" className="text-sm text-[hsl(var(--gold))] flex items-center gap-1">Смотреть все <Icon name="ArrowRight" size={14} /></a>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {saleProducts.map((p) => (
              <div key={p.name} className="flex gap-4 group cursor-pointer">
                <div className="relative aspect-square w-24 shrink-0 rounded-sm bg-[hsl(var(--navy-deep))] flex items-center justify-center hover-lift">
                  <span className="absolute top-1 left-1 bg-destructive text-white text-[10px] px-1.5 py-0.5 rounded-sm">{p.off}</span>
                  <Icon name={p.icon} size={32} className="text-[hsl(var(--silver))]/50 group-hover:text-[hsl(var(--gold))] transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-serif-alt text-lg leading-tight">{p.name}</p>
                  <p className="text-[11px] text-muted-foreground mb-1">{p.type}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[hsl(var(--gold))] font-semibold">{p.price}</span>
                    <span className="text-xs text-muted-foreground line-through">{p.old}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVANTAGES */}
        <div className="glass-card rounded-sm p-6">
          <h2 className="font-display tracking-widest text-xl mb-6">ПОЧЕМУ ВЫБИРАЮТ НАС</h2>
          <div className="flex flex-col gap-5">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-sm border border-[hsl(var(--gold))]/40 flex items-center justify-center">
                  <Icon name={a.icon} size={20} className="text-[hsl(var(--gold))]" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="border-y border-border/60 bg-[hsl(var(--navy-deep))]">
        <div className="container grid md:grid-cols-3 gap-8 py-10">
          {[['MapPin', 'ИТАЛЬЯНСКИЙ ДИЗАЙН', 'Элегантность и стиль в каждой детали'], ['Atom', 'ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ', 'Современные решения для вашего комфорта'], ['Gem', 'ДОЛГОВЕЧНОСТЬ', 'Качество, проверенное временем']].map(([ic, t, d]) => (
            <div key={t} className="flex items-center gap-4 justify-center md:justify-start">
              <Icon name={ic} size={34} className="text-[hsl(var(--gold))]" />
              <div>
                <p className="font-display tracking-widest text-base">{t}</p>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--navy-deep))]">
        <div className="container grid md:grid-cols-4 gap-10 py-14">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
              Премиальная сантехника, освещение и мебель для ванной комнаты в итальянском стиле.
            </p>
          </div>
          <div>
            <h4 className="font-display tracking-widest text-sm mb-4 text-[hsl(var(--gold))]">КАТАЛОГ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['Сантехника', 'Освещение', 'Мебель для ванной', 'Премиум бренды', 'Новинки', 'Акции'].map((i) => (
                <li key={i}><a href="#" className="hover:text-[hsl(var(--gold))] transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display tracking-widest text-sm mb-4 text-[hsl(var(--gold))]">ПОКУПАТЕЛЯМ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {['О компании', 'Доставка', 'Оплата', 'Возврат', 'Гарантия', 'Контакты'].map((i) => (
                <li key={i}><a href="#" className="hover:text-[hsl(var(--gold))] transition-colors">{i}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display tracking-widest text-sm mb-4 text-[hsl(var(--gold))]">КОНТАКТЫ</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Icon name="Phone" size={16} className="text-[hsl(var(--gold))]" /> +7 (495) 123-45-67</p>
              <p className="flex items-center gap-2"><Icon name="Mail" size={16} className="text-[hsl(var(--gold))]" /> info@albabagno.ru</p>
              <div className="flex gap-3 pt-2">
                {['Send', 'MessageCircle', 'Instagram'].map((ic) => (
                  <a key={ic} href="#" className="w-9 h-9 rounded-sm border border-border flex items-center justify-center hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] transition-colors">
                    <Icon name={ic} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="container py-5 text-center text-xs text-muted-foreground">
            © 2026 ALBABAGNO. Perfect Sanitaryware. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
