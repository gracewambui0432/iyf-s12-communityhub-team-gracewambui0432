// Intro - Claire Gakuru - Task 15.3
function Intro() {
  const myName = "Claire Gakuru";
  const now = new Date();
  const today = now.toLocaleDateString();
  const hour = now.getHours();

  let greeting = "";
  if (hour < 12) {
    greeting = "Good morning, and welcome to my introduction.";
  } else if (hour < 17) {
    greeting = "Good afternoon, and welcome to my introduction.";
  } else {
    greeting = "Good evening, and welcome to my introduction.";
  }

  return (
    <div>
      <h1>Hello, I am {myName}</h1>
      <p>Today is {today}.</p>
      <p>
        I am a student in the IYF Season 12 programme, based in Ruiru, Kenya,
        with a growing interest in software development and community-driven technology.
        I am currently building my foundation in web development, with a focus on
        creating clear, accessible, and user-friendly applications.
      </p>
      <p>
        As the frontend developer for CommunityHub, I am responsible for building
        the user interface, creating reusable components, and ensuring that our
        pages are clean, responsive, and easy to use for everyone in the community.
        I value teamwork, learning by doing, and supporting each other to grow.
      </p>
      <p>
        My goal is to develop the technical skills needed to contribute
        meaningfully to real-world projects, and to build solutions that strengthen
        connection and participation within local communities.
      </p>
      <p>{greeting}</p>
    </div>
  );
}

export default Intro;
