gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

  const words = ["say Website!", "Say App!", "say IT!"];
  let index = 0;

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text-reveal");
  const letters = textElement.textContent
    .split("")
    .map((letter) => {
      return `<span>${letter === " " ? "&nbsp;" : letter}</span>`;
    })
    .join("");

  textElement.innerHTML = letters; // Replace text with span-wrapped letters

  gsap.to(".text-reveal span", {
    opacity: 1,
    y: 0,
    stagger: 0.05, // Each letter moves separately
    ease: "none",
    scrollTrigger: {
      trigger: ".text-reveal",
      start: "top 70%",
      end: "bottom 50%", // Animation follows scroll
      scrub: true, // Makes it scroll-dependent
    },
  });

  gsap.to(".grid-item", {
    backgroundColor: '#ffd60a',
    color:'#1b263b',    
    stagger: 0.1, // Each letter moves separately
    ease: "none",
    scrollTrigger: {
      trigger: ".grid-item",
      start: "top 70%",
      end: "bottom 50%", // Animation follows scroll
      scrub: true, // Makes it scroll-dependent
    },
  });
  gsap.to(".page4", {
    backgroundColor: 'black',
    
    ease: 'none',
    scrollTrigger: {
      trigger: ".grid-item",
      start: "top 100%",
      end: "bottom 90%", // Animation follows scroll
      scrub: true, // Makes it scroll-dependent
    },
  });

  gsap.from(".video-container", {scale: .8, 

    scrollTrigger: {
        trigger: ".video-container",
        start: "top 90%",
        end: "bottom 50%", // Animation follows scroll
        scrub: true, // Makes it scroll-dependent
      },
  });

  // text animation
  function typeEffect(){
    gsap.to(".content button", {
        duration: 1.5,
        text: words[index],   // Set the text dynamically
        ease: "power1.inOut",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(".content button", {
              duration: 0.5,
              text: "🫡",  // Clears the text (Backspace effect)
              ease: "power1.inOut",
              onComplete: () => {
                index = (index + 1) % words.length;  // Move to next word
                typeEffect();  // Restart the function
              }
            });
          }, 1000);  // Wait time before erasing text
        }
      });
  }
  typeEffect();

let cards = gsap.utils.toArray(".cardt"); // Get all cards

// GSAP Timeline for stacking effect
let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=50%", // Adjust end position
        scrub: true,
        pin: true // Keep pinned until animation completes
    }
});

// Animate each card into position
cards.forEach((card, index) => {
    timeline.to(card, {
        x: -index * 300, // Moves the card up (adjust height as needed)
        scale: 1 - index * 0.02, // Shrinks slightly
        opacity: 1, // Ensures visibility
    }, "<"); // "<" means animations happen together
});



        // Split text into individual letters
        

        // Animate each letter separately
        // gsap.from(split.chars, {
        //     opacity: 0,
        //     y: 50, // Moves up from below
        //     duration: .8,
        //     ease: "power3.out",
        //     stagger: 0.01 // Delay between each letter
        // });
});

// card animation 
let cards = gsap.utils.toArray(".cardx");

gsap.set(cards, { opacity: 0, y: 100 });

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page7",
    start: "top top",
    end: `+=200%`,// Increased for longer animation duration
    scrub: 1, // Increased scrub value for smoother scroll
    pin: true,
    pinSpacing: true

  }
});

tl.to(cards, {
  opacity: 1,
  y: (index) => index * 0,
  scale: 1,
  duration: .5, // Increased duration for each card animation
  stagger: 1 // Correct usage of stagger
});

