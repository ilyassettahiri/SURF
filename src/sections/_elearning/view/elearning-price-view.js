'use client';

import { _members, _coursePosts, _brandsColor, _testimonials } from 'src/_mock';
import { _tours, _travelPosts } from 'src/_mock';

import TravelLandingTourFeatured from 'src/sections/_travel/landing/travel-landing-tour-featured';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';

// ----------------------------------------------------------------------

export default function ElearningPriceView() {
  return (
    <>


      <TravelLandingTourFeatured tours={_tours.slice(0, 4)} />

      <MarketingLandingFreeSEO />


    </>
  );
}
