'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { newsItems, teamMembers } from '@/lib/data';

/* Presenters are stored as plain names in `newsItems` — resolve each against the
   team roster so the chip inherits that member's accent colour and LinkedIn. */
function findMember(name: string) {
  return teamMembers.find((m) => m.name === name);
}

export default function News() {
  const [featured, ...rest] = newsItems;

  return (
    <SectionWrapper id="news" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ NEWS ]</span>
          </div>
          <h2 className="shead__title">
            Latest from the <em>team</em>
          </h2>
          <p className="shead__lede">
            Milestones, competition results, and where TacklEmission is heading next.
          </p>
        </motion.header>

        <motion.article {...fadeUp(0.05)} className="newsfeat">
          <div className="newsfeat__main">
            <div className="newsfeat__rail">
              <span className="newsfeat__emblem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path
                    d="M7 4h10v5a5 5 0 0 1-10 0V4Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 5H4.5v1.5A3.5 3.5 0 0 0 7.6 10M17 5h2.5v1.5A3.5 3.5 0 0 1 16.4 10"
                    strokeLinecap="round"
                  />
                  <path d="M12 14v3m-3.5 3h7m-5-3h3l.8 3H7.7l.8-3Z" strokeLinejoin="round" />
                </svg>
              </span>
              {featured.award && <p className="newsfeat__award">{featured.award}</p>}
              <dl className="newsfeat__meta">
                <div>
                  <dt>Event</dt>
                  <dd>{featured.event}</dd>
                </div>
                <div>
                  <dt>Date</dt>
                  <dd>
                    <time dateTime={featured.isoDate}>{featured.date}</time>
                  </dd>
                </div>
                <div>
                  <dt>Host</dt>
                  <dd>{featured.host}</dd>
                </div>
              </dl>
            </div>

            <div className="newsfeat__body">
              <span className="newsfeat__flag">Announcement</span>
              <h3 className="newsfeat__headline">{featured.headline}</h3>

              {/* The photo floats into the story so the text wraps around it —
                  it stays a supporting detail and leaves no dead column. */}
              <div className="newsfeat__story">
                {featured.image && (
                  <figure className="newsfeat__figure">
                    <div className="newsfeat__figure-frame">
                      <Image
                        src={featured.image}
                        alt={featured.imageAlt ?? ''}
                        fill
                        sizes="(max-width: 880px) 100vw, 320px"
                        className="newsfeat__img"
                      />
                    </div>
                  </figure>
                )}

                {featured.body.map((p) => (
                  <p key={p.slice(0, 40)} className="newsfeat__p">
                    {p}
                  </p>
                ))}
              </div>

              {featured.presenters && featured.presenters.length > 0 && (
                <div className="newsfeat__who">
                  <span className="mono-label">Pitched by</span>
                  <ul className="chiplist">
                    {featured.presenters.map((name) => {
                      const m = findMember(name);
                      return (
                        <li key={name} style={{ ['--c' as string]: m?.color ?? 'var(--primary)' }}>
                          {m?.linkedin ? (
                            <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                              {name}
                            </a>
                          ) : (
                            name
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {featured.next && (
                <p className="newsnext">
                  <span aria-hidden="true" className="newsnext__dot" />
                  {featured.next}
                </p>
              )}

              {featured.url && (
                <a
                  className="btn btn--ghost btn--sm newsfeat__link"
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.83v2.19h.05c.53-1 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.05c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-4V8z" />
                  </svg>
                  Read the full post
                </a>
              )}
            </div>
          </div>

          {/* Acknowledgements close out the same card, so the award, the story
              and the thanks read as one announcement rather than two boxes. */}
          {(featured.judges || featured.thanks) && (
            <div className="newsfeat__thanks">
              {featured.judges && featured.judges.length > 0 && (
                <div className="thanks__group">
                  <span className="mono-label">With thanks to our judges</span>
                  <ul className="chiplist chiplist--plain">
                    {featured.judges.map((j) => (
                      <li key={j}>{j}</li>
                    ))}
                  </ul>
                  <p className="thanks__note">
                    For generously sharing their time, expertise and thoughtful feedback.
                  </p>
                </div>
              )}

              {featured.thanks && featured.thanks.length > 0 && (
                <div className="thanks__group">
                  <span className="mono-label">Support &amp; mentorship</span>
                  <ul className="thanks__list">
                    {featured.thanks.map((t) => (
                      <li key={t.name}>
                        <strong>{t.name}</strong> — {t.note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </motion.article>

        {/* Later announcements stack below the featured one as compact rows. */}
        {rest.length > 0 && (
          <ul className="newslist">
            {rest.map((n, i) => (
              <motion.li key={n.id} {...fadeUp(0.06 * i)} className="newsrow">
                <time className="newsrow__date" dateTime={n.isoDate}>
                  {n.date}
                </time>
                <div className="newsrow__body">
                  <h4>{n.headline}</h4>
                  <p>{n.body[0]}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </SectionWrapper>
  );
}
