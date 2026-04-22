export type SiteContent = {
  home: {
    aboutSection: {
      label: string;
      title: string;
      paragraphOne: string;
      paragraphTwo: string;
      buttonText: string;
      buttonHref: string;
      image: string;
      imageAlt: string;
    };
    activitiesSection: {
      label: string;
      title: string;
      paragraphOne: string;
      paragraphTwo: string;
      image: string;
      imageAlt: string;
    };
    aboutMosaicSection: {
      label: string;
      title: string;
      points: string[];
      buttonText: string;
      buttonHref: string;
      imageSmallTop: string;
      imageSmallTopAlt: string;
      imageLarge: string;
      imageLargeAlt: string;
      imageSmallBottom: string;
      imageSmallBottomAlt: string;
    };
    ctaSection: {
      label: string;
      title: string;
      paragraphOne: string;
      paragraphTwo: string;
      primaryButtonText: string;
      primaryButtonHref: string;
      secondaryButtonText: string;
      secondaryButtonHref: string;
    };
  };
  joinUs: {
    membersSection: {
      label: string;
      title: string;
      paragraph: string;
      buttonText: string;
      buttonHref: string;
      image: string;
      imageAlt: string;
    };
    networkingSection: {
      label: string;
      title: string;
      lead: string;
      paragraph: string;
      image: string;
      imageAlt: string;
    };
    eventsSection: {
      label: string;
      title: string;
      paragraphOne: string;
      paragraphTwo: string;
      buttonText: string;
      buttonHref: string;
      imageSmallTop: string;
      imageSmallTopAlt: string;
      imageLarge: string;
      imageLargeAlt: string;
      imageSmallBottom: string;
      imageSmallBottomAlt: string;
    };
    quoteSection: {
      quote: string;
      author: string;
      image: string;
      imageAlt: string;
    };
  };
  forCompanies: {
  recruitmentSection: {
    label: string;
    title: string;
    paragraphOne: string;
    paragraphTwo: string;
    image: string;
    imageAlt: string;
  };
  resultsSection: {
    label: string;
    title: string;
    paragraphOne: string;
    paragraphTwo: string;
    contactText: string;
    contactEmail: string;
    buttonText: string;
    buttonHref: string;
    image: string;
    imageAlt: string;
  };
};
};