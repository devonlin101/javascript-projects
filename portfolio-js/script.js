// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// function for chnage tabs
function changetab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// tabs.forEach((tab) =>
//   tab.addEventListener("click", () => {
//     for (i = 0; i < tabs.length; i++) {
//       tabs[i].classList.remove("active");
//     }
//     tab.classList.toggle("active");
//     if (tab.id === "home") {
//       content.innerHTML = `
//       <div class='portfolio'><img class='pic' src='./devonlin.jpeg' width='150' height='150' /><h1>Kevin Lin</h1><h4>web developer</h4>
//           <div class='tech-stack'><span class="iconify" data-icon="vscode-icons:file-type-html"></span><span class="iconify" data-icon="vscode-icons:file-type-pug"></span><span class="iconify" data-icon="vscode-icons:file-type-css"></span><span class="iconify" data-icon="logos:sass"></span><span class="iconify" data-icon="logos:javascript"></span><span class="iconify" data-icon="logos:typescript-icon"></span><span class="iconify" data-icon="logos:react"></span><span class="iconify" data-icon="logos:vue"></span><span class="iconify" data-icon="logos:neovim"></span><span class="iconify" data-icon="vscode-icons:folder-type-mongodb-opened"></span><span class="iconify" data-icon="logos:mysql"></span><span class="iconify" data-icon="logos:firebase"></span><span class="iconify" data-icon="flat-color-icons:linux"></span><span class="iconify" data-icon="bi:git"></span><span class="iconify" data-icon="logos:bash-icon"></span><span class="iconify" data-icon="logos:nodejs"></span><span class="iconify" data-icon="logos:rust"></span><span class="iconify" data-icon="cib:hackerrank"></span><span class="iconify" data-icon="logos:webassembly"></span>
//           </div><div class="direct-contact-container">
//
//         <ul class="contact-list">
//
//           <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">devonlin101@gmail.com</a></span></i></li>
//           <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-210-956-3666" title="Give me a call">(210) 956-3666</a></span></i></li>
//           <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Harrisburg, PA</span></i></li>
//         </ul></div>
//
//         `;
//     } else if (tab.id === "about") {
//       console.log("about");
//       content.innerHTML = `<div class='about-container'><h1>Story of My Life</h1>
// 	 <p class='bio'> Concentration, Creativity,Customer-service skills, fast learner and Detail oriented, a
// web developer able to structuring,developing and implementing professional websites
// from the ground up, and able to complete projects efficiently and satisfy customers
// with attractive, user-friendly websites. Fast learner, hard worker and team player who is
// proficient in javascript language.</p>
// <p class='bio'> I immigrated to the United States from China when I was 18 year old.
//  After I dropped out of college at the end of year 2012, I work as
//  delivery driver in a small chinese restaurant till late year of
//  2018. and then I found web development online, there are plenty free
//  resources online teach you how to programming. I like it and have
//  interest in programming. Since then I self study web development
//  intermittently till now.
//  <p>
// 		 </div>`;
//     } else if (tab.id === "projects") {
//       console.log("projects");
//       content.innerHTML = `<div class='projects-container'>
// <h1>PROJECTS</h1>
// <div class='pcontainer'>
// <div class="card">
//     <div class="card-header">
//       <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
//     </div>
//     <div class="card-body">
//       <span class="tag tag-teal">Technology</span>
//       <h4>
//         Why is the Tesla Cybertruck designed the way it
//         is?
//       </h4>
//       <p>
//         An exploration into the truck's polarising design
//       </p>
//       <div class="user">
//         <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
//         <div class="user-info">
//           <h5>July Dec</h5>
//           <small>2h ago</small>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="card">
//     <div class="card-header">
//       <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
//     </div>
//     <div class="card-body">
//       <span class="tag tag-purple">Popular</span>
//       <h4>
//         How to Keep Going When You Don’t Know What’s Next
//       </h4>
//       <p>
//         The future can be scary, but there are ways to
//         deal with that fear.
//       </p>
//       <div class="user">
//         <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
//         <div class="user-info">
//           <h5>Eyup Ucmaz</h5>
//           <small>Yesterday</small>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="card">
//     <div class="card-header">
//       <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
//     </div>
//     <div class="card-body">
//       <span class="tag tag-pink">Design</span>
//       <h4>
//         10 Rules of Dashboard Design
//       </h4>
//       <p>
//         Dashboard Design Guidelines
//       </p>
//       <div class="user">
//         <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
//         <div class="user-info">
//           <h5>Carrie Brewer</h5>
//           <small>1w ago</small>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
// 			 </div>`;
//     } else {
//       console.log("contact");
//       content.innerHTML = `<div class="contact-container">
// 	<div class="row">
// 			<h1>contact us</h1>
// 	</div>
// 	<div class="row">
// 			<h4 style="text-align:center">We'd love to hear from you!</h4>
// 	</div>
// 	<div class="row input-container">
// 			<div class="col-xs-12">
// 				<div class="styled-input wide">
// 					<input type="text" required />
// 					<label>Name</label>
// 				</div>
// 			</div>
// 			<div class="col-md-6 col-sm-12">
// 				<div class="styled-input">
// 					<input type="text" required />
// 					<label>Email</label>
// 				</div>
// 			</div>
// 			<div class="col-md-6 col-sm-12">
// 				<div class="styled-input" style="float:right;">
// 					<input type="text" required />
// 					<label>Phone Number</label>
// 				</div>
// 			</div>
// 			<div class="col-xs-12">
// 				<div class="styled-input wide">
// 					<textarea required></textarea>
// 					<label>Message</label>
// 				</div>
// 			</div>
// 			<div class="col-xs-12">
// 				<div class="btn-lrg submit-btn">Send Message</div>
// 			</div>
// 	</div>
// </div>`;
//     }
//   })
// );
// //tabs.on("click", function () {
// //  tabs.removeClass("active");
// //  $(this).addClass("active");
// //});
