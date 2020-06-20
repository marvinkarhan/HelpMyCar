var userLang = (navigator.language || navigator.userLanguage);
let lang = userLang.includes('de') ? 'de' : 'en';
let currantLang = lang;
document.getElementById(lang).style.color = '#FFF';

let deContent = new Map([
    ['lading-page-content-p', 'Das HelpMyCar-System hilft Autofahrern mit einem vernetzten Auto, schnell und einfach Pannen bei einem Pannenhilfeunternehmen zu melden. Mitarbeiter dieses Unternehmens können die Pannenmeldungen auf einem Dashboard ansehen. Dabei werden die von dem vernetzten Auto übermittelte Daten über den Caruso Dataplace geholt, angezeigt und bestehende Probleme visualisiert. Dem Mitarbeiter werden die aktuell verfügbaren Service-Fahrzeuge des Unternehmens angezeigt. Mit Hilfe dieser Informationen kann der Mitarbeiter entscheiden, wie man dem Kunden am schnellsten helfen kann.'],
    ['app-introduction-p', 'Die HelpMyCar Driver App ermöglicht es Fahrern eines vernetzten Autos unkompliziert eine Panne an seinem Fahrzeug zu melden und begleitet ihn anschließend auf dem Weg zu der Behebung seiner Panne.<br> Die folgenden Bilder zeigen einen typischen Pannenhilfeprozess:'],
    ['app-content-figcaption-1', 'Nachdem der Nutzer sich eingelogged hat, kann er seine bei dem HelpMyCar-System regestrierten Fahrzeugesehen.<br><br>Er kann einen kleinen Überblick über die Panne erhalten und sich dieses Fahrzeug in einer detaillierten Detailansicht ansehen.<br><br>Mit dem Button am unteren Ende des Bildschirms kann er eine Hilfsanfrage senden.'],
    ['app-content-figcaption-2', 'In der Detailansicht sieht man welches Fahrzeugteil einen Fehler meldet. Darunter sieht man die Warnleuchten des Fahrzeugs mit einer kurzen Beschreibung.<br><br>Weiterhin erhält man zusätzliche allgemeine Information über sein Fahrzeug.'],
    ['app-content-figcaption-3', 'Im Hauptschritt des Pannenhilfeprozess wird der Nutzer durch die vier verschiedenen status des prozesses geleitet:<br><br><ol><li>Anfrage wird bearbeitet</li><li>Fehler werden analysiert</li><li>Service-Fahrzeug ist unterwegs, mit vorraussichtlicher Ankunftszeit</li><li>Mechaniker angekommen und behebt das Problem</li></ol>']
]);

let enContent = new Map([
    ['lading-page-content-p', 'The HelpMyCar system helps drivers with a connected car to report breakdowns to a breakdown service company quickly and easily. Employees of this company can view the breakdown reports on a dashboard. The data transmitted by the connected car is retrieved via the Caruso Dataplace, to be displayed and visualized on the dashboard. The employee is shown the company\'s currently available service vehicles. With the help of this information, the employee can decide how to help the customer most quickly.'],
    ['app-introduction-p', 'The HelpMyCar Driver App enables drivers of a connected car to easily report a breakdown of their car and then accompanies them on their way to fix the breakdown.<br>The following pictures show a typical roadside assistance process:'],
    ['app-content-figcaption-1', 'After the user has logged in, he can see his registered vehicles in the HelpMyCar system.<br><br>He can get a small overview of the breakdown of his car and can have a look at each vehicle in a detailed view.<br><br>With the button at the bottom of the screen he can send a help request.'],
    ['app-content-figcaption-2', 'In the detailed view you can see which part of the vehicle reports a error. Below you can see the check control signs of the vehicle with a short description.<br><br>Furthermore you get additional general information about your vehicle.'],
    ['app-content-figcaption-3', 'In the main step of the roadside assistance process, the user is guided through the four different statuses of the process:<br><br><ol><li>Request will be processed</li><li>Errors are being analyzed</li><li>Service vehicle is on its way, with estimated time of arrival</li><li>Mechanic arrives and fixes the problem</li></ol>']
]);

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