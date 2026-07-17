import Image, { type ImageProps } from 'next/image';

export interface SponsorLogo {
  name: string;
  logo: ImageProps['src'];
  url?: string;
}

interface Props {
  sponsors: SponsorLogo[];
  label?: string;
}

/**
 * Copies of the sponsor list rendered inside the track. The scroll animation
 * shifts the track by -100% / COPIES, so `ribbon-scroll` in globals.css must be
 * updated alongside this number or the loop will stutter at the seam.
 */
const COPIES = 3;

export default function SponsorRibbon({ sponsors, label = 'Supported by' }: Props) {
  return (
    <section className="ribbon" aria-label={label}>
      <p className="ribbon__label">{label}</p>

      <div className="ribbon__viewport">
        <div className="ribbon__track">
          {Array.from({ length: COPIES }, (_, copy) => {
            const isDuplicate = copy > 0;

            return (
              <div key={copy} className="ribbon__copy" aria-hidden={isDuplicate || undefined}>
                {sponsors.map((sponsor) => (
                  <div key={sponsor.name} className="ribbon__slot">
                    {sponsor.url ? (
                      <a
                        className="ribbon__chip"
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        /* the duplicates are hidden from AT, so keep them out of the tab order too */
                        tabIndex={isDuplicate ? -1 : undefined}
                      >
                        <Image src={sponsor.logo} alt={sponsor.name} className="ribbon__img" />
                      </a>
                    ) : (
                      <span className="ribbon__chip">
                        <Image src={sponsor.logo} alt={sponsor.name} className="ribbon__img" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
