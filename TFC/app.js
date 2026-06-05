"use strict";
gsap.registerPlugin(ScrollTrigger);

const parent = document.querySelector(".parent");
const firstActe = document.querySelector(".acte1");
if (firstActe && parent && !document.querySelector(".acte1-clone")) {
    const clone = firstActe.cloneNode(true);
    clone.classList.add("acte1-clone");
    parent.appendChild(clone);
}

const mainTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=500%",
        scrub: 0.8,
        pin: true,
        markers: true,
    }
})
    .to(".parent", {
        x: "-100vw",
        ease: "none"
    })
    .to(".acte2", {
        scale: 1.2,
        transformOrigin: "center center",
        ease: "none"
    })
    .to(".herbepivot1", {
        rotation: -20,
        transformOrigin: "45% 90%",
        ease: "none"
    })
    .to(".herbepivot2", {
        rotation: 20,
        transformOrigin: "45% 90%",
        ease: "none"
    })

    .to(".acte3", {
        opacity: 0,
        scale: 1,
        transformOrigin: "center center",
        ease: "none"
    })
    .to(".acte3", {
        opacity: 1,
        scale: 1,
        transformOrigin: "center center",
        ease: "none"
    }, "acte3-start")
    .to(".acte2", {
        scale: 7,
        transformOrigin: "center center",
        ease: "none"
    }, "acte3-start")

    .to(".jellyfish", {
        x: () => gsap.utils.random(-220, 220),
        y: () => gsap.utils.random(-140, 140),
        rotation: () => gsap.utils.random(-15, 15),
        ease: "none",
        stagger: 0.05
    }, "poisson-start")

    .to(".poisson_couleur", {
        scale: 1.4,
        rotation: -45,
        transformOrigin: "center center",
        ease: "none"
    }, "poisson-start")

    .to(".poisson_gris", {
        scale: 1.4,
        rotation: 45,
        transformOrigin: "center center",
        ease: "none"
    }, "poisson-start")


    .to(".acte4", {
        scale: 1.4,
        opacity: 1,
        transformOrigin: "center center",
        ease: "none"
    })
    .addLabel("fleur1-start")
    .to(".fleur1", {
        y: 200,
        x: 350,
        rotation: 35,
        transformOrigin: "center center",
    }, "fleur1-start")
    .addLabel("fleur2-start")
    .to(".fleur2", {
        y: 290,
        x: -330,
        rotation: -35,
        transformOrigin: "center center",
    }, "fleur2-start")
    .to(".fleur3", {
        y: 270,
        x: -400,
        rotation: -55,
        transformOrigin: "center center",
    }, "fleur2-start")
    .to(".tas1", {
        opacity: 1,
    }, "fleur2-start")
    .addLabel("fleur4-start")
    .to(".fleur4", {
        y: 50,
        x: 650,
        rotation: 25,
        transformOrigin: "center center",
    }, "fleur4-start")
    .to(".fleur5", {
        y: 200,
        x: 550,
        rotation: 15,
        transformOrigin: "center center",
    }, "fleur4-start")
    .to(".fleur6", {
        y: 400,
        x: 600,
        rotation: -15,
        transformOrigin: "center center",
    }, "fleur4-start")
    .to(".tas2", {
        opacity: 1,
    }, "fleur4-start")
    .addLabel("fleur-start")
    .to(".fleur", {
        x: () => gsap.utils.random(-720, -620),
        y: () => gsap.utils.random(200, 340),
        rotation: () => gsap.utils.random(-15, 15),
        scale: () => gsap.utils.random(0.3, 0.6),
        ease: "none",
        stagger: 0.05
    }, "fleur-start")
    .to(".tas3", {
        opacity: 1,
    }, "fleur-start")
    .to(".rideaux1", {
        x: 500,
    })

    .to(".rideaux2", {
        x: -500,
    })

    .addLabel("acte5-start")
    .to(".acte4", {
        opacity: 1,
        ease: "none"
    }, "acte5-start")
    .to(".acte5", {
        opacity: 1,
        scale: 1.4,
        transformOrigin: "center center",
        ease: "none"
    }, "acte5-start")
    .to(".rideaux3", {
        x: -500,
    }, "acte5-start")

    .to(".rideaux4", {
        x: 500,
    }, "acte5-start")
    .to(".rideaux3", {
        opacity: 0,
    })
    .to(".rideaux4", {
        opacity: 0,
    })
    .to(".acte5", {

        x: -300,
    })

let isLooping = false;
window.addEventListener("scroll", () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (!isLooping && window.pageYOffset >= maxScroll - 1) {
        isLooping = true;
        window.requestAnimationFrame(() => {
            window.scrollTo(0, 0);
            mainTimeline.progress(0);
            ScrollTrigger.update();
            setTimeout(() => {
                isLooping = false;
            }, 100);
        });
    }
});

