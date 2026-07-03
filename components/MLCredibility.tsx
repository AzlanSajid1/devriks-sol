import Reveal from "./Reveal";

export default function MLCredibility() {
  return (
    <section className="border-y border-border-soft bg-bg-alt py-[108px]">
      <Reveal className="mx-auto max-w-[800px] px-7 text-left">
        <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
          UNDER THE HOOD
        </p>
        <h2 className="mb-[18px] text-[clamp(28px,3.6vw,42px)] leading-[1.14]">
          Not a guess. A model.
        </h2>
        <p className="max-w-[58ch] text-[17px] text-muted">
          We don&apos;t rank customers by &quot;days since last order&quot;
          and call it churn risk. Every report runs on{" "}
          <strong className="text-text">BG/NBD</strong> and{" "}
          <strong className="text-text">Gamma-Gamma</strong> — probabilistic
          models built specifically for predicting purchase timing and
          customer value, the same class of models used across e-commerce
          and subscription businesses. Devriks Sol is a small applied
          machine learning team; this is the kind of problem we build for.
        </p>
      </Reveal>
    </section>
  );
}
