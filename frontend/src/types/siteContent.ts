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
};