import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import LOGO_URL from './assets/logo.png';
import COOROY_IMAGE from './assets/cooroy.jpg';
import WAGYU_FIELD_IMAGE from './assets/wagyu.webp';

const FORMSPREE_ID = (typeof window !== "undefined" && window.FORMSPREE_ID) || "";
const palette = { black: "#0A0A0A", gold: "#BFA14A", silver: "#C9C9C9" };

function SEO({ title, description, url = "https://noosawagyu.example", image = LOGO_URL }) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = title;
    const ensure = (selector, create) => {
      let el = document.head.querySelector(selector);
      if (!el) { el = create(); document.head.appendChild(el); }
      return el;
    };
    const desc = ensure('meta[name="description"]', () => {
      const m = document.createElement('meta'); m.setAttribute('name','description'); return m;
    });
    desc.setAttribute('content', description);
    const ogTitle = ensure('meta[property="og:title"]', () => document.createElement('meta'));
    ogTitle.setAttribute('property','og:title'); ogTitle.setAttribute('content', title);
    const ogDesc = ensure('meta[property="og:description"]', () => document.createElement('meta'));
    ogDesc.setAttribute('property','og:description'); ogDesc.setAttribute('content', description);
    const ogUrl = ensure('meta[property="og:url"]', () => document.createElement('meta'));
    ogUrl.setAttribute('property','og:url'); ogUrl.setAttribute('content', url);
    const ogImage = ensure('meta[property="og:image"]', () => document.createElement('meta'));
    ogImage.setAttribute('property','og:image'); ogImage.setAttribute('content', image);
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [title, description, url, image]);
  return null;
}

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>
);

const GoldRule = () => (
  <div aria-hidden className="w-24 h-[2px]" style={{ background: `linear-gradient(90deg, ${palette.gold}, ${palette.silver})` }} />
);

function Button({ children, variant = "gold", onClick, className = "", as = "button", href }) {
  const base = (
    <span
      className={`inline-flex items-center justify-center px-5 py-3 rounded-2xl text-sm tracking-wide transition-all shadow-sm hover:shadow-md focus:outline-none ${className}`}
      style={{
        color: variant === "ghost" ? palette.silver : palette.black,
        background: variant === "ghost" ? "transparent" : `linear-gradient(135deg, ${palette.gold}, ${palette.silver})`,
        border: variant === "ghost" ? `1px solid ${palette.silver}` : "none",
        fontFamily: variant === "ghost" ? "Inter Tight, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" : 'Cormorant Garamond, "Times New Roman", serif',
      }}
    >{children}</span>
  );
  if (as === "a" && href) { return <a href={href} onClick={onClick} className="inline-block focus:outline-none" aria-label={typeof children === "string" ? children : undefined}>{base}</a>; }
  return <button type="button" onClick={onClick} className="focus:outline-none" aria-label={typeof children === "string" ? children : undefined}>{base}</button>;
}

export default function NoosaWagyuSite() {
  const [logoFailed, setLogoFailed] = useState(false);
  const [wlStatus, setWlStatus] = useState(null);

  useEffect(() => {
    console.log('[Assets]', { LOGO_URL, COOROY_IMAGE, WAGYU_FIELD_IMAGE });
  }, []);

  return (
    <>
      <SEO
        title="Noosa Wagyu — Naturally Exquisite"
        description="100% Fullblood Wagyu raised regeneratively in the Cooroy hinterland. Limited releases for chefs and discerning locals. Join the waitlist."
        url="https://noosawagyu.example"
        image={LOGO_URL}
      />

      <a href="#story" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded-md">Skip to content</a>

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-[#1d1d1d]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="text-sm tracking-wide font-serif" style={{ color: palette.gold }}>
            Noosa Wagyu
          </a>
          <nav className="hidden md:flex gap-6 text-xs">
            <a href="#story" className="hover:underline">Story</a>
            <a href="#provenance" className="hover:underline">Provenance</a>
            <a href="#releases" className="hover:underline">Releases</a>
            <a href="#trade" className="hover:underline">Trade</a>
            <a href="#waitlist" className="hover:underline">Waitlist</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <a href="#waitlist" className="hidden md:inline-block"><span className="px-3 py-2 rounded-xl text-xs" style={{background:`linear-gradient(135deg, ${palette.gold}, ${palette.silver})`, color: palette.black}}>Join</span></a>
        </div>
      </header>

      <main className="min-h-screen">
        {/* HERO (Cooroy) */}
        <section className="relative overflow-hidden">
          <img src={COOROY_IMAGE} alt="Cooroy Mountain" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <Container>
            <div className="relative grid md:grid-cols-2 gap-10 items-center py-24 text-[#d9d9d9]">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <GoldRule />
                <h1 className="mt-6 text-4xl md:text-6xl leading-tight font-serif text-[#F2F2F2]">
                  Naturally Exquisite
                </h1>
                <p className="mt-5 text-base md:text-lg">
                  100% Fullblood Wagyu raised regeneratively on coastal hinterland pastures. Family‑owned and sustainably managed — we handcraft limited releases for discerning palates.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button as="a" href="#waitlist">Join Waiting List</Button>
                  <Button as="a" href="#trade" variant="ghost">Chef & Trade Enquiry</Button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="flex justify-center">
                <div className="aspect-square w-[280px] sm:w-[340px] md:w-[420px] rounded-3xl flex items-center justify-center bg-black/40 border border-[#1d1d1d]">
                  {!logoFailed ? (
                    <img src={LOGO_URL} alt="Noosa Wagyu logo" className="w-3/4 h-auto" onError={() => setLogoFailed(true)} loading="lazy" decoding="async" />
                  ) : (
                    <div className="text-center text-[#ccc]" aria-live="polite">Noosa Wagyu</div>
                  )}
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* STORY with full-screen Wagyu background */}
        <section id="story" className="py-16 border-t border-[#1d1d1d] relative scroll-mt-24">
          <img src={WAGYU_FIELD_IMAGE} alt="Wagyu cattle on pasture" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <Container>
            <div className="relative grid md:grid-cols-2 gap-10 items-start text-[#e5e5e5]">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold font-serif text-[#efefef]">Raised in the Foothills</h2>
                <p className="text-sm mt-3">
                  Our herd is 100% Fullblood Wagyu — raised in the foothills of Cooroy Mountain on regenerative pastures and cared for with the highest animal welfare standards. Regenerative farming principles guide every aspect of our operation: building soil health, restoring biodiversity, and reducing stress for our cattle.
                </p>
                <p className="text-sm mt-3">
                  This calm, low-stress environment translates directly into exceptional quality beef — naturally high in marbling, tenderness, and flavour. As a local family-owned farm, we welcome visitors (by appointment) who wish to see first-hand how our Wagyu are raised with care and respect.
                </p>
                <GoldRule />
              </div>
            </div>
          </Container>
        </section>

        {/* PROVENANCE */}
        <section id="provenance" className="py-20 border-t border-[#1d1d1d] scroll-mt-24">
          <Container>
            <h2 className="text-3xl mb-6 font-serif" style={{ color: palette.gold }}>Provenance</h2>
            <p className="text-[#d1d1d1] max-w-3xl">
              Every cut of Noosa Wagyu carries the flavour of the land — nourished by Cooroy Mountain spring water, open pastures, and regenerative soil systems. Our herd is traceable from birth, ensuring full transparency and authenticity for every discerning customer.
            </p>
          </Container>
        </section>

        {/* LIMITED RELEASES */}
        <section id="releases" className="py-20 border-t border-[#1d1d1d] scroll-mt-24">
          <Container>
            <h2 className="text-3xl mb-6 font-serif" style={{ color: palette.gold }}>Limited Releases</h2>
            <p className="text-[#d1d1d1] mb-10 max-w-3xl">
              Our beef is available in small-batch seasonal releases. Each allocation is crafted with precision, patience, and respect for the animal. Due to demand, waiting lists apply — ensuring fair access for customers and chefs.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="p-6 bg-[#101010] rounded-2xl border border-[#1d1d1d]">
                <h3 className="text-lg mb-2 font-serif text-[#c9c9c9]">Signature Release</h3>
                <p className="text-sm text-[#d5d5d5]">High-marbling Wagyu, dry-aged and crafted for balance and depth.</p>
              </article>
              <article className="p-6 bg-[#101010] rounded-2xl border border-[#1d1d1d]">
                <h3 className="text-lg mb-2 font-serif text-[#c9c9c9]">Hinterland Reserve</h3>
                <p className="text-sm text-[#d5d5d5]">A rare selection from lush summer pastures, refined through regenerative grazing.</p>
              </article>
              <article className="p-6 bg-[#101010] rounded-2xl border border-[#1d1d1d]">
                <h3 className="text-lg mb-2 font-serif text-[#c9c9c9]">Chef’s Cut</h3>
                <p className="text-sm text-[#d5d5d5]">Exclusive allocations to culinary partners who value provenance and purity.</p>
              </article>
            </div>
          </Container>
        </section>

        {/* TRADE */}
        <section id="trade" className="py-20 border-t border-[#1d1d1d] scroll-mt-24">
          <Container>
            <h2 className="text-3xl mb-6 font-serif" style={{ color: palette.gold }}>Trade Enquiries</h2>
            <p className="text-[#d1d1d1] mb-6 max-w-3xl">
              We supply select chefs, butchers, and hospitality venues across South‑East Queensland. All trade relationships are built on shared values of quality, sustainability, and respect for the animal.
            </p>
            <Button as="a" href="#waitlist" variant="ghost">Request Allocation Info</Button>
          </Container>
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="py-20 border-t border-[#1d1d1d] scroll-mt-24">
          <Container>
            <h2 className="text-3xl mb-3 font-serif" style={{ color: palette.gold }}>Join the Waiting List</h2>
            <p className="text-sm text-[#d1d1d1] mb-6 max-w-3xl">
              Due to small‑batch, high‑welfare production, we release limited allocations. Leave your details and we’ll notify you when the next release opens.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const name = e.currentTarget.querySelector('#wl-name').value;
                const email = e.currentTarget.querySelector('#wl-email').value;
                const consent = e.currentTarget.querySelector('#wl-consent').checked;
                if (!name || !email || !consent) {
                  setWlStatus({ type: "error", msg: "Please provide name, email, and consent." });
                  return;
                }
                const payload = {
                  name, email,
                  message: e.currentTarget.querySelector('#wl-notes').value || "No notes",
                  consent: consent ? "yes" : "no",
                  source: "Noosa Wagyu waitlist",
                };
                if (FORMSPREE_ID) {
                  try {
                    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json", Accept: "application/json" },
                      body: JSON.stringify(payload),
                    });
                    let data = {}; try { data = await res.json(); } catch {}
                    if (res.ok) {
                      setWlStatus({ type: "ok", msg: "Thanks — you’re on the list. We’ll be in touch soon." });
                      e.currentTarget.reset();
                    } else {
                      setWlStatus({ type: "error", msg: data?.error || "Submission failed. Please try again." });
                    }
                  } catch {
                    setWlStatus({ type: "error", msg: "Network error. Please try again." });
                  }
                } else {
                  const subject = encodeURIComponent("Noosa Wagyu — Waiting List");
                  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nNotes: ${e.currentTarget.querySelector('#wl-notes').value || "No notes"}`);
                  window.location.href = `mailto:noosawagyu@gmail.com?subject=${subject}&body=${body}`;
                  setWlStatus({ type: "ok", msg: "Opening your email app to send the request…" });
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
              noValidate
            >
              <label className="sr-only" htmlFor="wl-name">Name</label>
              <input id="wl-name" placeholder="Name" className="bg-[#0f0f0f] border border-[#1d1d1d] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2a2a2a]" autoComplete="name" required />
              <label className="sr-only" htmlFor="wl-email">Email</label>
              <input id="wl-email" placeholder="Email" type="email" inputMode="email" className="bg-[#0f0f0f] border border-[#1d1d1d] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2a2a2a]" autoComplete="email" required />
              <Button className="w-full" as="button">Join List</Button>
              <label className="sr-only" htmlFor="wl-notes">Notes</label>
              <textarea id="wl-notes" placeholder="Notes (e.g., preferred cuts, chef/venue) — optional" className="md:col-span-2 bg-[#0f0f0f] border border-[#1d1d1d] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#2a2a2a] min-h-[90px]" />
              <label className="flex items-start gap-2 text-xs text-[#cfcfcf] md:col-span-3">
                <input id="wl-consent" type="checkbox" className="mt-1" aria-label="Consent to be contacted about Noosa Wagyu releases" required />
                I agree to be contacted about Noosa Wagyu releases and understand my details are stored securely.
              </label>
            </form>

            {wlStatus && (
              <div className={`mt-3 text-sm ${wlStatus?.type === "ok" ? "text-green-400" : "text-red-400"}`} role="status" aria-live="polite">
                {wlStatus?.msg}
              </div>
            )}
          </Container>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-[#1d1d1d] scroll-mt-24">
          <Container>
            <h2 className="text-3xl mb-6 font-serif" style={{ color: palette.gold }}>Contact</h2>
            <div className="space-y-3 text-sm text-[#d5d5d5]">
              <p><Mail size={14} className="inline mr-2 text-[#bfa14a]" aria-hidden /> <a href="mailto:noosawagyu@gmail.com" className="hover:underline">noosawagyu@gmail.com</a></p>
              <p><Phone size={14} className="inline mr-2 text-[#bfa14a]" aria-hidden /> <a href="tel:0423889035" className="hover:underline">0423 889 035</a></p>
              <p>Farm visits welcome by appointment — experience our regenerative practices firsthand.</p>
            </div>
          </Container>
        </section>

        <footer className="py-10 text-center text-xs" style={{ color: "#9a9a9a" }}>
          <div className="mb-3 mx-auto w-24 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${palette.gold}, transparent)` }} />
          <div>© {new Date().getFullYear()} Noosa Wagyu — Naturally Exquisite</div>
        </footer>
      </main>
    </>
  );
}
