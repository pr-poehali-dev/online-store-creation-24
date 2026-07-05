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
  { title: 'Душевые кабины', icon: 'ShowerHead', count: 48 },
  { title: 'Душевые ограждения', icon: 'Frame', count: 36 },
  { title: 'Ванны', icon: 'Bath', count: 62 },
  { title: 'Шторки на ванну', icon: 'PanelTop', count: 24 },
  { title: 'Душевые поддоны', icon: 'Square', count: 30 },
  { title: 'Унитазы', icon: 'Toilet', count: 54 },
];

const products = [
  { name: 'Radaway Idea', type: 'Душевая кабина', price: '84 990 ₽', cat: 'Душевые кабины', icon: 'ShowerHead' },
  { name: 'Ravak Blix', type: 'Душевое ограждение', price: '42 500 ₽', cat: 'Душевые ограждения', icon: 'Frame' },
  { name: 'Salini S-Sense', type: 'Отдельностоящая ванна', price: '249 990 ₽', cat: 'Ванны', icon: 'Bath' },
  { name: 'Ideal Standard Kubo', type: 'Шторка на ванну', price: '31 900 ₽', cat: 'Шторки на ванну', icon: 'PanelTop' },
  { name: 'Roca Malaga', type: 'Душевой поддон', price: '18 700 ₽', cat: 'Душевые поддоны', icon: 'Square' },
  { name: 'Villeroy & Boch Subway', type: 'Унитаз подвесной', price: '29 990 ₽', cat: 'Унитазы', icon: 'Toilet' },
  { name: 'Grohe Euphoria', type: 'Душевая кабина', price: '112 000 ₽', cat: 'Душевые кабины', icon: 'ShowerHead' },
  { name: 'Kaldewei Puro', type: 'Стальная ванна', price: '167 400 ₽', cat: 'Ванны', icon: 'Bath' },
];

const filters = [
  { title: 'Цена', items: ['до 30 000 ₽', '30 000 – 80 000 ₽', '80 000 – 150 000 ₽', 'от 150 000 ₽'] },
  { title: 'Бренд', items: ['Grohe', 'Villeroy & Boch', 'Radaway', 'Roca', 'Kaldewei'] },
  { title: 'Материал', items: ['Акрил', 'Сталь', 'Керамика', 'Стекло'] },
  { title: 'Страна', items: ['Италия', 'Германия', 'Испания', 'Польша'] },
];

const Sanitaryware = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--gold))] selection:text-[hsl(var(--navy-deep))]">
      {/* HEADER */}
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

      {/* BREADCRUMB */}
      <div className="border-b border-border/60 bg-[hsl(var(--navy))]">
        <div className="container flex items-center gap-2 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-[hsl(var(--gold))]">Главная</Link>
          <Icon name="ChevronRight" size={13} />
          <span className="text-foreground">Сантехника</span>
        </div>
      </div>

      {/* TITLE */}
      <section className="container pt-10 pb-6">
        <p className="text-[hsl(var(--gold))] tracking-[0.4em] text-sm mb-3">КАТАЛОГ</p>
        <h1 className="font-display silver-text text-4xl md:text-5xl tracking-[0.1em] font-bold">САНТЕХНИКА</h1>
        <div className="italy-line h-[3px] w-40 mt-4 rounded-full" />
      </section>

      {/* CATEGORY TILES */}
      <section className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-12">
        {categories.map((c) => (
          <div key={c.title} className="glass-card rounded-sm p-5 text-center hover-lift cursor-pointer group">
            <Icon name={c.icon} size={30} className="text-[hsl(var(--gold))] mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-serif-alt text-base leading-tight">{c.title}</p>
            <p className="text-[11px] text-muted-foreground mt-1">{c.count} товаров</p>
          </div>
        ))}
      </section>

      {/* MAIN GRID */}
      <section className="container grid lg:grid-cols-[260px_1fr] gap-8 pb-20">
        {/* FILTERS */}
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

        {/* PRODUCTS */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((p) => (
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
      </section>

      {/* FOOTER */}
      <footer className="bg-[hsl(var(--navy-deep))] border-t border-border/60">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-muted-foreground">© 2026 ALBABAGNO. Perfect Sanitaryware.</p>
        </div>
      </footer>
    </div>
  );
};

export default Sanitaryware;
