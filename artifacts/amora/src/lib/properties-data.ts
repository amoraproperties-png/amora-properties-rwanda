import evergreenApartments from '@assets/Image_1_1788878175116.jpg';
import greenland from '@assets/image_1788878298137.png';
import kigaliHeights from '@assets/image_1788878325598.png';
import dnd from '@assets/image_1788878378215.png';
import harringtonGolf from '@assets/image_1788878442076.png';
import laCasa from '@assets/image_1790596689010.png';
import kbacBuilding from '@assets/image_1790596614006.png';

const brilliantTowerImageUrl = 'https://www.brilliant-development-holding.com/indexFiles/img-brilliant-1.jpg';
const brilliantTowerSourceUrl = 'https://www.brilliant-development-holding.com/BrilliantTower.html';
const visionCityImageUrl = 'https://new.visioncity.rw/wp-content/uploads/2024/03/SR1_Ext_04-1@2x-1024x621.png';
const visionCitySourceUrl = 'https://new.visioncity.rw/';
const ahezaUrbanVillageImageUrl = 'https://girinzu.rw/uploads/projects/c59867262f3ad949cee6.jpeg';
const ahezaUrbanVillageSourceUrl = 'https://girinzu.rw/project.php?slug=aheza-urban-village';
const jsrGolfVillageImageUrl = 'https://jsr-realestate.com/wp-content/uploads/2026/06/Hero-Visual-Block-AB-JSR-Golf-Village.jpg';
const jsrGolfVillageSourceUrl = 'https://jsr-realestate.com/';

export type PropertyCategory = 'Residential Apartments' | 'Commercial' | 'Gated Neighbourhoods';
export type PropertyStatus = 'Completed' | 'Under Construction';

export type Property = {
  slug: string;
  name: string;
  category: PropertyCategory;
  status: PropertyStatus;
  location: string;
  image: string;
  eyebrow: string;
  summary: string;
  description: string;
  details: string[];
  coordinates: string;
  accent: string;
  sourceUrl?: string;
};

export const properties: Property[] = [
  {
    slug: 'evergreen-apartments',
    name: 'Evergreen Apartments',
    category: 'Residential Apartments',
    status: 'Completed',
    location: 'Kigali',
    image: evergreenApartments,
    eyebrow: 'Residential living',
    summary: 'A considered apartment address for everyday life in Kigali.',
    description: 'Evergreen Apartments is presented as a residential development in Kigali, with a focus on comfortable, connected city living. Availability and current specifications should be confirmed directly with the relevant project representative.',
    details: ['Apartment residences', 'Kigali, Rwanda', 'Completed project'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#1b4c49] to-[#5f897a]',
  },
  {
    slug: 'greenland',
    name: 'Greenland',
    category: 'Gated Neighbourhoods',
    status: 'Under Construction',
    location: 'Kigali',
    image: greenland,
    eyebrow: 'Neighbourhood living',
    summary: 'A new residential setting taking shape within Kigali’s growing landscape.',
    description: 'Greenland is included in the Amora property portfolio as a gated-neighbourhood opportunity in Kigali. Project timing, amenities and delivery details are subject to confirmation as construction progresses.',
    details: ['Gated neighbourhood', 'Kigali, Rwanda', 'Under construction'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#314b43] to-[#b5a06c]',
  },
  {
    slug: 'harrington-golf',
    name: 'Harrington Golf',
    category: 'Gated Neighbourhoods',
    status: 'Under Construction',
    location: 'Nyarutarama',
    image: harringtonGolf,
    eyebrow: 'Landmark neighbourhood',
    summary: 'A distinctive address near the established Nyarutarama district.',
    description: 'Harrington Golf is a neighbourhood project associated with Nyarutarama, one of Kigali’s established residential districts. The portfolio entry is intended as a clear point of reference; property terms and construction updates should be verified with the project team.',
    details: ['Gated neighbourhood', 'Nyarutarama, Kigali', 'Under construction'],
    coordinates: 'Nyarutarama · Kigali',
    accent: 'from-[#1f3f41] to-[#9e8457]',
  },
  {
    slug: 'jsr-golf-village',
    name: 'JSR Golf Village',
    category: 'Residential Apartments',
    status: 'Under Construction',
    location: 'Kigali',
    image: jsrGolfVillageImageUrl,
    eyebrow: 'Golf-course living',
    summary: 'Elevated apartments and villas with open views across Kigali’s golf-course setting.',
    description: 'JSR Golf Village is a residential development by JSR Real Estate in Kigali, offering luxury apartments and private villas alongside the golf course. The official site lists Phase 1 as now selling, with additional phases planned; availability and terms should be confirmed directly with JSR.',
    details: ['Luxury apartments and villas', 'Kigali, Rwanda', 'Phase 1 now selling'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#1d3d3a] to-[#b29668]',
    sourceUrl: jsrGolfVillageSourceUrl,
  },
  {
    slug: 'dnd',
    name: 'DND',
    category: 'Commercial',
    status: 'Completed',
    location: 'Kigali',
    image: dnd,
    eyebrow: 'Commercial space',
    summary: 'A commercial destination designed for the rhythm of a changing city.',
    description: 'DND is listed as a commercial property opportunity in Kigali. The portfolio highlights the project’s presence and character while keeping any unconfirmed ownership, leasing or development claims out of the record.',
    details: ['Commercial property', 'Kigali, Rwanda', 'Completed project'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#283a45] to-[#bd9d61]',
  },
  {
    slug: 'la-casa',
    name: 'La Casa',
    category: 'Residential Apartments',
    status: 'Completed',
    location: 'Kigali',
    image: laCasa,
    eyebrow: 'Residential living',
    summary: 'A warm, modern residential proposition for a more personal city life.',
    description: 'La Casa is presented as a completed residential project in Kigali. Specific residence types, pricing and availability are not inferred here and should be confirmed through the appropriate sales channel.',
    details: ['Apartment residences', 'Kigali, Rwanda', 'Completed project'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#4d403b] to-[#c39d67]',
  },
  {
    slug: 'kigali-heights',
    name: 'Kigali Heights',
    category: 'Commercial',
    status: 'Completed',
    location: 'Kimihurura',
    image: kigaliHeights,
    eyebrow: 'Mixed-use landmark',
    summary: 'A recognisable Kimihurura address at the intersection of work, retail and city life.',
    description: 'Kigali Heights is a prominent mixed-use destination in Kimihurura, Kigali. The portfolio makes no claim about current tenancy or ownership; it offers a considered view of the project as a place within Rwanda’s urban property landscape.',
    details: ['Mixed-use destination', 'Kimihurura, Kigali', 'Completed project'],
    coordinates: 'Kimihurura · Kigali',
    accent: 'from-[#1f4141] to-[#ba9561]',
  },
  {
    slug: 'brilliant-tower',
    name: 'Brilliant Tower',
    category: 'Commercial',
    status: 'Under Construction',
    location: 'Kigali',
    image: brilliantTowerImageUrl,
    eyebrow: 'Commercial space',
    summary: 'A vertical commercial address contributing to Kigali’s evolving skyline.',
    description: 'Brilliant Tower is included as a commercial project under construction in Kigali. Design, construction stage and future occupancy details may change; visitors should request the latest verified information.',
    details: ['Commercial tower', 'Kigali, Rwanda', 'Under construction'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#303f4d] to-[#a78a61]',
    sourceUrl: brilliantTowerSourceUrl,
  },
  {
    slug: 'kbc-building',
    name: 'KBAC Building',
    category: 'Commercial',
    status: 'Completed',
    location: 'Kigali',
    image: kbacBuilding,
    eyebrow: 'City centre address',
    summary: 'An established commercial reference point in Rwanda’s capital.',
    description: 'KBAC Building is presented as a completed commercial property in Kigali. Amora’s portfolio view is informational and does not imply ownership, development or management of the building.',
    details: ['Commercial building', 'Kigali, Rwanda', 'Completed project'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#273c40] to-[#aa8e60]',
  },
  {
    slug: 'vision-city-phase-two',
    name: 'Vision City Phase Two',
    category: 'Gated Neighbourhoods',
    status: 'Under Construction',
    location: 'Kigali',
    image: visionCityImageUrl,
    eyebrow: 'Neighbourhood living',
    summary: 'A new chapter for one of Kigali’s most recognisable residential settings.',
    description: 'Vision City Phase Two is an award-winning sustainable residential project and gated community in Kigali, with villas, row houses and apartments designed around a self-sustained city lifestyle. Current availability and delivery details should be confirmed with the project team.',
    details: ['Gated neighbourhood', 'Kigali, Rwanda', 'Under construction'],
    coordinates: 'Kigali · Rwanda',
    accent: 'from-[#254e4a] to-[#b4a16f]',
    sourceUrl: visionCitySourceUrl,
  },
  {
    slug: 'girinzu-gahanga',
    name: 'Aheza Urban Village',
    category: 'Gated Neighbourhoods',
    status: 'Under Construction',
    location: 'Gahanga',
    image: ahezaUrbanVillageImageUrl,
    eyebrow: 'Urban village',
    summary: 'A 104-unit urban village of apartments and villas at the entrance of Gahanga.',
    description: 'Aheza Urban Village is a Girinzu community in Gahanga, Kigali, with landscaped shared spaces and a mix of apartments and villas. The official project page lists the development as now selling; current availability and terms should be confirmed directly with Girinzu.',
    details: ['Gated neighbourhood', 'Gahanga, Kigali', 'Now selling'],
    coordinates: 'Gahanga · Kigali',
    accent: 'from-[#3a4841] to-[#b59967]',
    sourceUrl: ahezaUrbanVillageSourceUrl,
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}