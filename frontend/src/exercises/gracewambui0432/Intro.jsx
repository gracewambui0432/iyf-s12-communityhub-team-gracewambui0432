// Intro - Grace Wambui - Task 15.1
function Intro() {
  const myName = "Grace Wambui";
  const today = new Date().toDateString();
  const hour = new Date().getHours();

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
        I am a student in the IYF Season 12 programme, based in Nairobi, Kenya,
        with a growing interest in software development and community-driven technology.
        I am currently building my foundation in web development, with a focus on
        creating clear, accessible, and user-centred applications.
      </p>
      <p>
        As the team lead for CommunityHub, I am responsible for coordinating our
        team workflow, maintaining our shared repository, and ensuring that our
        project meets the required standards for structure, collaboration, and delivery.
        I value clear communication, accountability, and mutual support within the team.
      </p>
      <p>
        My goal is to develop the technical and leadership skills needed to contribute
        meaningfully to real-world projects, and to build solutions that strengthen
        connection and participation within local communities.
      </p>
      <p>{greeting}</p>
    </div>
  );
}

export default Intro;