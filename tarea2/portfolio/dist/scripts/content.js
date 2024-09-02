var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadContent() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("data/content.json");
            const data = yield response.json();
            // Form
            const contactForm = document.getElementById("contactForm");
            if (data.header.contactEmail) {
                contactForm.setAttribute("action", `https://formsubmit.co/${data.header.contactEmail}`);
            }
            // Header
            document.querySelector(".main-title").textContent =
                data.header.title;
            document.querySelector(".sub-title").textContent =
                data.header.subtitle;
            const buttons = document.querySelectorAll(".buttons a button");
            buttons[0].textContent = data.header.button1.text;
            buttons[0].parentElement.setAttribute("href", data.header.button1.link);
            buttons[1].textContent = data.header.button2.text;
            buttons[1].parentElement.setAttribute("href", data.header.button2.link);
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
            data.projects.forEach((project, index) => {
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
        }
        catch (error) {
            console.error("Error loading content:", error);
        }
    });
}
document.addEventListener("DOMContentLoaded", loadContent);