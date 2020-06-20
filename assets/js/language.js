var userLang = (navigator.language || navigator.userLanguage);
let lang = userLang.includes('de') ? 'de' : 'en';
let currantLang = lang;
document.getElementById(lang).style.color = '#FFF';

let deContent = new Map([
    ['lading-page-content-p', 'Das HelpMyCar-System hilft Autofahrern mit einem vernetzten Auto, schnell und einfach Pannen bei einem Pannenhilfeunternehmen zu melden. Mitarbeiter dieses Unternehmens können die Pannenmeldungen auf einem Dashboard ansehen. Dabei werden die von dem vernetzten Auto übermittelte Daten über den Caruso Dataplace geholt, angezeigt und bestehende Probleme visualisiert. Dem Mitarbeiter werden die aktuell verfügbaren Service-Fahrzeuge des Unternehmens angezeigt. Mit Hilfe dieser Informationen kann der Mitarbeiter entscheiden, wie man dem Kunden am schnellsten helfen kann.'],
    ['app-introduction-p', 'Die HelpMyCar Driver App ermöglicht es Fahrern eines vernetzten Autos unkompliziert eine Panne an seinem Fahrzeug zu melden und begleitet ihn anschließend auf dem Weg zu der Behebung seiner Panne.<br> Die folgenden Bilder zeigen einen typischen Pannenhilfeprozess:'],
    ['app-content-figcaption-1', 'Nachdem der Nutzer sich eingelogged hat, kann er seine bei dem HelpMyCar-System regestrierten Fahrzeugesehen.<br><br>Er kann einen kleinen Überblick über die Panne erhalten und sich dieses Fahrzeug in einer detaillierten Detailansicht ansehen.<br><br>Mit dem Button am unteren Ende des Bildschirms kann er eine Hilfsanfrage senden.'],
    ['app-content-figcaption-2', 'In der Detailansicht sieht man welches Fahrzeugteil einen Fehler meldet. Darunter sieht man die Warnleuchten des Fahrzeugs mit einer kurzen Beschreibung.<br><br>Weiterhin erhält man zusätzliche allgemeine Information über sein Fahrzeug.'],
    ['app-content-figcaption-3', 'Im Hauptschritt des Pannenhilfeprozess wird der Nutzer durch die vier verschiedenen status des prozesses geleitet:<br><br><ol><li>Anfrage wird bearbeitet</li><li>Fehler werden analysiert</li><li>Service-Fahrzeug ist unterwegs, mit vorraussichtlicher Ankunftszeit</li><li>Mechaniker angekommen und behebt das Problem</li></ol>'],
    ['dashboard-introduction-p', 'Das Assistance Operator Dashboard ermöglicht einem Mitarbeiter des Pannehilfeunternehmens komfortabel und effizient Pannenmeldungen von Autofahrern zu bearbeiten. Der Mitarbeiter bekommt eine Überblick über alle eingegangen Hilfsanfragen und deren Status. Wählt man eine der Hilfsanfragen aus um sie zu bearbeiten, erscheint eine detaillierte Übersicht der Kunden- und Fahrzeuginformationen, die eine schnelle Problemanalyse ermöglicht.<br>Das Dashboard ist in drei Spalten gegliedert, welche anhand des folgenden Bildes genauer erläutert werden:'],
    ['dashboard-content-description-left', 'Auf der linken Seite des Dashboards befindet sich die übersicht der eingegangenen Hilfsanfragen.<br> Diese sind je nach Status farblich markiert.<br>Damit das Dashboard bei vielen Anfragen übersichtlich bleibt, können diese über die Filterleiste oder durch eine Suche über das Lupensymbol gefiltert werden. Das rote Symbol am Ende der Sidebar sorgt für einen Reset des Dashboards, sodass das Startszenario wieder geladen wird und das System für eine neue Demonstration bereit ist.'],
    ['dashboard-content-description-middle', 'In der Mitte des Dashboards ist die detaillierte Übersicht der Kunden- und Fahrzeuginformationen zu erkennen. Anhand des drehbaren Automodells, in dem die fehlerhaften Bereiche des Autos markiert werden, können die vorhandenen Probleme schnell erkannt und analysiert werden. Die eingebundene Karte zeigt das Auto des Kunden und alle verfügbaren Service Fahrzeuge mit ihrer Position an. So kann der Assistance Operator schnell einen Überblick über die einsatzbereiten Service Fahrzeuge und deren Entferung zum Kunden erlangen.'],
    ['dashboard-content-description-right', 'Die Elemente auf der rechten Seite des Dashboards zeigen die vom Fahrzeug gesendeten Diagnostic Trouble Codes und deren Beschreibung sowie den Warnleuchtenstatus. Sobald der Assistance Operator das Problem analysiert hat, kann er einen Abschleppwagen oder ein On-site Service Fahrzeug aus der Liste auswählen und entsenden. Sollte der Kunde oder der Assistance Operator weitere Fragen haben, können diese über den Chat am rechten unteren Rand geklärt werden.'],
    ['technologies-h1', 'Technologien'],
    ['technologies-content-card-1-p', 'Angular ist ein TypeScript Frontend Framework für die Erstellung von plattformübergreifenden Webanwendungen.<br><br>In Verbindung mit Angular verwendete Technologien:'],
    ['technologies-content-card-2-p', 'Spring Boot ist eine Spring Erweiterung, die die Konfiguration und Erstellung von eigenständigen Spring Applikationen vereinfacht.<br><br>Mit Spring Boot in Verbindung verwendete Technologien:'],
    ['technologies-content-card-3-p', 'Adobe XD ist ein Design-Tool zu Erstellung von Wireframes und Mockups von Web-Apps und Mobile Apps.'],
    ['technologies-content-card-4-p', 'Docker ist eine Software zur Containervirtualisierung, sie vereinfacht das Deployment von Anwendungen.'],
    ['architecture-content-text-h1', 'Architektur'],
    ['architecture-content-text-p', 'Mit hilfe eines Browsers können die Endnutzer des HelpMyCar-Systems auf die App und das Dashboard zugreifen, welche als Angular Apps implementiert sind.<br><br>Die Angular Apps besorgen über HTTP die von den Nutzern angefragten Informationen vom Spring Boot Server, welcher über eine Caruso Dataplace API-Schnittstelle Informationen von vernetzten Fahrzeugen abfragt und dem Frontend bereitstellt.<br><br>Die Zusatzfunktion, die Fahrzeuge auf dem Dashboard auf einer Karte zu sehen, wird mithilfe der GoogleMaps-API ermöglicht.<br><br>'],
    ['architecture-content-text-a', 'In der Architekturspezifikiation weiter lesen...'],
    ['process-content-h1', 'Prozess'],
    ['process-content-h2-1', '<a href="https://www.scrum.org/resources/scrum-guide" target="_blank">Scrum</a> Struktur'],
    ['process-content-p-1', 'Ein Sprint dauert jeweils von Dienstag 10:00 Uhr bis Dienstag 09:59 Uhr. Die Retrospektive des vergangenen Sprints findet am Dienstag von 09:00 - 09:59 Uhr statt, während das Planning des neuen Sprints (maximale Dauer 3 Stunden) um 10:00 Uhr beginnt. Das Daily Scrum findet täglich mit den Informatikern um 9.00 Uhr statt und soll höchstens 15 Minuten dauern. Außerdem ist für jeden Dienstag um 17:00 Uhr ein Meeting mit dem Kunden angedacht, in dem der bisherige Fortschritt präsentiert und Feedback eingeholt werden kann. Als Sprint Review sind die offiziellen SEP Jour-Fixe und Review Termine mit den betreuenden Professoren angesetzt. <br><br>'],
    ['process-content-h2-2', 'Rollenverteilung'],
    ['process-content-p-2', 'In unserem Team wird die Rolle des Scrum Masters nicht besetzt. Stattdessen übernimmt Anastasia Tataridou die Planung und Moderation der einzelnen Meetings. Einen Product Owner im eigentlichen Sinne haben wir ebenfalls nicht. Die Priorisierung der Aufgaben und Features erfolgt gemeinsam als Team in enger Absprache mit dem Ansprechpartner des Kunden. Der Schriftverkehr mit der Kundenseite wird von Simon Schneider geführt. Der Projektleiter, Marvin Karhan, ist für das Zeit- und Risikomanagement für die einzelnen Sprints verantwortlich. Die Rollen für die übrigen Teammitglieder werden nicht fest definiert. Jeder kann sich die Aufgaben aus dem Sprint Backlog aussuchen, die er oder sie gern bearbeiten möchte.'],
    ['team-h1', 'Unser Team'],
    ['team-description', 'Bestehend aus vier Kommunikationsdesignern und fünf Informatikstudenten der<br> Hochschule Mannheim bietet unser Team ein umfassendes Paket an Kompetenzen.<br> Zusammen sind wir Greenbox Collective und haben die vergangenen drei Monate<br> am HelpMyCar Projekt gearbeitet.'],
    ['footer-a', 'Impressum']
]);

let enContent = new Map([
    ['lading-page-content-p', 'The HelpMyCar system helps drivers with a connected car to report breakdowns to a breakdown service company quickly and easily. Employees of this company can view the breakdown reports on a dashboard. The data transmitted by the connected car is retrieved via the Caruso Dataplace, to be displayed and visualized on the dashboard. The employee is shown the company\'s currently available service vehicles. With the help of this information, the employee can decide how to help the customer most quickly.'],
    ['app-introduction-p', 'The HelpMyCar Driver App enables drivers of a connected car to easily report a breakdown of their car and then accompanies them on their way to fix the breakdown.<br>The following pictures show a typical roadside assistance process:'],
    ['app-content-figcaption-1', 'After the user has logged in, he can see his registered vehicles in the HelpMyCar system.<br><br>He can get a small overview of the breakdown of his car and can have a look at each vehicle in a detailed view.<br><br>With the button at the bottom of the screen he can send a help request.'],
    ['app-content-figcaption-2', 'In the detailed view you can see which part of the vehicle reports a error. Below you can see the check control signs of the vehicle with a short description.<br><br>Furthermore you get additional general information about your vehicle.'],
    ['app-content-figcaption-3', 'In the main step of the roadside assistance process, the user is guided through the four different statuses of the process:<br><br><ol><li>Request will be processed</li><li>Errors are being analyzed</li><li>Service vehicle is on its way, with estimated time of arrival</li><li>Mechanic arrives and fixes the problem</li></ol>'],
    ['dashboard-introduction-p', 'The Assistance Operator Dashboard enables an employee of the roadside assistance company to comfortably and efficiently process breakdown reports from drivers. The employee gets an overview of all incoming assistance requests and their status. If one selects one of the assistance requests to process them, a detailed overview of the customer and vehicle information appears, which enables a quick problem analysis.<br> The dashboard is divided into three columns, which are explained in more detail using the following picture:'],
    ['dashboard-content-description-left', 'On the left side of the dashboard is the overview of the received help requests.<br> These are color-coded according to their status.<br> To keep the dashboard clear when there are many requests, they can be filtered using the filter bar or by searching using the magnifying glass icon. The red symbol at the end of the sidebar resets the dashboard so that the start scenario is reloaded and the system is ready for a new demonstration'],
    ['dashboard-content-description-middle', 'In the middle of the dashboard you can see the detailed overview of customer and vehicle information. By means of the rotating car model, in which the faulty areas of the car are marked, the existing problems can be quickly identified and analysed. The integrated map shows the customer\'s car and all available service vehicles with their position. In this way, the assistance operator can quickly gain an overview of the service vehicles that are ready for use and their distance to the customer'],
    ['dashboard-content-description-right', 'The items on the right side of the dashboard show the Diagnostic Trouble Codes sent by the vehicle and their description as well as the check control lights status. Once the Assistance Operator has analysed the problem, he can select and send a tow truck or on-site service vehicle from the list. Should the customer or the Assistance Operator have any further questions, these can be clarified via the chat on the bottom right-hand side'],
    ['technologies-h1', 'Technologies'],
    ['technologies-content-card-1-p', 'Angular is a TypeScript front-end framework for creating cross-platform web applications.<br><br> Technologies used in conjunction with Angular:'],
    ['technologies-content-card-2-p', 'Spring Boot is a Spring extension that simplifies the configuration and creation of standalone Spring applications.<br><br> Technologies used in conjunction with Spring Boot:'],
    ['technologies-content-card-3-p', 'Adobe XD is a design tool for creating wireframes and mockups of web and mobile apps.'],
    ['technologies-content-card-4-p', 'Docker is a software for container virtualization, it simplifies the deployment of applications.'],
    ['architecture-content-text-h1', 'Architecture'],
    ['architecture-content-text-p', 'With the help of a browser the end users of the HelpMyCar system can access the app and the dashboard, which are implemented as Angular Apps. <br><br>The Angular Apps retrieve the information requested by users via HTTP from the Spring Boot Server, which queries information from connected vehicles via the Caruso Dataplace API interface and provides it to the frontend.<br><br> The additional function of seeing the vehicles on the dashboard on a map is enabled by the GoogleMaps API.<br><br>'],
    ['architecture-content-text-a', 'Read more in the architecture specification...'],
    ['process-content-h1', 'Process'],
    ['process-content-h2-1', '<a href="https://www.scrum.org/resources/scrum-guide" target="_blank">Scrum</a> structure'],
    ['process-content-p-1', 'A sprint lasts from Tuesday 10:00 am to Tuesday 09:59 am The retrospective of the previous Sprint takes place on Tuesday from 09:00 - 09:59, while the planning of the new Sprint (maximum duration 3 hours) starts at 10:00 am. The Daily Scrum will take place daily with the computer scientists at 9:00 am and should take a maximum of 15 minutes. In addition, a meeting with the customer is planned for every Tuesday at 5:00 pm, where progress to date can be presented and feedback obtained. The official SEP Jour-Fixes and review appointments with the supervising professors are scheduled as Sprint Review. <br><br>'],
    ['process-content-h2-2', 'Distribution of roles'],
    ['process-content-p-2', 'In our team the role of Scrum Master is not filled. Instead Anastasia Tataridou takes over the planning and moderation of the individual meetings. We also do not have a Product Owner in the true sense of the word. The prioritization of tasks and features is done together as a team in close consultation with the customer\'s contact person. Correspondence with the customer side is conducted by Simon Schneider. The project manager, Marvin Karhan, is responsible for time and risk management for the individual sprints. The roles for the other team members are not defined. Everyone can choose the tasks from the sprint backlog that he or she would like to work on'],
    ['team-h1', 'Our Team'],
    ['team-description', 'Consisting of four communication designers and five computer science students from the <br> University of Applied Sciences Mannheim, our team offers a comprehensive package of competencies.<br> Together we are Greenbox Collective and have been working on the HelpMyCar project for the past three months.'],
    ['footer-a', 'Legal Disclosure']
]);

// takes a language (either 'de' oder 'en' atm) and changes the language of all text on the site
// for a element to be able to be translated the translation must be provided in the contrent maps ('deContant' and 'enContent')
// to add a entry to a content maps add a id to the element and provide it as a key in the content maps with its translation in the specified leng
// also it must have the class 'translate'
let changeLang = (lang) => {
    console.log('change lang', lang, currantLang);
    if (lang === currantLang) {
        return;
    }
    let elToTranslate = document.getElementsByClassName('translate');
    let dict = lang === 'de' ? deContent : enContent;

    for (const el of elToTranslate) {
        el.innerHTML = dict.get(el.id);
    }

    document.getElementById(currantLang).style.color = '#707070';
    document.getElementById(lang).style.color = '#FFF';
    currantLang = lang;
};


let elToTranslate = document.getElementsByClassName('translate');

for (const el of elToTranslate) {
    // console.log(el.id, el.textContent);
    console.log(el.id, el.innerHTML);
}