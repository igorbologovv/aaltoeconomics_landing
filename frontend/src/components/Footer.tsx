import { useEffect, useMemo, useState } from "react";
import type { FooterPartner, FooterPartnerRow } from "../types/footerPartner";
import "../styles/components/footer.css";

const API_URL = import.meta.env.VITE_API_URL;

function getImageSrc(src: string) {
  if (!src) return "";

  if (src.startsWith("/uploads")) {
    return `${API_URL}${src}`;
  }

  return src;
}

function Footer() {
  const [partners, setPartners] = useState<FooterPartner[]>([]);

  useEffect(() => {
    async function loadPartners() {
      try {
        const response = await fetch(`${API_URL}/api/footer-partners`);

        if (!response.ok) {
          throw new Error("Failed to load footer partners");
        }

        const data = (await response.json()) as FooterPartner[];
        setPartners(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadPartners();
  }, []);

  const partnersByRow = useMemo(() => {
    const rows: Record<FooterPartnerRow, FooterPartner[]> = {
      1: [],
      2: [],
      3: [],
    };

    partners
      .filter((partner) => partner.isVisible)
      .sort((a, b) => a.row - b.row || a.order - b.order)
      .forEach((partner) => {
        rows[partner.row].push(partner);
      });

    return rows;
  }, [partners]);

  return (
    <footer className="site-footer">
      <div className="container footer">
        <div className="footer__contact">
          <h3 className="footer__title">Contact Info</h3>

          <div className="footer__contact-text">
            <p>Aalto Economics ry</p>
            <p>Konemiehentie 4</p>
            <p>02150 Espoo</p>
            <p>
              <a href="mailto:aaltoeconomics@ky.fi">aaltoeconomics@ky.fi</a>
            </p>
          </div>

          <img
            src="/images/aalto-logo.png"
            alt="Aalto Economics logo"
            className="footer__brand-logo"
          />
        </div>

        <div className="footer__partners">
          <h3 className="footer__title">Aalto Economics Partners</h3>

          <div className="footer__logos">
            {([1, 2, 3] as FooterPartnerRow[]).map((row) => {
              const rowPartners = partnersByRow[row];

              if (rowPartners.length === 0) return null;

              return (
                <div
                  key={row}
                  className={`footer__logos-row footer__logos-row--${row}`}
                >
                  {rowPartners.map((partner) => (
                    <a
                      key={partner.id}
                      className={`footer__partner footer__partner--${partner.size}`}
                      href={partner.url || undefined}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={partner.name}
                    >
                      <img
                        src={getImageSrc(partner.logo)}
                        alt={partner.name}
                        className="footer__logo-image"
                        style={{
                          transform: `translate(${partner.offsetX || 0}px, ${
                            -(partner.offsetY || 0)
                          }px) scale(${partner.scale || 1})`,
                        }}
                      />
                    </a>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;