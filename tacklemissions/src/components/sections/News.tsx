'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { fadeUp } from '@/lib/motion';
import { newsItems, newsCategoryColors, type NewsItem } from '@/lib/data';

const ALL = 'All';

function NewsEntry({ item }: { item: NewsItem }) {
  const judgesHaveRoles = item.judges?.some((j) => j.role) ?? false;
  const meta = [item.event, item.host].filter(Boolean).join(' · ');

  return (
    <article
      className="newsentry"
      style={{ ['--c' as string]: newsCategoryColors[item.category] }}
    >
      <div className="newsentry__head">
        <span className="newsentry__cat">{item.category}</span>
        <time className="newsentry__date" dateTime={item.isoDate}>
          {item.date}
        </time>
      </div>

      <h3 className="newsentry__title">{item.headline}</h3>
      {meta && <p className="newsentry__meta">{meta}</p>}

      <div className="newsentry__body">
        {item.body.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
      </div>

      {item.image && (
        <figure className="newsentry__figure">
          <div className="newsentry__figure-frame">
            <Image
              src={item.image}
              alt={item.imageAlt ?? ''}
              fill
              sizes="(max-width: 880px) 100vw, 500px"
              className="newsentry__img"
            />
          </div>
        </figure>
      )}

      {(item.judges || item.thanks) && (
        <div className="newsentry__ack">
          {item.judges && item.judges.length > 0 && (
            <div className="ack__group">
              <span className="mono-label">With thanks to our judges</span>
              {judgesHaveRoles ? (
                <ul className="ack__list">
                  {item.judges.map((j) => (
                    <li key={j.name}>
                      <strong>{j.name}</strong>
                      {j.role && <> — {j.role}</>}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="ack__chips">
                  {item.judges.map((j) => (
                    <li key={j.name}>{j.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {item.thanks && item.thanks.length > 0 && (
            <div className="ack__group">
              <span className="mono-label">Support &amp; mentorship</span>
              <ul className="ack__list">
                {item.thanks.map((t) => (
                  <li key={t.name}>
                    <strong>{t.name}</strong> — {t.note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {item.url && (
        <a
          className="newsentry__link"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.urlLabel ?? 'Read more'} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}

export default function News() {
  const [active, setActive] = useState<string>(ALL);

  /* Built from the categories actually present, so the row never offers a
     filter that would come back empty. */
  const categories = useMemo(() => {
    const seen: string[] = [];
    newsItems.forEach((n) => {
      if (!seen.includes(n.category)) seen.push(n.category);
    });
    return [ALL, ...seen];
  }, []);

  const visible = active === ALL ? newsItems : newsItems.filter((n) => n.category === active);

  return (
    <SectionWrapper id="news" className="section section--bg">
      <div className="wrap">
        <motion.header {...fadeUp()} className="shead">
          <div className="shead__rule">
            <span className="shead__coord">[ NEWS ]</span>
          </div>
          <h2 className="shead__title">
            News &amp; <em>announcements</em>
          </h2>
          <p className="shead__lede">
            Stay up to date with the latest awards, events and milestones from the TacklEmission
            team.
          </p>
        </motion.header>

        {newsItems.length > 0 && (
          <motion.div {...fadeUp(0.04)} className="newsfilter" role="group" aria-label="Filter news by category">
            <span className="newsfilter__label mono-label">Filter by category</span>
            <div className="newsfilter__row">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`newsfilter__btn${active === c ? ' is-active' : ''}`}
                  aria-pressed={active === c}
                  onClick={() => setActive(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="newsfeed">
          {visible.map((item, i) => (
            <motion.div key={item.id} {...fadeUp(0.05 + 0.06 * i)}>
              <NewsEntry item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
