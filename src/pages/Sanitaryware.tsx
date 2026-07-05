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

interface CategoryNode {
  title: string;
  icon: string;
  subs: string[];
}

const catalog: CategoryNode[] = [
  { title: 'Ванны', icon: 'Bath', subs: ['Акриловые', 'Чугунные', 'Стальные', 'Из искусственного камня'] },
  { title: 'Унитазы', icon: 'CircleDot', subs: ['Напольные', 'Подвесные', 'Приставные', 'Безободковый', 'С инсталляцией в комплекте'] },
  { title: 'Раковины', icon: 'Circle', subs: ['Подвесные', 'Раковина-чаша', 'Накладные', 'Встраиваемые', 'На стиральную машину', 'С пьедесталом'] },
  { title: 'Смесители', icon: 'Droplet', subs: ['Для раковины', 'Для ванны', 'Для кухни', 'Для душа', 'Комплекты смесителей'] },
  { title: 'Душевая программа', icon: 'ShowerHead', subs: ['Душевые системы', 'Душевые гарнитуры', 'Верхние души', 'Душевые панели', 'Гигиенические души', 'Комплектующие'] },
  { title: 'Душевые кабины', icon: 'DoorOpen', subs: ['Четверть круга', 'Прямоугольные', 'Квадратные', 'Асимметричные', 'В форме призмы'] },
  { title: 'Душевые боксы', icon: 'Box', subs: ['Прямоугольные', 'Четверть круга', 'С турецкой баней'] },
  { title: 'Душевые ограждения', icon: 'Frame', subs: ['Душевые уголки', 'Душевые двери', 'Шторки на ванну', 'Душевые перегородки', 'Комплектующие'] },
  { title: 'Душевые поддоны', icon: 'Square', subs: ['Четверть круга', 'Квадратные', 'Прямоугольные', 'Комплектующие'] },
  { title: 'Инсталляции', icon: 'Wrench', subs: ['Для подвесных унитазов', 'Комплекты инсталляций с унитазом', 'Для биде', 'Для писсуаров', 'Кнопки смыва'] },
  { title: 'Биде', icon: 'CircleDashed', subs: ['Напольные', 'Подвесные'] },
  { title: 'Писсуары', icon: 'Component', subs: ['С внутренним подводом воды', 'С внешним подводом воды', 'Сенсорный', 'Комплектующие'] },
  { title: 'Комплектующие', icon: 'Settings', subs: [] },
  { title: 'Бассейны', icon: 'Waves', subs: [] },
  { title: 'Полотенцесушители', icon: 'Flame', subs: ['Водяные', 'Электрические', 'Комплектующие'] },
  { title: 'Слив и канализация', icon: 'Filter', subs: ['Измельчители отходов', 'Душевые лотки', 'Душевые трапы', 'Сифоны', 'Донные клапаны', 'Сливы-переливы', 'Комплектующие'] },
];

const products = [
  { name: 'Salini S-Sense', type: 'Отдельностоящая ванна', price: '249 990 ₽', cat: 'Ванны', sub: 'Из искусственного камня', icon: 'Bath' },
  { name: 'Kaldewei Puro', type: 'Стальная ванна', price: '167 400 ₽', cat: 'Ванны', sub: 'Стальные', icon: 'Bath' },
  { name: 'Roca Continental', type: 'Акриловая ванна', price: '54 300 ₽', cat: 'Ванны', sub: 'Акриловые', icon: 'Bath' },
  { name: 'Villeroy & Boch Subway', type: 'Унитаз подвесной', price: '29 990 ₽', cat: 'Унитазы', sub: 'Подвесные', icon: 'CircleDot' },
  { name: 'Gessi Inciso', type: 'Смеситель для раковины', price: '89 990 ₽', cat: 'Смесители', sub: 'Для раковины', icon: 'Droplet' },
  { name: 'Grohe Rainshower', type: 'Душевая система', price: '79 990 ₽', cat: 'Душевая программа', sub: 'Душевые системы', icon: 'ShowerHead' },
  { name: 'Radaway Idea', type: 'Душевая кабина', price: '84 990 ₽', cat: 'Душевые кабины', sub: 'Прямоугольные', icon: 'DoorOpen' },
  { name: 'Ravak Blix', type: 'Душевая дверь', price: '42 500 ₽', cat: 'Душевые ограждения', sub: 'Душевые двери', icon: 'Frame' },
  { name: 'Ideal Standard Kubo', type: 'Шторка на ванну', price: '31 900 ₽', cat: 'Душевые ограждения', sub: 'Шторки на ванну', icon: 'Frame' },
  { name: 'Roca Malaga', type: 'Душевой поддон', price: '18 700 ₽', cat: 'Душевые поддоны', sub: 'Прямоугольные', icon: 'Square' },
  { name: 'Geberit Duofix', type: 'Инсталляция с кнопкой', price: '38 400 ₽', cat: 'Инсталляции', sub: 'Для подвесных унитазов', icon: 'Wrench' },
  { name: 'Roca Gap', type: 'Раковина подвесная', price: '14 200 ₽', cat: 'Раковины', sub: 'Подвесные', icon: 'Circle' },
];

const filters = [
  { title: 'Цена', items: ['до 30 000 ₽', '30 000 – 80 000 ₽', '80 000 – 150 000 ₽', 'от 150 000 ₽'] },
  { title: 'Бренд', items: ['Grohe', 'Villeroy & Boch', 'Radaway', 'Roca', 'Kaldewei', 'Gessi', 'Geberit'] },
  { title: 'Материал', items: ['Акрил', 'Сталь', 'Керамика', 'Стекло', 'Искусственный камень'] },
  { title: 'Страна', items: ['Италия', 'Германия', 'Испания', 'Польша'] },
];

const Sanitaryware = () => {
  const [openCat, setOpenCat] = useState('Ванны');
  const [activeCat, setActiveCat] = useState('Ванны');
  const [activeSub, setActiveSub] = useState<string | null>(null);

  const filtered = products.filter((p) => p.cat === activeCat && (!activeSub || p.sub === activeSub));

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
          <span className="hover:text-[hsl(var(--gold))] cursor-pointer" onClick={() => { setActiveCat(activeCat); setActiveSub(null); }}>Сантехника</span>
          {activeCat && <><Icon name="ChevronRight" size={13} /><span className="text-foreground">{activeCat}</span></>}
          {activeSub && <><Icon name="ChevronRight" size={13} /><span className="text-foreground">{activeSub}</span></>}
        </div>
      </div>

      {/* TITLE */}
      <section className="container pt-10 pb-6">
        <p className="text-[hsl(var(--gold))] tracking-[0.4em] text-sm mb-3">КАТАЛОГ</p>
        <h1 className="font-display silver-text text-4xl md:text-5xl tracking-[0.1em] font-bold">САНТЕХНИКА</h1>
        <div className="italy-line h-[3px] w-40 mt-4 rounded-full" />
      </section>

      {/* MAIN GRID */}
      <section className="container grid lg:grid-cols-[300px_1fr] gap-8 pb-20">
        {/* SIDEBAR CATALOG TREE */}
        <aside className="glass-card rounded-sm p-4 h-fit lg:sticky lg:top-4 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center gap-2 mb-4 px-2">
            <Icon name="LayoutList" size={18} className="text-[hsl(var(--gold))]" />
            <h3 className="font-display tracking-widest text-sm">КАТЕГОРИИ</h3>
          </div>
          <div className="space-y-1">
            {catalog.map((c) => {
              const isOpen = openCat === c.title;
              const isActive = activeCat === c.title && !activeSub;
              return (
                <div key={c.title} className="rounded-sm overflow-hidden">
                  <button
                    onClick={() => {
                      setOpenCat(isOpen ? '' : c.title);
                      setActiveCat(c.title);
                      setActiveSub(null);
                    }}
                    className={`w-full flex items-center gap-2 px-2 py-2.5 text-left text-sm transition-colors rounded-sm ${isActive ? 'bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] font-semibold' : 'hover:bg-white/5 text-foreground/85'}`}
                  >
                    <Icon name={c.icon} size={16} className={isActive ? 'text-[hsl(var(--navy-deep))]' : 'text-[hsl(var(--gold))]'} />
                    <span className="flex-1">{c.title}</span>
                    {c.subs.length > 0 && (
                      <Icon name="ChevronDown" size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  {isOpen && c.subs.length > 0 && (
                    <div className="pl-8 pr-2 py-1 flex flex-col gap-0.5 animate-fade-up">
                      {c.subs.map((s) => (
                        <button
                          key={s}
                          onClick={() => { setActiveCat(c.title); setActiveSub(s); }}
                          className={`text-left text-xs py-1.5 px-2 rounded-sm transition-colors ${activeCat === c.title && activeSub === s ? 'text-[hsl(var(--gold))] font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* CONTENT */}
        <div>
          {/* FILTERS ROW */}
          <div className="glass-card rounded-sm p-5 mb-6 flex flex-wrap gap-x-8 gap-y-4">
            {filters.map((f) => (
              <div key={f.title}>
                <p className="text-xs font-semibold text-[hsl(var(--gold))] mb-2">{f.title}</p>
                <div className="flex flex-wrap gap-2 max-w-xs">
                  {f.items.slice(0, 4).map((i) => (
                    <span key={i} className="text-[11px] border border-border rounded-sm px-2 py-1 text-muted-foreground cursor-pointer hover:border-[hsl(var(--gold))] hover:text-foreground transition-colors">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-display tracking-widest text-lg mb-5">
            {activeSub ?? activeCat}
            <span className="text-muted-foreground text-xs font-sans tracking-normal ml-2">({filtered.length} товаров)</span>
          </h2>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <div key={p.name} className="glass-card rounded-sm p-5 hover-lift cursor-pointer group flex flex-col">
                  <div className="aspect-square rounded-sm bg-[hsl(var(--navy-deep))] flex items-center justify-center mb-4">
                    <Icon name={p.icon} size={54} className="text-[hsl(var(--silver))]/40 group-hover:text-[hsl(var(--gold))] transition-colors" />
                  </div>
                  <p className="text-[10px] tracking-wider text-muted-foreground mb-1">{p.sub.toUpperCase()}</p>
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
