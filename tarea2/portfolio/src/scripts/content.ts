async function loadContent() {
  try {
    const response = await fetch("data/content.json");
    const data = await response.json();

    // Form
    const contactForm = document.getElementById("contactForm") as HTMLFormElement;
    if (data.header.contactEmail) {
      contactForm.setAttribute("action", `https://formsubmit.co/${data.header.contactEmail}`);
    }

    // Header
    (document.querySelector(".main-title") as HTMLElement).textContent =
      data.header.title;
    (document.querySelector(".sub-title") as HTMLElement).textContent =
      data.header.subtitle;

    const buttons = document.querySelectorAll(".buttons a button");
    buttons[0].textContent = data.header.button1.text;
    (buttons[0].parentElement as HTMLAnchorElement).setAttribute(
      "href",
      data.header.button1.link,
    );
    buttons[1].textContent = data.header.button2.text;
    (buttons[1].parentElement as HTMLAnchorElement).setAttribute(
      "href",
      data.header.button2.link,
    );

    // Education Section
    const educationSection = document.querySelectorAll(".section2 table tr td");
    educationSection[0].innerHTML = `
            <div>
                <h2>${data.education[0].degree}</h2>
                <h4>${data.education[0].institution}</h4>
                <h6>${data.education[0].year}</h6>
            </div>`;
    educationSection[1].innerHTML = `
            <div>
                <h2>${data.education[1].certificate}</h2>
                <h4>${data.education[1].institution}</h4>
                <h6>${data.education[1].year}</h6>
            </div>`;
    educationSection[2].innerHTML = `
            <div>
                <h2>${data.education[2].position}</h2>
                <h4>${data.education[2].company}</h4>
                <h6>${data.education[2].period}</h6>
            </div>`;

    // Projects Section
    const projectCells = document.querySelectorAll(".section3 table td");
    data.projects.forEach((project: any, index: number) => {
      projectCells[index].innerHTML = `
                <a href="${project.link}" target="_blank">
                    <div class="icon-button"><img src="media/arrowup${index + 1}.png" /></div>
                </a>
                <a href="${project.link}" target="_blank">
                    <h2>${project.name}</h2>
                    <aside>
                        <h6>${project.description}</h6>
                        <p>${project.technologies}</p>
                    </aside>
                </a>`;
    });
  } catch (error) {
    console.error("Error loading content:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadContent);
