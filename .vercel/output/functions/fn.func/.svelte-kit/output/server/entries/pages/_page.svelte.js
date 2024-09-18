import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("$lib/global.css");:root{--theme-creme:#F1F7ED;--theme-black:#07020D;--theme-red:#C84C09;--theme-green:#3C905F;--theme-light-green:#48AD72;--theme-sunset:#FFD29D;--theme-grey:#777;--theme-dark-grey:#444;--theme-light-grey:#DDD}h2.svelte-1vjissi{color:var(--theme-red)}h2.svelte-1vjissi:hover{opacity:70%;cursor:default}a.svelte-1vjissi{color:var(--theme-green)}a.svelte-1vjissi:hover{color:var(--theme-light-green)}ul.svelte-1vjissi{list-style-type:none}.menu-item.svelte-1vjissi{justify-content:center;margin:auto;width:100%;color:var(--theme-black);text-decoration:none}.menu-item.svelte-1vjissi:hover{cursor:pointer;color:var(--theme-grey)}.team-ticket.svelte-1vjissi{width:20%;height:max-content;display:inline-block;padding:5%;vertical-align:top}.team-img.svelte-1vjissi{width:100%;opacity:75%}.team-img.svelte-1vjissi:hover{opacity:100%}#menu.svelte-1vjissi{list-style-type:none;display:flex;justify-content:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let team = [];
  let member = {
    "name": "John Doe",
    "title": "Teaching Assistant 👨‍🏫",
    "bio": "I'm a Computer Science and Engineering (6-3) student, and I teach Intro to CS and Calc I (or smth).",
    "email": "john.doe@mit.edu",
    "pic": "src/lib/team_pics/john_doe.jpeg"
    // make sure ratio is 1:1
  };
  team.push(member);
  let another_member = {
    "name": "Uni Corn",
    "title": "Teaching Unicorn 🧑‍🏫",
    "bio": "I'm a unicorn! 🦄",
    "email": "uni.corn@wonderland.edu",
    "pic": "src/lib/team_pics/unicorn.jpeg"
    // make sure ratio is 1:1
  };
  team.push(another_member);
  another_member = {
    "name": "Jane Doe",
    "title": "Teaching Assistant 👩‍🏫",
    "bio": "I'm a Mathematics and Computation (18C) student, and I teach Calc I and Calc II (or smth).",
    "email": "jane.doe@mit.edu",
    "pic": "src/lib/team_pics/jane_doe.jpeg"
    // make sure ratio is 1:1
  };
  team.push(another_member);
  another_member = {
    "name": "Jenna Doe",
    "title": "Lab Assistant 👩‍🔬",
    "bio": "I'm a Mathematics (18) student, and I teach Calc I and Calc II (or smth).",
    "email": "jenna.doe@mit.edu",
    "pic": "src/lib/team_pics/jenna_doe.jpeg"
    // make sure ratio is 1:1
  };
  team.push(another_member);
  $$result.css.add(css);
  return `<center data-svelte-h="svelte-ct8pxk"><h1>MIT Small Private Online Courses for Gaza</h1> <ul id="menu" class="svelte-1vjissi"><a href="#about" class="menu-item svelte-1vjissi"><li onclick="">About</li></a> <a href="#team" class="menu-item svelte-1vjissi"><li>Team</li></a> <a href="#contact" class="menu-item svelte-1vjissi"><li>Contact</li></a> <a href="#sponsors" class="menu-item svelte-1vjissi"><li>Sponsors</li></a></ul></center> <section id="about" data-svelte-h="svelte-1dm7lul"><h2 class="svelte-1vjissi">About 📖</h2> <p><a href="https://mitxonline.mit.edu" class="svelte-1vjissi">MITx Online</a>, part of <a href="https://www.mit.edu" class="svelte-1vjissi">MIT</a>&#39;s
        <a href="https://openlearning.mit.edu" class="svelte-1vjissi">Open Learning</a>, is interested in sponsoring several SPOCs,
        &quot;Small Private Online Courses,&quot; for faculty and students in or from the Gaza Strip.
        This form is designed to collect information about who might be interested in taking
        one of these courses, what courses are of greatest interest, and who among faculty
        from the universities in the Strip is interested in serving as mentor for these courses.
        Completion of the course can lead to an MITx certificate. Normally there is a charge for
        this but MIT Open Learning has arranged to waive this fee. We aim for some small compensation
        for the faculty mentors.</p> <p>There are two non-overlapping collections of MITx courses: one offered on edx (owned by 2U),
        and MITx Online, which is maintained by MIT. The courses for the Gaza program can be chosen
        from either collection. We have listed the most popular subjects separately in the survey,
        but if there is sufficient interest we may consider other courses. All of these courses have
        their origin in courses designed by MIT faculty and actually given at MIT to our own students.
        In many cases the online material is used today residentially at MIT. These courses are rigorous
        and demanding. The links provided in the survey include brief syllabi. In many cases these courses
        correspond closely to courses offered by Gaza universities. As of now we do not have agreement that
        a certificate of completion of any of these courses will be accepted for credit at a Palestinian
        university. Nevertheless, we hope you find these potential offerings of interest and value.</p> <p>We will be running three SPOCs, each limited to 30 students. We hope to staff each one with a faculty
        member or advanced student in or from Gaza whose professional expertise includes the course material,
        as well as with MIT students with experience with these courses. These facilitators will conduct office
        hours (perhaps in person), run problem sessions, and be available to answer questions about the course material.</p> <p>The language of the online material is English. Each online course contains a great deal of material beyond text:
        video lectures, worked examples, interactive checks of your understanding, graded problem sets, and more.
        They are designed to be accessible asynchronously to independent learners, but lend themselves well to the SPOC
        format as well. The starting date could be as early as September 15, depending on interest, and they are between
        13 and 15 weeks long. They will be organized as synchronous courses, with deadlines for submission of homework.</p></section> <section id="team"><h2 class="svelte-1vjissi" data-svelte-h="svelte-r9jcwr">Team 👷</h2> <div id="team-container">${each(team, (member2) => {
    return `<div class="team-ticket svelte-1vjissi"><img class="team-img svelte-1vjissi"${add_attribute("src", member2.pic, 0)}> <h3>${escape(member2.name)}</h3> <h4>${escape(member2.title)}</h4> <p>${escape(member2.bio)} <br><br> 📧: <a href="${"mailto:" + escape(member2.email, true)}" class="svelte-1vjissi">${escape(member2.email)}</a></p> </div>`;
  })}</div></section> <section id="contact" data-svelte-h="svelte-buln48"><h2 class="svelte-1vjissi">Contact ☎️</h2> <p>You can reach us by phone or email:</p> <ul class="svelte-1vjissi"><li>📞 <a href="tel:6170000000" class="svelte-1vjissi">(617) 000-0000</a></li> <li>📧 <a href="mailto:spoc.gaza@mit.edu" class="svelte-1vjissi">spoc.gaza@mit.edu</a></li></ul></section> <section id="sponsors" data-svelte-h="svelte-kldvtl"><h2 class="svelte-1vjissi">Sponsors 🙏</h2> <p><b>Thank you to our sponsors!</b></p></section>`;
});
export {
  Page as default
};
