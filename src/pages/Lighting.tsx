import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-full border-2 border-[#c8ccd2] flex items-center justify-center bg-[hsl(var(--navy-deep))]">
      <span className="font-display font-bold text-lg silver-text tracking-tighter">AB</span>
    </div>
    <div className="leading-none">
      <div className="font-display text-2xl silver-text tracking-[0.15em] font-semibold">ALBABAGNO</div>
      <div className="text-[9px] tracking-[0.35em] text-[#8a94a6] mt-1">PERFECT SANITARYWARE</div>
      <div className="italy-line h-[2px] w-full mt-1 rounded-full" />
    </div>
  </Link>
);

const categories = [
  { title: 'Абажуры', icon: 'LampShade', fallback: 'Lamp' },
  { title: 'Бра', icon: 'Lamp', fallback: 'Lightbulb' },
  { title: 'Люстры', icon: 'ChandelierIcon', fallback: 'Lightbulb' },
  { title: 'Настольные лампы', icon: 'LampDesk', fallback: 'Lamp' },
  { title: 'Ночники', icon: 'Moon', fallback: 'Moon' },
  { title: 'Светильники', icon: 'Lightbulb', fallback: 'Lightbulb' },
  { title: 'Светодиодные ленты', icon: 'Zap', fallback: 'Zap' },
  { title: 'Споты и трек-системы', icon: 'Target', fallback: 'Target' },
  { title: 'Торшеры напольные', icon: 'LampFloor', fallback: 'Lamp' },
];

const products = [
  { name: 'Masiero Ola', type: 'Люстра подвесная', price: '129 990 ₽', cat: 'Люстры', icon: 'Lightbulb' },
  { name: 'Maytoni Modern', type: 'Подвесной светильник', price: '17 990 ₽', cat: 'Светильники', icon: 'Lightbulb' },
  { name: 'Odeon Light Wall', type: 'Бра настенное', price: '12 400 ₽', cat: 'Бра', icon: 'Lamp' },
  { name: 'Lightstar Desko', type: 'Настольная лампа', price: '9 800 ₽', cat: 'Настольные лампы', icon: 'LampDesk' },
  { name: 'Elstead Cozy', type: 'Ночник', price: '4 300 ₽', cat: 'Ночники', icon: 'Moon' },
  { name: 'Gauss LED Strip', type: 'Светодиодная лента 5м', price: '2 990 ₽', cat: 'Светодиодные ленты', icon: 'Zap' },
  { name: 'ArteLamp Track', type: 'Трек-система', price: '15 600 ₽', cat: 'Споты и трек-системы', icon: 'Target' },
  { name: 'Eglo Pasteri', type: 'Торшер напольный', price: '18 200 ₽', cat: 'Торшеры напольные', icon: 'Lamp' },
  { name: 'Lumion Textile', type: 'Абажур текстильный', price: '3 700 ₽', cat: 'Абажуры', icon: 'Lamp' },
];

const filters = [
  { title: 'Цена', items: ['до 10 000 ₽', '10 000 – 30 000 ₽', '30 000 – 80 000 ₽', 'от 80 000 ₽'] },
  { title: 'Бренд', items: ['Masiero', 'Maytoni', 'Odeon Light', 'Lightstar', 'ArteLamp'] },
  { title: 'Материал', items: ['Металл', 'Стекло', 'Хрусталь', 'Текстиль'] },
  { title: 'Цвет свечения', items: ['Тёплый', 'Нейтральный', 'Холодный'] },
];

const Lighting = () => {
  const [activeCat, setActiveCat] = useState('Люстры');
  const filtered = products.filter((p) => p.cat === activeCat);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--gold))] selection:text-[hsl(var(--navy-deep))]">
      <header className="border-b border-border/60 bg-[hsl(var(--navy-deep))]">
        <div className="container flex items-center gap-6 py-4">
          <Logo />
          <div className="hidden md:flex flex-1 items-center bg-[hsl(var(--navy))] border border-border rounded-sm overflow-hidden ml-4">
            <input placeholder="Поиск по каталогу..." className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="px-4 text-[hsl(var(--gold))]"><Icon name="Search" size={18} /></button>
          </div>
          <button className="flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] px-5 py-3 rounded-sm hover:brightness-110 transition">
            <Icon name="ShoppingCart" size={18} />
            <span className="text-sm font-semibold hidden sm:inline">Корзина</span>
          </button>
        </div>
      </header>

      <div className="border-b border-border/60 bg-[hsl(var(--navy))]">
        <div className="container flex items-center gap-2 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-[hsl(var(--gold))]">Главная</Link>
          <Icon name="ChevronRight" size={13} />
          <span className="text-foreground">Освещение</span>
          <Icon name="ChevronRight" size={13} />
          <span className="text-foreground">{activeCat}</span>
        </div>
      </div>

      <section className="container pt-10 pb-6">
        <p className="text-[hsl(var(--gold))] tracking-[0.4em] text-sm mb-3">КАТАЛОГ</p>
        <h1 className="font-display silver-text text-4xl md:text-5xl tracking-[0.1em] font-bold">ОСВЕЩЕНИЕ</h1>
        <div className="italy-line h-[3px] w-40 mt-4 rounded-full" />
      </section>

      <section className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-12">
        {categories.map((c) => (
          <button
            key={c.title}
            onClick={() => setActiveCat(c.title)}
            className={`glass-card rounded-sm p-5 text-center hover-lift cursor-pointer group ${activeCat === c.title ? 'ring-1 ring-[hsl(var(--gold))]' : ''}`}
          >
            <Icon name={c.icon} fallback={c.fallback} size={30} className="text-[hsl(var(--gold))] mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-serif-alt text-base leading-tight">{c.title}</p>
          </button>
        ))}
      </section>

      <section className="container grid lg:grid-cols-[260px_1fr] gap-8 pb-20">
        <aside className="glass-card rounded-sm p-6 h-fit">
          <div className="flex items-center gap-2 mb-5">
            <Icon name="SlidersHorizontal" size={18} className="text-[hsl(var(--gold))]" />
            <h3 className="font-display tracking-widest text-sm">ФИЛЬТР</h3>
          </div>
          {filters.map((f) => (
            <div key={f.title} className="mb-6">
              <p className="text-sm font-semibold mb-3 text-[hsl(var(--gold))]">{f.title}</p>
              <div className="space-y-2">
                {f.items.map((i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                    <span className="w-4 h-4 border border-border rounded-sm shrink-0" />
                    {i}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div>
          <h2 className="font-display tracking-widest text-lg mb-5">
            {activeCat}
            <span className="text-muted-foreground text-xs font-sans tracking-normal ml-2">({filtered.length} товаров)</span>
          </h2>
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <div key={p.name} className="glass-card rounded-sm p-5 hover-lift cursor-pointer group flex flex-col">
                  <div className="aspect-square rounded-sm bg-[hsl(var(--navy-deep))] flex items-center justify-center mb-4">
                    <Icon name={p.icon} size={54} className="text-[hsl(var(--silver))]/40 group-hover:text-[hsl(var(--gold))] transition-colors" />
                  </div>
                  <p className="text-[10px] tracking-wider text-muted-foreground mb-1">{p.cat.toUpperCase()}</p>
                  <p className="font-serif-alt text-xl leading-tight">{p.name}</p>
                  <p className="text-xs text-muted-foreground mb-4">{p.type}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-[hsl(var(--gold))] font-semibold text-lg">{p.price}</span>
                    <button className="w-10 h-10 rounded-sm bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] flex items-center justify-center hover:brightness-110 transition">
                      <Icon name="ShoppingCart" size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-sm p-14 text-center">
              <Icon name="PackageSearch" size={40} className="text-[hsl(var(--gold))] mx-auto mb-4" />
              <p className="text-muted-foreground">Товары в этой категории скоро появятся в каталоге</p>
            </div>
          )}
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

export default Lighting;
