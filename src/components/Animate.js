import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Text Intro
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};

//Open menu
export const staggerShow = (elem1, elem2) => {
  gsap.from([elem1, elem2], {
    duration: 0.7,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power4.inOut",
    stagger: {
      amount: 0.2,
    },
  })
}

//Close menu
export const staggerHide = (elem1, elem2) => {   
  gsap.to([elem1, elem2], {
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
    stagger: {
      amount: 0.07,
    },
  })
}

//Stagger links
export const staggerLinks = (elem1, elem2, elem3) => {
  gsap.from([elem1, elem2, elem3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power4.inOut",
    stagger: {
      amount: 0.3,
    },
  })
}

// Fade up menu info
export const fadeIn = elem => {
  gsap.from(elem, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power4.inOut"
  })
};

// Hover on the link
export const hoverLink = e => {
  gsap.to(e.target, {
    duration: 0.4,
    y: 3,
    skewX: 4,
    ease: "power2.inOut"
  });
};

// Hover away from the link
export const hoverExit = e => {
  gsap.to(e.target, {
    duration: 0.4,
    y: -3,
    skewX: 0,
    ease: "power2.inOut"
  });
};

// adds image once you hover on
export const cityImage = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power4.inOut"
  });
  gsap.from(target, {
    duration: 0.5,
    skewY: 2,
    transformOrigin: "right top"
  });
};

// Removes the city image once you hover off
export const removeCityImage = target => {
  gsap.to(target, {
    duration: 0,
    skewY: 0
  });
  gsap.to(target, {
    duration: 0.5,
    opacity: 0,
    skewY: 0
  });
};

//Skew gallery Images
export const skewGallery = elem1 => {
                                      //make gallery skew
                                      gsap.registerPlugin(ScrollTrigger);
                                      gsap.set(elem1, {
                                        transformOrigin: "right center",
                                        force3D: true,
                                      });
                                      let clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.
                                      ScrollTrigger.create({
                                        trigger: elem1,
                                        onUpdate: (self) => {
                                          const velocity = clamp(
                                            Math.round(self.getVelocity() / 300)
                                          );

                                          gsap.to(elem1, {
                                            skew: 0,
                                            skewY: velocity,
                                            ease: "power3",
                                            duration: 0.8,
                                            overwrite: true,
                                          });
                                        },
                                      });
                                    }