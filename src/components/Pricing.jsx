const PLANS = [
  {
    name: 'Starter',
    price: '$49',
    unit: '/ video',
    blurb: 'For a single clip that needs to look right.',
    features: ['Up to 3 minutes of footage', 'Colour pass + audio cleanup', 'One revision round', '48-hour delivery'],
    cta: 'Choose Starter',
  },
  {
    name: 'Studio',
    price: '$149',
    unit: '/ video',
    blurb: 'The full treatment for launches and campaigns.',
    features: [
      'Up to 15 minutes of footage',
      'Captions in 30+ languages',
      'Three revision rounds',
      '3 vertical cutdowns included',
      '24-hour delivery',
    ],
    cta: 'Choose Studio',
    featured: true,
  },
  {
    name: 'Retainer',
    price: '$899',
    unit: '/ month',
    blurb: 'A steady editing pipeline for teams shipping weekly.',
    features: [
      '10 videos per month',
      'Priority queue, dedicated editor',
      'Brand kit & template library',
      'Unlimited revisions',
      'Weekly strategy call',
    ],
    cta: 'Talk to Sara',
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="shell">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Pricing</span>
          <h2>Simple rates, finished cuts.</h2>
          <p className="section-sub">
            Every plan includes a human review before delivery. No seats, no per-export fees.
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <article
              className={plan.featured ? 'price-card is-featured' : 'price-card'}
              key={plan.name}
              data-reveal
            >
              {plan.featured && <span className="price-badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="price-blurb">{plan.blurb}</p>
              <p className="price-line">
                <strong>{plan.price}</strong>
                <span>{plan.unit}</span>
              </p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className={plan.featured ? 'btn btn-full' : 'btn btn-ghost btn-full'} href="#contact">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
