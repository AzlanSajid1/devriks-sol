import Button from "./Button";
import Reveal from "./Reveal";
import StatValue from "./StatValue";

const STATS = [
  { value: 300, label: "customers analysed" },
  { value: 58.7, decimals: 1, suffix: "%", label: "flagged at risk" },
  { value: 2126921, prefix: "PKR ", label: "revenue at risk (12m)" },
  { value: 53107839, prefix: "PKR ", label: "total predicted lifetime value" },
];

const CHART_BARS = [38, 62, 45, 80, 55, 70, 30];

export default function SampleReport() {
  return (
    <section id="sample" className="py-[108px]">
      <div className="mx-auto grid max-w-(--container-maxw) grid-cols-1 items-center gap-14 px-7 tab:grid-cols-2">
        <Reveal>
          <p className="mb-3.5 font-mono text-[12.5px] font-medium tracking-[.14em] text-green">
            SEE IT FOR YOURSELF
          </p>
          <h2 className="mb-[18px] max-w-[15ch] text-[clamp(28px,3.6vw,42px)] leading-[1.14]">
            This is what one report looks like.
          </h2>
          <p className="mb-11 max-w-[58ch] text-[17px] text-muted">
            Real structure, illustrative numbers — a full report generated
            from a year of transaction data.
          </p>

          <div className="mb-9 grid grid-cols-2 gap-5">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <StatValue
                  value={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <span className="text-[12.5px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>

          <Button href="/sample-report.html" download="RetainIQ-sample-report.html">
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download sample report
          </Button>
        </Reveal>

        <Reveal aria-hidden>
          <div className="overflow-hidden rounded-card border border-border bg-surface shadow-[0_30px_60px_-20px_rgba(0,0,0,.55)]">
            <div className="flex gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-surface-2" />
            </div>
            <div className="p-7">
              <div className="mb-1 font-display text-[19px]">
                RetainIQ — Churn Analysis Report
              </div>
              <div className="mb-5 text-xs text-muted-2">
                Powered by BG/NBD + Gamma-Gamma models
              </div>
              <div className="mb-[22px] grid grid-cols-4 gap-2.5">
                <div className="rounded-lg bg-surface-2 px-2 py-3 text-center">
                  <b className="block font-mono text-sm text-green">300</b>
                  <small className="text-[9.5px] text-muted-2">
                    Total Customers
                  </small>
                </div>
                <div className="rounded-lg bg-surface-2 px-2 py-3 text-center">
                  <b className="block font-mono text-sm text-green">176</b>
                  <small className="text-[9.5px] text-muted-2">At Risk</small>
                </div>
                <div className="rounded-lg bg-surface-2 px-2 py-3 text-center">
                  <b className="block font-mono text-sm text-green">
                    PKR 2.1M
                  </b>
                  <small className="text-[9.5px] text-muted-2">
                    Revenue at Risk
                  </small>
                </div>
                <div className="rounded-lg bg-surface-2 px-2 py-3 text-center">
                  <b className="block font-mono text-sm text-green">
                    PKR 53.1M
                  </b>
                  <small className="text-[9.5px] text-muted-2">
                    Predicted CLV
                  </small>
                </div>
              </div>
              <div className="flex h-20 items-end gap-2 border-t border-border-soft pt-2.5">
                {CHART_BARS.map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-t-[3px] bg-linear-to-b from-green to-blue opacity-85"
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
