var typed = new Typed('.text', {
    strings: ['Web Designer', ' Frontend Developer'],
    typeSpeed: 100,
    backDelat:100,  
  });

  // for responsiveness//
  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
});

//onlick event on skills, experience and education //



 























// const counters = document.querySelectorAll('.count');
// const counterSection = document.getElementById('counter-section');
// let hasCounted = false;

// const resetCounts = () => {
//     counters.forEach(counter => {
//         counter.innerText = '0';
//     });
// };

// const startCounting = () => {
//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-target');
//             const count = +counter.innerText;
//             const increment = target / 200;

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCount, 10);
//             } else {
//                 counter.innerText = target;
//             }
//         };
//         updateCount();
//     });
// };

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             if (!hasCounted) {
//                 startCounting();
//                 hasCounted = true;
//             }
//         } else {
//             resetCounts();
//             hasCounted = false;
//         }
//     });
// }, { threshold: 0.5 });

// observer.observe(counterSection);

