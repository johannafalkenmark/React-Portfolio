function Section2() {
  return (
    <div className="knowledge-box">
      <div id="knowledge" className="box-1">
        <h2>Knowledge</h2>
        <div className="grid">
          <div className="box-column">
            <ul>
              <h3> Technical</h3>
              <li> C# Html Javascript CSS React </li>
              <li> Upcoming courses in database, ASP.Net </li>
              <li>
                System configuration - managed workshops where i educated others
              </li>
              <li>
                {" "}
                Integrations between systems, data import/export, API and File
              </li>
              <li>
                Systemadmin roles: Lime, Intelliplan, EasyGenerator, Antura to
                name some.{" "}
              </li>
            </ul>
          </div>
          <div className="box-column">
            <ul>
              <h3> Other</h3>
              <li>Project Management - HR and IT </li>
              <li>
                Bachelor of Science Psychology & HR at Stockholm University
              </li>
              <li> Pedagogics/Teaching </li>
              <li> HR strategic and operational; Onboarding, offboarding </li>
              <li> Competence Development, CSRD, </li>
              <li> Recruitment </li>
              <li> HR Personel Admininstration and staffing </li>
              <li> Sale skills </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="experience" className="box-2">
        <h2>Experience</h2>
        <ul>
          <li>
            Project manager/HCM Consultant at CatalystOne Solutions 2021-2024
          </li>
          <li> Project manager/Educator at Mentor Sverige 2016-2021</li>
          <li>Recruiter/HR staffing at VRE Education AB</li>

          <li> Onboarding Coneference DJ at CGI </li>
          <li></li>
        </ul>
      </div>

      <div className="box-3">
        <h2>Reference</h2>
        Upon Request{" "}
        <a
          id="reference"
          target="self"
          href="mailto:johannafalkenmark@gmail.com"
        >
          johannafalkenmark@gmail.com
        </a>
      </div>
    </div>
  );
}
export default Section2;
