'use client';

import { _members, _coursePosts, _brandsColor, _testimonials } from 'src/_mock';

import TravelTeam from 'src/sections/_travel/team/travel-team';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function ElearningTeamView() {
  return (
    <>


      <TravelTeam members={_members} />
      <MarketingLandingFreeSEO />


    </>
  );
}
