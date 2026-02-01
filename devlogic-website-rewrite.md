# DevLogic.hr — Kompletna specifikacija za rewrite web stranice

## KONTEKST

DevLogic je paušalni obrt (flat-rate sole proprietorship) u Hrvatskoj. Vlasnik je solo developer koji nudi usluge razvoja softvera, testiranja i DevOps-a. Obrt je novootvoren, nema referenci, nema klijenata, nema portfolia. Stranica mora biti 100% iskrena — nikakve lažne tvrdnje o prošlim klijentima, timu, ili iskustvu s kompanijama. Stranica je dvojezična (EN/HR).

---

## SEKCIJA 1: NAVIGACIJA

### Trenutno:
`DevLogic | About | Services | Products | Contact | EN/HR | Get Started`

### Promijeni u:
`DevLogic | Usluge | Projekti | O meni | Kontakt | EN/HR | Razgovarajmo`

**Engleska verzija:**
`DevLogic | Services | Projects | About | Contact | EN/HR | Let's Talk`

### Obrazloženje:
- "Products" sekcija se briše (Coming Soon proizvodi ne donose kredibilitet)
- "Get Started" je preopćenito — "Razgovarajmo" / "Let's Talk" je osobnije i manje prodajno
- "About" postaje "O meni" jer je vlasnik jedna osoba
- Redoslijed: Usluge prvo (to klijent traži), pa Projekti, pa O meni

---

## SEKCIJA 2: HERO (Gornji dio stranice)

### Trenutno (EN):
- Badge: "Now accepting new projects for 2024"
- Heading: "Logic Meets Innovation"
- Subheading: "We engineer exceptional software solutions that transform businesses. Strategic thinking, technical excellence, and unwavering commitment to your success."
- CTA: "Start Your Project →" + "Explore Services"

### Promijeni u (HR):

**Badge:** `Dostupan za nove projekte`

**Heading:**
```
Razvoj softvera.
Od ideje do produkcije.
```

**Subheading:**
```
Pomažem malim timovima i startupima pretvoriti ideje u funkcionalne web aplikacije,
uspostaviti automatizirano testiranje i postaviti pouzdanu infrastrukturu.
```

**CTA:**
- Primarni: `Razgovarajmo o projektu →`
- Sekundarni: `Pogledaj usluge`

### Engleska verzija:

**Badge:** `Available for new projects`

**Heading:**
```
Software Development.
From Idea to Production.
```

**Subheading:**
```
I help small teams and startups turn ideas into working web applications,
set up automated testing, and build reliable infrastructure.
```

**CTA:**
- Primary: `Let's Talk About Your Project →`
- Secondary: `View Services`

### Obrazloženje:
- Konkretan heading umjesto generičkog slogana
- "Pomažem" umjesto "We engineer" — iskreno, jedna osoba
- Jasno kaže ŠTO radiš i ZA KOGA
- Badge bez godine (ne moraš ga ažurirati svake godine)

---

## SEKCIJA 3: ABOUT / O MENI

### Trenutno:
- Heading: "Engineering Excellence, Delivered"
- Text: "DevLogic is a premium technology company specialising in innovative software solutions, product design, and technical consulting. We combine strategic thinking with technical excellence to deliver exceptional results that drive business growth."
- "Founded with a vision to bridge the gap between complex technology and business needs, we've helped companies across industries transform their digital presence and operations."
- Kartice: Mission, Vision, Values, Approach

### Promijeni u (HR):

**Tag iznad headinga:** `O meni`

**Heading:** `Tko stoji iza DevLogica`

**Tekst (2 paragrafa):**
```
Ja sam Igor — full-stack developer s iskustvom u razvoju web aplikacija,
automatiziranom testiranju i DevOps praksama. DevLogic sam pokrenuo jer
vjerujem da mali timovi i startupi zaslužuju istu razinu tehničke kvalitete
koju pružaju velike agencije, ali bez agencijskih cijena i birokracije.

Radim s tehnologijama poput React/Next.js, Node.js, TypeScript i Python.
Koristim AI alate za ubrzanje razvoja, ali svaki redak koda prolazi kroz
ljudsku kontrolu kvalitete. Ako tražiš nekoga tko će razumjeti tvoj
problem i predložiti praktično rješenje — javi se.
```

**Umjesto kartica Mission/Vision/Values/Approach, stavi:**

Tri kartice s konkretnim brojevima ili činjenicama:

| Kartica | Naslov | Opis |
|---------|--------|------|
| 1 | Fokus na kvalitetu | Svaki projekt dolazi s automatiziranim testovima i CI/CD pipelineom |
| 2 | Direktna komunikacija | Radiš direktno sa mnom — bez account managera i middlemana |
| 3 | Transparentne cijene | Fiksna cijena ili satnica — dogovorimo unaprijed, bez iznenađenja |

### Engleska verzija:

**Tag:** `About`

**Heading:** `Who's Behind DevLogic`

**Text:**
```
I'm Igor — a full-stack developer with experience in web application
development, automated testing, and DevOps practices. I started DevLogic
because I believe small teams and startups deserve the same level of
technical quality that big agencies provide, but without agency prices
and bureaucracy.

I work with technologies like React/Next.js, Node.js, TypeScript, and Python.
I use AI tools to accelerate development, but every line of code goes through
human quality control. If you're looking for someone who will understand your
problem and suggest a practical solution — let's talk.
```

**Cards:**

| Card | Title | Description |
|------|-------|-------------|
| 1 | Quality Focus | Every project comes with automated tests and a CI/CD pipeline |
| 2 | Direct Communication | You work directly with me — no account managers or middlemen |
| 3 | Transparent Pricing | Fixed price or hourly rate — agreed upfront, no surprises |

### Obrazloženje:
- Osobno, iskreno, bez korporativnog govora
- Konkretne tehnologije umjesto buzzwordova
- Tri kartice koje komuniciraju stvarnu prednost solo developera

---

## SEKCIJA 4: USLUGE / SERVICES

### Trenutno:
5 usluga: Product Design, Software Development, Software Testing, DevOps, Consulting — svaka s dugim popisom podstavki

### Promijeni u — 3 fokusirane usluge:

#### Usluga 1: Web Razvoj / Web Development

**HR:**
```
Naslov: Web Razvoj
Opis: Izrada web aplikacija od nule ili nadogradnja postojećih sustava.
      React, Next.js, Node.js — moderan stack, čist kod, responsivan dizajn.
Stavke:
- Full-stack web aplikacije
- Landing stranice i poslovni webovi
- API integracije i backend razvoj
- Optimizacija performansi
```

**EN:**
```
Title: Web Development
Description: Building web applications from scratch or upgrading existing systems.
             React, Next.js, Node.js — modern stack, clean code, responsive design.
Items:
- Full-stack web applications
- Landing pages and business websites
- API integrations and backend development
- Performance optimization
```

#### Usluga 2: Testiranje i QA / Testing & QA

**HR:**
```
Naslov: Testiranje i QA
Opis: Automatizirano testiranje i osiguranje kvalitete.
      Postavljam test framework od nule ili poboljšavam postojeći QA proces.
Stavke:
- Automatizacija testova (Cypress, Playwright, Selenium)
- Test strategija i planiranje
- CI/CD integracija testova
- Performance i load testiranje
```

**EN:**
```
Title: Testing & QA
Description: Automated testing and quality assurance.
             I set up test frameworks from scratch or improve your existing QA process.
Items:
- Test automation (Cypress, Playwright, Selenium)
- Test strategy and planning
- CI/CD test integration
- Performance and load testing
```

#### Usluga 3: DevOps i Infrastruktura / DevOps & Infrastructure

**HR:**
```
Naslov: DevOps i Infrastruktura
Opis: Postavljanje CI/CD pipelinea, kontejnerizacija i cloud infrastruktura.
      Automatiziram deployment da se tvoj tim može fokusirati na razvoj.
Stavke:
- CI/CD pipelinei (GitHub Actions, GitLab CI)
- Docker i kontejnerizacija
- Cloud setup (AWS, Hetzner, DigitalOcean)
- Monitoring i alerting
```

**EN:**
```
Title: DevOps & Infrastructure
Description: Setting up CI/CD pipelines, containerization, and cloud infrastructure.
             I automate deployment so your team can focus on development.
Items:
- CI/CD pipelines (GitHub Actions, GitLab CI)
- Docker and containerization
- Cloud setup (AWS, Hetzner, DigitalOcean)
- Monitoring and alerting
```

### Obrazloženje:
- 3 usluge umjesto 5 — vjerodostojno za jednu osobu
- Product Design i Consulting su izbačeni (ako klijent treba consulting, to će isplivati u razgovoru)
- Konkretne tehnologije u opisu umjesto generičkih buzzwordova
- "Postavljam" / "Automatiziram" umjesto "We deliver" — osobno

---

## SEKCIJA 5: PROJEKTI (zamjenjuje "Products That Deliver")

### Trenutno:
3 proizvoda (ResumeAI Pro, UptimeWatch, TestFlaw) — svi "Coming Soon" s "Notify Me" buttonom

### Promijeni u:

**Tag:** `Projekti` / `Projects`
**Heading (HR):** `Na čemu radim`
**Heading (EN):** `What I'm Working On`
**Podtekst (HR):** `Open-source projekti i alati koje razvijam u slobodno vrijeme.`
**Podtekst (EN):** `Open-source projects and tools I build in my spare time.`

**Prikaži samo JEDAN projekt — onaj koji je najdalje u razvoju (ResumeAI Pro):**

**HR:**
```
Naslov: ResumeAI Pro
Podnaslov: AI-powered alat za optimizaciju životopisa
Opis: Alat koji pomaže kandidatima prilagoditi životopis specifičnom
      oglasu za posao koristeći AI analizu.
Status badge: "U razvoju" (umjesto "Coming Soon")
Link: GitHub repozitorij → (ako je public) ILI "Demo uskoro"
```

**EN:**
```
Title: ResumeAI Pro
Subtitle: AI-powered resume optimization tool
Description: A tool that helps candidates tailor their resume to specific
             job postings using AI analysis.
Status badge: "In Development" (instead of "Coming Soon")
Link: GitHub repo → (if public) OR "Demo coming soon"
```

**ALTERNATIVA — ako ne želiš prikazivati projekte u razvoju:**

Potpuno ukloni ovu sekciju i zamijeni je sa sekcijom **"Kako radim" / "How I Work"** — proces u 3-4 koraka:

**HR:**
```
Heading: Kako radim

Korak 1: Razgovor
Besplatni uvodni poziv od 30 minuta. Razumijemo tvoj problem,
definiramo opseg i rokove.

Korak 2: Ponuda
U roku 2-3 dana šaljem detaljnu ponudu s fiksnom cijenom
ili procjenom po satu.

Korak 3: Razvoj
Iterativan razvoj s redovitim updateima.
Pristup Git repozitoriju i staging okruženju.

Korak 4: Isporuka
Deployment na produkciju, dokumentacija, i
30 dana besplatne podrške nakon launcha.
```

**EN:**
```
Heading: How I Work

Step 1: Discovery Call
Free 30-minute introductory call. We understand your problem,
define scope, and set timelines.

Step 2: Proposal
Within 2-3 days I send a detailed proposal with a fixed price
or hourly estimate.

Step 3: Development
Iterative development with regular updates.
Access to Git repository and staging environment.

Step 4: Delivery
Production deployment, documentation, and
30 days of free support after launch.
```

### Obrazloženje:
- "Coming Soon" proizvodi škode više nego pomažu novom obrtu
- Proces rada je puno korisniji — klijentu pokazuje profesionalnost
- "Besplatni poziv od 30 min" je nizak barrier za prvi kontakt

---

## SEKCIJA 6: KONTAKT FORMA

### Trenutno:
5 polja: Your Name, Email Address, Company, Service Interested In (dropdown), Your Message

### Promijeni u — 3 polja:

**HR:**
```
Heading: Razgovarajmo
Podtekst: Imaš ideju ili projekt? Javi se — odgovaram unutar 24 sata.

Polja:
1. Ime (placeholder: "Tvoje ime")
2. Email (placeholder: "tvoj@email.com")
3. Poruka (placeholder: "Opiši ukratko što trebaš...")

Button: "Pošalji poruku →"

Ispod forme:
Email: info@devlogic.hr
Ili zakaži poziv: [link na Calendly/Cal.com]
```

**EN:**
```
Heading: Let's Talk
Subtext: Have an idea or project? Reach out — I respond within 24 hours.

Fields:
1. Name (placeholder: "Your name")
2. Email (placeholder: "your@email.com")
3. Message (placeholder: "Briefly describe what you need...")

Button: "Send Message →"

Below form:
Email: info@devlogic.hr
Or schedule a call: [Calendly/Cal.com link]
```

### Obrazloženje:
- 3 polja umjesto 5 — manji friction, veći conversion
- "Company" polje je nepotrebno za prvi kontakt
- Dropdown za tip usluge je nepotreban — to ćete raspraviti u razgovoru
- Calendly/Cal.com link kao alternativa za ljude koji preferiraju direktan poziv
- "Odgovaram unutar 24 sata" — konkretan commitment

---

## SEKCIJA 7: FOOTER

### Trenutno:
DevLogic logo + opis + Services linkovi + Legal (Privacy Policy)

### Promijeni u:

**HR:**
```
DevLogic
Razvoj softvera, testiranje i DevOps.
Paušalni obrt, Hrvatska.

Usluge          Linkovi            Kontakt
Web Razvoj      GitHub             info@devlogic.hr
Testiranje      LinkedIn
DevOps

© 2025 DevLogic. Sva prava pridržana.
```

**EN:**
```
DevLogic
Software development, testing, and DevOps.
Sole proprietorship, Croatia.

Services           Links             Contact
Web Development    GitHub            info@devlogic.hr
Testing & QA       LinkedIn
DevOps

© 2025 DevLogic. All rights reserved.
```

### Obrazloženje:
- Dodaj GitHub i LinkedIn linkove — za novog developera bez portfolia, ovo su ključni signali kredibiliteta
- "Paušalni obrt, Hrvatska" — iskrenost o pravnom statusu
- Makni "Made with ❤️ by DevLogic Team" — nema tima

---

## SEKCIJA 8: GENERALNA PRAVILA ZA SAV COPY

### Nikad ne koristi:
- ❌ "We" / "Our team" / "Mi" / "Naš tim" — si jedna osoba
- ❌ "Transform businesses" / "Transformiramo poslovanje"
- ❌ "Cutting-edge" / "World-class" / "Premium"
- ❌ "We've helped companies across industries"
- ❌ Bilo kakve tvrdnje o prošlim klijentima ili iskustvima kojih nema
- ❌ "Solutions" kao zamjena za konkretan opis usluge

### Uvijek koristi:
- ✅ Prvo lice ("Pomažem...", "Radim s...", "I help...", "I work with...")
- ✅ Konkretne tehnologije umjesto buzzwordova
- ✅ Kratke, jasne rečenice
- ✅ Realne opise bez pretjerivanja
- ✅ Aktivan glagolski oblik ("Postavljam CI/CD" umjesto "CI/CD solutions are delivered")

### Ton:
- Profesionalan ali pristupačan
- Samopouzdan ali ne hvalisav
- Konkretan i direktan
- Kao da razgovaraš s potencijalnim klijentom na kavi — ne kao da pišeš korporativnu brošuru

---

## SEKCIJA 9: TEHNIČKE NAPOMENE

### SEO prioriteti:
1. Postavi Google Search Console i verificiraj domenu
2. Generiraj sitemap.xml i provjeri robots.txt
3. Title tagovi za svaku stranicu:
   - Home: "DevLogic — Razvoj softvera, testiranje i DevOps | Hrvatska"
   - EN: "DevLogic — Software Development, Testing & DevOps | Croatia"
4. Meta description:
   - HR: "Razvoj web aplikacija, automatizirano testiranje i DevOps usluge. Paušalni obrt, Hrvatska. Kontaktirajte za besplatnu konzultaciju."
   - EN: "Web application development, automated testing, and DevOps services. Solo developer based in Croatia. Contact for a free consultation."

### Strukturirani podaci (JSON-LD):
Dodaj LocalBusiness schema na stranicu:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "DevLogic",
  "description": "Software development, testing, and DevOps services",
  "url": "https://www.devlogic.hr",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "HR"
  },
  "founder": {
    "@type": "Person",
    "name": "Igor"
  },
  "serviceType": [
    "Web Development",
    "Software Testing",
    "DevOps"
  ]
}
```

### Performanse:
- Hero background slika: komprimiraj ili zamijeni s CSS gradijentom (trenutna tamna slika se može reproducirati s pure CSS)
- Lazy load sve slike ispod folda
- Provjeri Lighthouse score

---

## SAŽETAK PROMJENA

| Sekcija | Akcija |
|---------|--------|
| Navigacija | Promijeni redoslijed i nazive, makni "Products" |
| Hero | Kompletno novi heading, subheading, i CTA |
| About | Osobni tekst, konkretne tehnologije, 3 kartice umjesto 4 |
| Services | Smanji s 5 na 3 usluge, konkretiziraj opise |
| Products → Projects/Process | Makni Coming Soon proizvode, zamijeni procesom rada |
| Kontakt | Smanji na 3 polja, dodaj Calendly link |
| Footer | Dodaj GitHub/LinkedIn, makni "team" reference |
| Sav copy | Zamijeni "we" s "ja/I", makni korporativni govor |
| SEO | Google Search Console, sitemap, meta tagovi, JSON-LD |
