export type ProjectStatus = 'ongoing' | 'completed';

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Government'
  | 'Institutional'
  | 'Industrial'
  | 'Renovation';

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  client: string;
  year: string;
  /** 'ongoing' or 'completed' — flip this and the site handles everything else. */
  status: ProjectStatus;
  /** Only used while status is 'ongoing'. Ignored (and hidden) once status is 'completed'. */
  progress?: number;
  /** Shown only once status is 'completed'. */
  completionDate?: string;
  description: string;
  longDescription?: string;
  featured?: boolean;
  /** Filename only — resolved against /public/projects/<slug>/ */
  heroImage: string;
  /** Filenames only — resolved against /public/projects/<slug>/. Leave empty to auto-use every other image found in the folder. */
  galleryImages?: string[];
  /** Optional. Filename resolved against /public/videos/projects/<slug>/. If omitted, any file in that folder named `hero-*` is used automatically. */
  video?: string;
};

/**
 * THE ONLY FILE YOU EDIT TO ADD OR UPDATE A PROJECT.
 *
 * Add a new project:
 *   1. Create `public/projects/<slug>/` and drop in photos.
 *   2. Add one object below with the same `slug`, pointing `heroImage` at your
 *      cover shot. List `galleryImages` explicitly, or omit it — anything
 *      else found in the folder is picked up automatically.
 *   3. Done. The homepage, /projects/ongoing or /projects/completed, the
 *      gallery and the full /projects/<slug> detail page all update on the
 *      next build. No other file needs to change.
 *
 * Move a project from Ongoing to Completed:
 *   Change `status: 'ongoing'` to `status: 'completed'` and add a
 *   `completionDate`. The progress bar disappears, a Completed badge
 *   appears, and it moves listings automatically.
 */
export const projects: Project[] = [
  // ---- Flagship current projects (real site media) ----
  {
    slug: 'andheri-project',
    title: 'Andheri Residential Tower',
    location: 'Andheri, Mumbai',
    category: 'Residential',
    client: 'Private Residential Client',
    year: '2026',
    status: 'ongoing',
    progress: 40,
    featured: true,
    description:
      'A multi-storey residential tower rising through active superstructure work in Andheri \u2014 tower crane, RCC framing and shuttering all running in parallel across the site.',
    longDescription:
      'OD Construction is currently executing the civil and structural works for this residential tower in Andheri. The site is running full superstructure operations: tower-crane-assisted concrete pours, rebar fabrication, formwork and shuttering, and structural welding at height \u2014 all under active safety supervision. Photos below are unedited, direct from the live site.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'cst-navy-nagar',
    title: 'CST Navy Nagar Residential Development',
    location: 'Navy Nagar, Colaba, Mumbai',
    category: 'Residential',
    client: 'Private Residential Client',
    year: '2025',
    status: 'ongoing',
    progress: 45,
    featured: true,
    description:
      'An RCC-framed residential structure currently rising through its superstructure stage \u2014 columns, beams and slab construction progressing under close daily supervision.',
    longDescription:
      'OD Construction is currently executing the civil and structural works for this residential development at Navy Nagar, Colaba. The site is at active superstructure stage, with reinforced columns, beam-and-slab construction and shuttering work in progress across multiple floors. Every pour is checked against structural drawings before sign-off, and the site is documented photographically at each major milestone.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'santacruz-khar',
    title: 'Santacruz\u2013Khar Residential Tower',
    location: 'Santacruz\u2013Khar, Mumbai',
    category: 'Residential',
    client: 'Private Residential Client',
    year: '2025',
    status: 'ongoing',
    progress: 60,
    featured: true,
    description:
      'A multi-storey residential tower under active construction in the Santacruz\u2013Khar belt, captured here in a real on-site video walkthrough of the live structure.',
    longDescription:
      'This residential tower project in the Santacruz\u2013Khar corridor is being executed by OD Construction from foundation through superstructure. The on-site video below is real footage from the live project \u2014 not a rendering \u2014 showing the current state of construction, formwork and structural framing as the building rises floor by floor.',
    heroImage: 'hero-01.jpg',
  },

  // ---- Completed projects (from company profile) ----
  {
    slug: 'new-tilak-nagar-residential',
    title: 'Residential Tower \u2014 G+12 with Double Basement',
    location: 'New Tilak Nagar, Mumbai',
    category: 'Residential',
    client: 'Private Residential Client',
    year: '2016',
    status: 'completed',
    completionDate: 'Dec 2016',
    description:
      'A twelve-storey residential building with double basements, each 4.5 metres in height \u2014 executed complete with RCC structure, brickwork, external plaster and finishes.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'kalwa-stilt-plus-7',
    title: 'Stilt + 7 Storey Residential Building',
    location: 'Kalwa, Thane',
    category: 'Residential',
    client: 'Private Developer',
    year: '2017',
    status: 'completed',
    completionDate: 'Jun 2017',
    description:
      'A stilt-plus-seven storey residential tower delivered from foundation and RCC framework through to full facade completion.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'manpada-thane-mmrda',
    title: 'Stilt + 10 Storey Residential Building',
    location: 'Manpada, Thane',
    category: 'Government',
    client: 'MMRDA Staff Quarters',
    year: '2016',
    status: 'completed',
    completionDate: 'Mar 2016',
    description:
      'Staff quarters for MMRDA \u2014 a stilt-plus-ten storey residential structure completed with full RCC and finishing works.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'flying-colours-mall',
    title: 'External Plaster & Repairs \u2014 Flying Colours Mall',
    location: 'Mulund West, Mumbai',
    category: 'Renovation',
    client: 'Flying Colours Mall',
    year: '2015',
    status: 'completed',
    completionDate: 'Sep 2015',
    description: 'Complete external plaster restoration and structural repair works for an operating commercial mall.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'lodha-eternis-parbola',
    title: '\u2018Cantilever Parbola\u2019 Elevation, Terrace & Septic Tank',
    location: 'Lodha Eternis, Seepz, Andheri',
    category: 'Residential',
    client: 'Lodha Group',
    year: '2019',
    status: 'completed',
    completionDate: 'Nov 2019',
    description:
      'Construction of the architectural cantilever \u2018parbola\u2019 elevation at the terrace of Buildings No. 5 & 6, along with the project\u2019s septic tank, for the Lodha Eternis development.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'barc-mankhurd-school',
    title: 'School \u2018Cr\u00e8che\u2019 Building',
    location: 'BARC, Mankhurd, Mumbai',
    category: 'Institutional',
    client: 'Bhabha Atomic Research Centre',
    year: '2012',
    status: 'completed',
    completionDate: 'Jul 2012',
    description: 'Construction of a dedicated cr\u00e8che / school building within the BARC campus at Mankhurd.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'metro-mall-bhandup',
    title: 'Ramp Work & Mezzanine Floor Slab',
    location: 'Metro Mall, Bhandup',
    category: 'Commercial',
    client: 'Metro Mall',
    year: '2014',
    status: 'completed',
    completionDate: 'Feb 2014',
    description: 'Ramp construction and mezzanine floor slab works executed for the Metro Mall commercial complex.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'kalwa-west-lock-key',
    title: 'Stilt + 12 Storey Building \u2014 Lock & Key Basis',
    location: 'Kalwa West, Thane',
    category: 'Residential',
    client: 'Private Developer',
    year: '2024',
    status: 'completed',
    completionDate: 'Oct 2024',
    description:
      'A stilt-plus-twelve storey residential tower executed on a full lock-and-key turnkey basis, from foundation to final handover.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'kanjur-marg-mes',
    title: 'Ground + 26 Storey Building \u2014 MES Staff Quarters',
    location: 'Kanjur Marg, Mumbai',
    category: 'Government',
    client: 'Military Engineer Services (MES)',
    year: '2024',
    status: 'completed',
    completionDate: 'Dec 2024',
    description:
      'A ground-plus-twenty-six storey residential tower delivered for MES Staff Quarters \u2014 one of OD Construction\u2019s largest completed government projects.',
    heroImage: 'hero-01.jpg',
  },
  {
    slug: 'spdc-mankhurd-mes',
    title: 'Bulk Storage Construction for MES',
    location: 'SPDC, Mankhurd, Mumbai',
    category: 'Industrial',
    client: 'Military Engineer Services (MES)',
    year: '2024',
    status: 'completed',
    completionDate: 'Aug 2024',
    description: 'Construction of dedicated bulk storage infrastructure completed for MES at the SPDC Mankhurd site.',
    heroImage: 'hero-01.jpg',
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const completedProjects = projects.filter((p) => p.status === 'completed');
export const ongoingProjects = projects.filter((p) => p.status === 'ongoing');
export const featuredProjects = projects.filter((p) => p.featured);
