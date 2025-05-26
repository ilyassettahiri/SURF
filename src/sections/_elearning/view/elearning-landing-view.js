'use client';

import {
  _courses,
  _members,

  _caseStudies,

  _coursePosts,
  _brandsColor,

  _coursesByCategories,
} from 'src/_mock';

import { _tours, _travelPosts } from 'src/_mock';


import ElearningLandingHero from '../landing/elearning-landing-hero';
import MarketingLandingProcess from 'src/sections/_marketing/landing/marketing-landing-process';
import MarketingLandingCaseStudies from 'src/sections/_marketing/landing/marketing-landing-case-studies';
import MarketingLandingFreeSEO from 'src/sections/_marketing/landing/marketing-landing-free-seo';
import MarketingLandingFaqs from 'src/sections/_marketing/landing/marketing-landing-faqs';
import TravelLandingTourFeatured from 'src/sections/_travel/landing/travel-landing-tour-featured';

// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <ElearningLandingHero />


      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)} />


      <TravelLandingTourFeatured tours={_tours.slice(0, 3)} />


      <MarketingLandingFaqs />
      <MarketingLandingFreeSEO />

    </>
  );
}
