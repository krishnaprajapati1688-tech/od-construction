export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** Filename only — resolved against /public/team/ */
  image: string;
};

/**
 * THE ONLY FILE YOU EDIT TO UPDATE LEADERSHIP.
 *
 * To replace a photo: drop the new file into `public/team/` using the same
 * filename referenced below (or update the `image` field to a new filename).
 * No component needs to change.
 */
export const team: TeamMember[] = [
  {
    slug: 'omprakash-prajapati',
    name: 'Omprakash Prajapati',
    role: 'Founder & Owner',
    bio: 'The architect of OD Construction\u2019s reputation \u2014 built on-site, one project at a time, since 2008. Two decades of hands-on civil engineering discipline guide every foundation the company lays.',
    image: 'omprakash-prajapati.jpg',
  },
  {
    slug: 'ankit-prajapati',
    name: 'Ankit Prajapati',
    role: 'Director',
    bio: 'Oversees project execution, client relationships and site quality standards across OD Construction\u2019s residential, commercial and government portfolios.',
    image: 'ankit-prajapati.jpg',
  },
  {
    slug: 'krishna-prajapati',
    name: 'Krishna Prajapati',
    role: 'Digital Operations Manager',
    bio: 'Leads digital operations, documentation and process modernization \u2014 bringing structured, transparent reporting to every project milestone.',
    image: 'krishna-prajapati.jpg',
  },
];
