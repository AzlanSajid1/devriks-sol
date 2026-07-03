import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Send your data",
    body: "Export 12 months of transactions from whatever you already use — POS, e-commerce, invoicing — as a plain CSV. Customer ID, date, and amount is all we need.",
  },
  {
    num: "02",
    title: "We run the models",
    body: "BG/NBD estimates who's still likely to buy again and when. Gamma-Gamma estimates what each customer is worth. Together they predict churn risk and lifetime value, customer by customer.",
  },
  {
    num: "03",
    title: "You get the report",
    body: "A self-contained HTML report: every customer sorted into a segment, the revenue sitting at risk, and a ranked list of who to reach out to first.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-[108px]">
      <div className="mx-auto max-w-(--container-maxw) px-7">
        <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
          HOW IT WORKS
        </p>
        <h2 className="mb-[18px] max-w-[15ch] text-[clamp(28px,3.6vw,42px)] leading-[1.14]">
          Three steps. No setup on your side.
        </h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border-soft bg-border-soft tab:grid-cols-3">
          {STEPS.map((step) => (
            <Reveal key={step.num} className="bg-bg px-[30px] py-9">
              <span className="mb-[18px] block font-mono text-[13px] text-muted-2">
                {step.num}
              </span>
              <h3 className="mb-2.5 text-xl">{step.title}</h3>
              <p className="text-[15px] text-muted">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
