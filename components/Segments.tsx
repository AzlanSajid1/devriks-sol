import Reveal from "./Reveal";

const SEGMENTS = [
  {
    key: "champions",
    dot: "bg-green",
    ring: "shadow-[0_0_0_5px_var(--color-green-soft)]",
    hoverBorder: "hover:border-green",
    title: "Champions",
    body: "Buy often, spend well, and bought recently. Your highest-value, lowest-risk customers — worth protecting, not just celebrating.",
  },
  {
    key: "loyal",
    dot: "bg-blue",
    ring: "shadow-[0_0_0_5px_var(--color-blue-soft)]",
    hoverBorder: "hover:border-blue",
    title: "Loyal",
    body: "Consistent, dependable repeat buyers who aren't your biggest spenders, but keep coming back. The steady base of the business.",
  },
  {
    key: "atrisk",
    dot: "bg-amber",
    ring: "shadow-[0_0_0_5px_var(--color-amber-soft)]",
    hoverBorder: "hover:border-amber",
    title: "At risk",
    body: "Used to buy regularly, gone quiet lately. Still recoverable — this is the group a retention effort should target first.",
  },
  {
    key: "lost",
    dot: "bg-red",
    ring: "shadow-[0_0_0_5px_var(--color-red-soft)]",
    hoverBorder: "hover:border-red",
    title: "Lost",
    body: "Long inactive, unlikely to return on their own. Useful to know who they are and why they left, more than to chase them.",
  },
];

export default function Segments() {
  return (
    <section id="segments" className="border-y border-border-soft bg-bg-alt py-[108px]">
      <div className="mx-auto max-w-(--container-maxw) px-7">
        <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
          CUSTOMER SEGMENTS
        </p>
        <h2 className="mb-[18px] max-w-[15ch] text-[clamp(28px,3.6vw,42px)] leading-[1.14]">
          Every customer, sorted into one of four groups.
        </h2>
        <p className="mb-11 max-w-[58ch] text-[17px] text-muted">
          This is the categorisation that anchors the whole report. It&apos;s
          not a demographic label — it&apos;s a prediction, updated from
          actual buying behaviour.
        </p>

        <div className="grid grid-cols-1 gap-4 tab:grid-cols-2 nav:grid-cols-4">
          {SEGMENTS.map((seg) => (
            <Reveal key={seg.key}>
              <div
                className={`h-full rounded-card border border-border bg-surface px-[22px] py-[26px] transition-[transform,border-color] duration-200 hover:-translate-y-1 ${seg.hoverBorder}`}
              >
                <span
                  className={`mb-4 block h-3 w-3 rounded-full ${seg.dot} ${seg.ring}`}
                />
                <h3 className="mb-2 text-lg">{seg.title}</h3>
                <p className="text-sm text-muted">{seg.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
