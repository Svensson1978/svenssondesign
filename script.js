
// HERO

function splitTextToSpans(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const text = el.textContent;
    el.innerHTML = ''; // clean text
    text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline';
      span.style.opacity = 0;
      
      if (char === ' ') {
        span.style.width = '0.4em'; 
      }
    
      el.appendChild(span);
    });
    
  });
}


splitTextToSpans('.line01');
splitTextToSpans('.line02');
splitTextToSpans('.line03');
splitTextToSpans('.line04');


function wrapSpecificChar(selector, charToWrap, className) {
  document.querySelectorAll(selector).forEach(el => {
    el.querySelectorAll('span').forEach(span => {
      if (span.textContent === charToWrap) {
        span.classList.add(className);
      }
    });
  });
}


splitTextToSpans('.line01');


wrapSpecificChar('.line01', 'o', 'blik');


// border frame


const tl = gsap.timeline({ defaults: { ease: "power2.inOut"} });



tl.to(".frame.top", { width: "100%", duration: 0.4 })
.to(".frame.right", { height: "100%", duration: 0.2 }, "-=0.2") 
.to(".frame.bottom", { width: "100%", duration: 0.2 }, "-=0.3")
.to(".frame.left", { height: "100%", duration: 0.4 }, "-=0.5")



.to(".hero__video", { opacity: 1, duration: 1 }, "+=2")
.to(".hero__overlay", { opacity: 0.8, duration: 1 },"-=1")
.to(".vhs-overlay", { opacity: 0.5, duration: 1 },"-=1")
.to(".line01 span", { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power2.out" }, "-=1.0")



  .to(".line02 span", { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power2.out" }, "-=0.4")
  .to(".line03 span", { opacity: 1, y: 0, stagger: 0.05, duration: 0.6, ease: "power2.out" }, "-=0.4")
  .to({}, { duration: 1 })

 
  
.to(".line04 span", {opacity: 1, y: 0, stagger: 0.04, duration: 0.6, ease: "power2.out"
})


.to(".blik", { opacity: 0, duration: 0.05 }, "+=0.2")
.to(".blik", { opacity: 1, duration: 0.05 })
.to(".blik", { opacity: 0, duration: 0.03, delay: 0.15 })
.to(".blik", { opacity: 1, duration: 0.03 })



.fromTo(".glitch-button", { opacity: 0,},      
  { opacity: 1, duration: 1, ease: "power2.out" }, 1)


  gsap.set(".scroll", { y: 0 });
  gsap.set(".click", { opacity: 1 }); 
  
  const scrollAnim = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  
  scrollAnim
    .to(".scroll", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power1.in",
    })
    .add(() => {
     
      gsap.to(".click", {
        opacity: 0,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "none"
      });
    })
    .set(".scroll", { y: -20 })
    .to(".scroll", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power1.out"
    });
  
 
  //Framerate
  // document.getElementById('video').playbackRate = 0.8; 

  const wiggleElements = document.querySelectorAll('.wiggle-text');

  setInterval(() => {
    wiggleElements.forEach(el => {
      const x = (Math.random() - 0.01) * 0.7
      const y = (Math.random() - 0.01) * 0.01;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, 60);



  //GSAP ScrollTriggers

  gsap.registerPlugin(ScrollTrigger);

  gsap.from([".om-col", ".fokus-col"], {
    scrollTrigger: {
      trigger: ".fade-in-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.4
  });



    gsap.registerPlugin(ScrollTrigger);

  gsap.from([".intro-paragraph"], {
    scrollTrigger: {
      trigger: ".intro-paragraph",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2
  });
  

  // gsap.from(".case-card", {
  //   scrollTrigger: {
  //     trigger: ".case-section",
  //     start: "top 75%",
  //     toggleActions: "play none none none"
  //   },
  //   opacity: 0,
  //   y: 0,
  //   duration: 3,
  //   ease: "power2.out",
  //   stagger: 0.25
  // });


  document.querySelectorAll(".underline").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 70%",
      onEnter: () => el.classList.add("underline-active"),
    });
  });
  

  // gsap.to("body", {
  //   backgroundColor: "#EDEDED",
    
  //   scrollTrigger: {
  //     trigger: ".case-section",

  //     start: "top 85%",

  //     end: "bottom center",
  //     scrub: 0.2
  //   }
  // });

  const fokusTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".fokus-col .mainText ul",
      start: "top 75%",
      toggleActions: "play none none none"
    }
  });
  

  fokusTimeline.from(".fokus-col .mainText ul li", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.3,
    delay: 0.5
  })
  
 
  .to(".fade-box", {
    scaleX: 1,
    transformOrigin: "left center",
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    onStart: () => {
      document.querySelector(".fade-box").style.backgroundImage = 
        "linear-gradient(90deg,rgba(203, 231, 15, 1) 0%, rgba(219, 243, 134, 1)";
    }
  }, "+0")
  

  .to(".fade-box", {
    backgroundColor: "#C8E0E0", 
    duration: 1.2,
    ease: "power2.out",
   
  });
  
  

// "Værktøjer" headline
gsap.from("#mainTextBolder", {
  scrollTrigger: {
    trigger: "#mainTextBolder",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  
  opacity: 0,
  duration: 0.8,
  
  ease: "power2.out"
});

// Icons
gsap.from(".icons > *", {
  scrollTrigger: {
    trigger: ".icons",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  ease: "back.out(1.7)",
  stagger: 0.1
});





  
  gsap.to("body", {
    "--underline-color": "#ffffff",
    scrollTrigger: {
      trigger: ".case-section",
      start: "top center",
      end: "bottom center",
      scrub: true
    }
  });


  gsap.from(".case-section .mainHeader", {
    scrollTrigger: {
      trigger: ".case-section",
      start: "top 75%",
      toggleActions: "play none none none"
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
  
  gsap.from(".case-section .mainText", {
    scrollTrigger: {
      trigger: ".case-section",
      start: "top 75%",
      toggleActions: "play none none none"
    },
    stagger: 0.1,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
  });


  // gsap.from(".case-section .filter-links", {
  //   scrollTrigger: {
  //     trigger: ".case-section",
  //     start: "top 75%",
  //     toggleActions: "play none none none"
  //   },
  //   stagger: 0.2,
  //   opacity: 0,
  //   duration: 2,
  //   delay: 0,
  //   ease: "power2.out"
  // });




  gsap.from(".case-section .filter-links .filter-btn", {
    scrollTrigger: {
      trigger: ".case-section",
      start: "top 75%",
      toggleActions: "play none none none"
    },
    stagger: 0.2,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    ease: "power2.out"
  });

  

// Kontaktsektion animation

gsap.from(".about-section .mainHeader", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: -50,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".about-section", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: -50,
  duration: 1.2,
  delay: 0.5,
  ease: "power2.out",
  stagger: 0.2
});

gsap.from(".about-paragraph", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: -50,
  duration: 1.2,
  delay: 0.5,
  ease: "power2.out",
  stagger: 0.3
});




gsap.from(".contact-section", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 80%", // begynder før den er helt i viewport
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power2.out",
  stagger: {
    amount: 0.3
  }
});

gsap.from(".contact-section h2", {
  scrollTrigger: {
    trigger: ".contact-section h2",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".contact-section p", {
  scrollTrigger: {
    trigger: ".contact-section p",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: -20,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 0.4
});

gsap.from(".contact-section img", {
  scrollTrigger: {
    trigger: ".contact-section img",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  x: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 1.4
});



gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 20,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.2,
  delay: 0.3
});

  
  // CASES



function openCustomModal({ media, size }) {
  const modal = document.getElementById("customModal");
  const modalContent = document.getElementById("customModalContent");

  modalContent.innerHTML = "";
  modalContent.removeAttribute("style");

  const isVideo = media.endsWith(".mp4");
  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(media);
  const isIframe = !isVideo && !isImage;

  let width, height;



  if (size && size.includes("x")) {
    [width, height] = size.split("x").map(Number);
  }

  if (isVideo) {
    const video = document.createElement("video");
    video.src = media;
    video.autoplay = true;
    video.muted = false;
    video.loop = true;
    video.controls = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.maxHeight = "80vh";
    video.style.borderRadius = "8px";
    modalContent.appendChild(video);
  } else if (isImage) {
    const img = document.createElement("img");
    img.src = media;
    img.alt = "Modal billede";
    // img.style.width = width ? `${width}px` : "100%";
    // img.style.maxHeight = "80vh";
    img.style.maxWidth = "90vw";
    img.style.maxHeight = "80vh";
    img.style.width = "100%"; // fallback
    img.style.height = "auto";
    img.style.borderRadius = "8px";
    img.style.display = "block";
    img.style.margin = "0 auto";
    img.style.display = "block";
    img.style.margin = "0 auto";
    img.style.borderRadius = "8px";
    modalContent.appendChild(img);
  } else {
    const iframe = document.createElement("iframe");
    iframe.src = media;
    iframe.style.width = `${width}px`;
    iframe.style.height = `${height}px`;
    iframe.style.border = "none";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    iframe.style.background = "transparent";
    iframe.style.boxShadow = "none";
    modalContent.style.width = `${width}px`;
    modalContent.style.height = `${height}px`;
    modalContent.appendChild(iframe);
  }

  modal.classList.add("show");
}


// Close CROSS-button corner
document.querySelector(".custom-close").addEventListener("click", () => {
  closeCustomModal();
});

// close click MODAL
document.querySelector(".custom-modal-overlay").addEventListener("click", (e) => {
  if (e.target.classList.contains("custom-modal-overlay")) {
    closeCustomModal();
  }
});

// close ESC-button MODAL
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCustomModal();
  }
});

function closeCustomModal() {
  const modal = document.getElementById("customModal");
  const modalContent = document.getElementById("customModalContent");
  modal.classList.remove("show");
  modalContent.innerHTML = "";
}




  //scrollbutton HERO
  document.querySelector('.glitch-button').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: window.innerHeight * 0.5, 
      behavior: 'smooth'
    });
  });





  //CASES filter
  
  let caseData = [];
  function renderCases(filter = "alle") {
    const container = document.getElementById("caseContainer");
    container.innerHTML = "";
  
const filtered = filter.toLowerCase() === "alle" 
  ? caseData 
  : caseData.filter(item => item.category.toLowerCase() === filter.toLowerCase());
  
  
    filtered.forEach(c => {
      const col = document.createElement("div");
      col.className = "col-sm-6 col-md-4";
  
      const card = document.createElement("div");
      card.className = "case-card fade-up";
      card.setAttribute("data-media", c.media); // data-media attribute
      card.setAttribute("data-category", c.category);
      if (c.size) card.setAttribute("data-size", c.size);
  
      card.innerHTML = `
        <div class="case-thumb-wrapper">
          <img src="${c.thumb}" alt="${c.title}" class="img-fluid case-thumb">
        </div>
        <div class="case-title header mt-2">${c.title}</div>
        <div class="case-title mt-0">${c.subtitle}</div>
      `;
  
      col.appendChild(card);
      container.appendChild(col);
    });
  
    // ✨ Scroll animation på nye kort
    gsap.from(".case-card", {
      scrollTrigger: {
        trigger: ".case-section",
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
     
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2
    });
  
    ScrollTrigger.refresh();
  
    // 🎬 Modal-åbning
    document.querySelectorAll('.case-card').forEach(card => {
      card.addEventListener('click', () => {
        const media = card.getAttribute('data-media');
        const size = card.getAttribute('data-size') || ""; 
        const category = card.getAttribute('data-category');

   if (category.toLowerCase() === "htmlsite") {
      window.open(media, "_blank");
      return; // spring modal over
   }
        openCustomModal({ media, size });
      });
    });
  }
  

  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("cases.json");
      caseData = await response.json();
      renderCases(); // <- sørger for at de vises ved load
    } catch (error) {
      console.error("Kunne ikke hente cases:", error);
      
    }
  
    // filter-knapper virker nu også
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCases(category);
      });
    });
  });