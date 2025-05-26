'use client';

import { _brands, _members, _travelPosts, _testimonials } from 'src/_mock';

import TravelTeam from 'src/sections/_travel/team/travel-team';
import TravelAbout from 'src/sections/_travel/about/travel-about';

import TravelAboutOurMission from 'src/sections/_travel/about/travel-about-our-mission';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function TravelAboutView() {
  return (
    <>
      <TravelAbout />

      <TravelAboutOurMission />

      <TravelTeam members={_members} />

      <MarketingLandingFreeSEO />


    </>
  );
}
