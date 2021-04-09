function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition(){
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut"
    });

    tl.to(".loading-screen", {
        duration: 0.8,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3
    });

    tl.set(".loading-screen", { left: "-100%"});
}

function contentAnimation () {

    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity:0, stagger:0.4, delay:0.2});
}

$(function() {
    barba.init({

        sync:true,

        transitions: [
            {
                async leave(data){
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data){
                    contentAnimation();
                },

                async once(data){
                    contentAnimation();
                },
            },
        ],
    });
});

const options = {
    root: null,
    rootMargin: "200px",
    threshold: 0.9
  };
  
  let revealCallback = (entries, self) => {
    entries.forEach(entry => {
      let container = entry.target;
      let img = entry.target.querySelector("img");
      const easeInOut = "power3.out";
      const revealAnim = gsap.timeline({ ease: easeInOut });
  
      if (entry.isIntersecting) {
        revealAnim.set(container, {
          visibility: "visible"
        });
        revealAnim.fromTo(
          container,
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1,
            ease: easeInOut
          }
        );
        revealAnim.from(img, 4, {
          scale: 1.4,
          ease: easeInOut,
          delay: -1
        });
        self.unobserve(entry.target);
      }
    });
  };
  
  let revealObserver = new IntersectionObserver(revealCallback, options);
  
  document.querySelectorAll(".reveal").forEach(reveal => {
    revealObserver.observe(reveal);
  });

  $(window).on('scroll', function() {
    if($(window).scrollTop()){
      $('nav').addClass('black');
    }
    else 
    {
      $('nav').removeClass('black');
    }
  })

  $(document).ready(function(){
    $('.toggle').click(function(){
      $('ul').toggleClass('active1');
    })
  })