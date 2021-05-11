import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import {Country} from '@angular-material-extensions/select-country';
import {MatSelectModule} from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements AfterViewInit {

  @ViewChild('schedulerReference', {static: false}) scheduler: jqxSchedulerComponent;
 public  modeselect = 'français' ;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  predefinedCountries: Country[] = [
    {
      name: 'Germany',
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      numericCode: '276',
      callingCode: '276'
    },
    {
      name: 'France',
      alpha2Code: 'FR',
      alpha3Code: 'FRA',
      numericCode: '250',
      callingCode: '250'
    },
    {
      name: 'united Kingdom',
      alpha2Code: 'UK',
      alpha3Code: 'UK',
      numericCode: '056',
      callingCode: '056'
    },
  ];

  source: any =
    {
      dataType: 'array',
      dataFields: [
        {name: 'id', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'location', type: 'string'},
        {name: 'subject', type: 'string'},
        {name: 'calendar', type: 'string'},
        {name: 'start', type: 'date'},
        {name: 'end', type: 'date'}
      ],
      id: 'id',
      localData: this.generateAppointments()
    };
  dataAdapter: any = new jqx.dataAdapter(this.source);
  date: any = new jqx.date(2020, 11, 23);
  appointmentDataFields: any =
    {
      from: 'start',
      to: 'end',
      id: 'id',
      description: 'description',
      location: 'location',
      subject: 'subject',
      resourceId: 'calendar'
    };
  resources: any =
    {
      colorScheme: 'scheme04',
      dataField: 'calendar',
      source: new jqx.dataAdapter(this.source)
    };
  views: any[] =
    [
      'dayView',
      'weekView',
      'monthView'
    ];

  francais = {
    // separator of parts of a date (e.g. '/' in 11/05/1955)
    '/': '/',
    // separator of parts of a time (e.g. ':' in 05:44 PM)
    ':': ':',
    // the first day of the week (0 = Sunday, 1 = Monday, etc)
    firstDay: 1,
    days: {
      // full day names
      names: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      // abbreviated day names
      namesAbbr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Vend', 'Sam'],
      // shortest day names
      namesShort: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Sa']
    },
    months: {
      // full month names (13 months for lunar calendards -- 13th month should be '' if not lunar)
      names: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août ', 'Septembre', 'Octobre', 'Novembre', 'Décembre', ''],
      // abbreviated month names
      namesAbbr: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juill', 'Aoù', 'Sep', 'Oct', 'Nov', 'Dec', '']
    },
    // AM and PM designators in one of these forms:
    // The usual view, and the upper and lower case versions
    //      [standard,lowercase,uppercase]
    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
    //      null
    AM: ['AM', 'am', 'AM'],
    PM: ['PM', 'pm', 'PM'],
    eras: [
      // eras in reverse chronological order.
      // name: the name of the era in this culture (e.g. A.D., C.E.)
      // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
      // offset: offset in years from gregorian calendar
      {name: 'A.D.', start: null, offset: 0}
    ],
    twoDigitYearMax: 2029,
    patterns: {
      // short date pattern
      d: 'M/d/yyyy',
      // long date pattern
      D: 'dddd, MMMM dd, yyyy',
      // short time pattern
      t: 'h:mm tt',
      // long time pattern
      T: 'h:mm:ss tt',
      // long date, short time pattern
      f: 'dddd, MMMM dd, yyyy h:mm tt',
      // long date, long time pattern
      F: 'dddd, MMMM dd, yyyy h:mm:ss tt',
      // month/day pattern
      M: 'MMMM dd',
      // month/year pattern
      Y: 'yyyy MMMM',
      // S is a sortable format that does not lety by culture
      S: 'yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss',
      // formatting of dates in MySQL DataBases
      ISO: 'yyyy-MM-dd hh:mm:ss',
      ISO2: 'yyyy-MM-dd HH:mm:ss',
      d1: 'dd.MM.yyyy',
      d2: 'dd-MM-yyyy',
      d3: 'dd-MMMM-yyyy',
      d4: 'dd-MM-yy',
      d5: 'H:mm',
      d6: 'HH:mm',
      d7: 'HH:mm tt',
      d8: 'dd/MMMM/yyyy',
      d9: 'MMMM-dd',
      d10: 'MM-dd',
      d11: 'MM-dd-yyyy'
    },
    backString: 'Précédent',
    forwardString: 'Suivant',
    toolBarPreviousButtonString: 'Précédent',
    toolBarNextButtonString: 'Suivant',
    emptyDataString: 'Aucune donnée affichée',
    loadString: 'Chargement..',
    clearString: 'Effacer',
    todayString: 'aujourd\'hui',
    dayViewString: 'Jour',
    weekViewString: 'Semaine',
    monthViewString: 'mois',
    timelineDayViewString: 'Jour de la chronologie',
    timelineWeekViewString: 'Semaine chronologique',
    timelineMonthViewString: 'Mois de la chronologie',
    loadingErrorMessage: 'Les données sont toujours en cours de chargement et vous ne pouvez pas définir une propriété ou appeler une méthode. Vous pouvez le faire une fois la liaison de données terminée. jqxScheduler déclenche l\'événement \'bindingComplete\' lorsque la liaison est terminée.',
    editRecurringAppointmentDialogTitleString: 'Modifier le rendez-vous récurrent',
    editRecurringAppointmentDialogContentString: 'Souhaitez-vous modifier uniquement cette occurrence ou la série?',
    editRecurringAppointmentDialogOccurrenceString: 'Modifier les occurrences',
    editRecurringAppointmentDialogSeriesString: 'Modifier la série',
    editDialogTitleString: 'Modifier le rendez-vous',
    editDialogCreateTitleString: 'Créer un nouveau rendez-vous',
    contextMenuEditAppointmentString: 'Modifier le rendez-vous',
    contextMenuCreateAppointmentString: 'Créer un nouveau rendez-vous',
    editDialogSubjectString: 'Sujet',
    editDialogLocationString: 'lieu',
    editDialogFromString: 'De',
    editDialogToString: 'À',
    editDialogAllDayString: 'Toute la journée',
    editDialogExceptionsString: 'Exceptions',
    editDialogResetExceptionsString: 'Réinitialiser pour enregistrer',
    editDialogDescriptionString: 'Decription',
    editDialogResourceIdString: 'calendrier',
    editDialogStatusString: 'statut',
    editDialogColorString: 'Couleur',
    editDialogColorPlaceHolderString: 'choisissez une couleur',
    editDialogTimeZoneString: 'Fuseau horaire',
    editDialogSelectTimeZoneString: 'Choisissez le fuseau horaire',
    editDialogSaveString: 'Enregister',
    editDialogDeleteString: 'Supprimer',
    editDialogCancelString: 'Annuler',
    editDialogRepeatString: 'Répéter',
    editDialogRepeatEveryString: 'Répète tout',
    editDialogRepeatEveryWeekString: 'semaine(s)',
    editDialogRepeatEveryYearString: 'année',
    editDialogRepeatEveryDayString: 'Jour(s)',
    editDialogRepeatNeverString: 'Jamais',
    editDialogRepeatDailyString: 'Tous les jours',
    editDialogRepeatWeeklyString: 'Hebdomadaire',
    editDialogRepeatMonthlyString: 'Par mois',
    editDialogRepeatYearlyString: 'Annuel',
    editDialogRepeatEveryMonthString: 'Mois',
    editDialogRepeatEveryMonthDayString: 'Jour',
    editDialogRepeatFirstString: 'premier',
    editDialogRepeatSecondString: 'deuxième',
    editDialogRepeatThirdString: 'la troisième',
    editDialogRepeatFourthString: 'Quatrième',
    editDialogRepeatLastString: 'dernier',
    editDialogRepeatEndString: 'finir',
    editDialogRepeatAfterString: 'À',
    editDialogRepeatOnString: 'Au',
    editDialogRepeatOfString: 'de',
    editDialogRepeatOccurrencesString: 'entrée (s)',
    editDialogRepeatSaveString: 'Enregistrer l\'occurrence',
    editDialogRepeatSaveSeriesString: 'Enregistrer la série',
    editDialogRepeatDeleteString: 'Supprimer l\'occurrence',
    editDialogRepeatDeleteSeriesString: 'Supprimer la série',
    editDialogStatuses:
      {
        free: 'Libérer',
        tentative: 'Expérimentalement',
        busy: 'Employé',
        outOfOffice: 'À l\'extérieur de la maison'
      }
  };
  allemand = {
    // separator of parts of a date (e.g. '/' in 11/05/1955)
    '/': '/',
    // separator of parts of a time (e.g. ':' in 05:44 PM)
    ':': ':',
    // the first day of the week (0 = Sunday, 1 = Monday, etc)
    firstDay: 1,
    days: {
      // full day names
      names: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      // abbreviated day names
      namesAbbr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Vend', 'Sam'],
      // shortest day names
      namesShort: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Sa']
    },
    months: {
      // full month names (13 months for lunar calendards -- 13th month should be '' if not lunar)
      names: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août ', 'Septembre', 'Octobre', 'Novembre', 'Décembre', ''],
      // abbreviated month names
      namesAbbr: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jui', 'Juill', 'Aoù', 'Sep', 'Oct', 'Nov', 'Dec', '']
    },
    // AM and PM designators in one of these forms:
    // The usual view, and the upper and lower case versions
    //      [standard,lowercase,uppercase]
    // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
    //      null
    AM: ['AM', 'am', 'AM'],
    PM: ['PM', 'pm', 'PM'],
    eras: [
      // eras in reverse chronological order.
      // name: the name of the era in this culture (e.g. A.D., C.E.)
      // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
      // offset: offset in years from gregorian calendar
      {name: 'A.D.', start: null, offset: 0}
    ],
    twoDigitYearMax: 2029,
    patterns: {
      // short date pattern
      d: 'M/d/yyyy',
      // long date pattern
      D: 'dddd, MMMM dd, yyyy',
      // short time pattern
      t: 'h:mm tt',
      // long time pattern
      T: 'h:mm:ss tt',
      // long date, short time pattern
      f: 'dddd, MMMM dd, yyyy h:mm tt',
      // long date, long time pattern
      F: 'dddd, MMMM dd, yyyy h:mm:ss tt',
      // month/day pattern
      M: 'MMMM dd',
      // month/year pattern
      Y: 'yyyy MMMM',
      // S is a sortable format that does not lety by culture
      S: 'yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss',
      // formatting of dates in MySQL DataBases
      ISO: 'yyyy-MM-dd hh:mm:ss',
      ISO2: 'yyyy-MM-dd HH:mm:ss',
      d1: 'dd.MM.yyyy',
      d2: 'dd-MM-yyyy',
      d3: 'dd-MMMM-yyyy',
      d4: 'dd-MM-yy',
      d5: 'H:mm',
      d6: 'HH:mm',
      d7: 'HH:mm tt',
      d8: 'dd/MMMM/yyyy',
      d9: 'MMMM-dd',
      d10: 'MM-dd',
      d11: 'MM-dd-yyyy'
    },
    backString: 'Vorhergehende',
    forwardString: 'Nächster',
    toolBarPreviousButtonString: 'Vorhergehende',
    toolBarNextButtonString: 'Nächster',
    emptyDataString: 'Nokeine Daten angezeigt',
    loadString: 'Loading...',
    clearString: 'Löschen',
    todayString: 'Heute',
    dayViewString: 'Tag',
    weekViewString: 'Woche',
    monthViewString: 'Monat',
    timelineDayViewString: 'Zeitleiste Day',
    timelineWeekViewString: 'Zeitleiste Woche',
    timelineMonthViewString: 'Zeitleiste Monat',
    loadingErrorMessage: 'Die Daten werden noch geladen und Sie können eine Eigenschaft nicht festgelegt oder eine Methode aufrufen . Sie können tun, dass, sobald die Datenbindung abgeschlossen ist. jqxScheduler wirft die \' bindingComplete \' Ereignis, wenn die Bindung abgeschlossen ist.',
    editRecurringAppointmentDialogTitleString: 'Bearbeiten Sie wiederkehrenden Termin',
    editRecurringAppointmentDialogContentString: 'Wollen Sie nur dieses eine Vorkommen oder die Serie zu bearbeiten ?',
    editRecurringAppointmentDialogOccurrenceString: 'Vorkommen bearbeiten',
    editRecurringAppointmentDialogSeriesString: 'Bearbeiten Die Serie',
    editDialogTitleString: 'Termin bearbeiten',
    editDialogCreateTitleString: 'Erstellen Sie Neuer Termin',
    contextMenuEditAppointmentString: 'Termin bearbeiten',
    contextMenuCreateAppointmentString: 'Erstellen Sie Neuer Termin',
    editDialogSubjectString: 'Subjekt',
    editDialogLocationString: 'Ort',
    editDialogFromString: 'Von',
    editDialogToString: 'Bis',
    editDialogAllDayString: 'Den ganzen Tag',
    editDialogExceptionsString: 'Ausnahmen',
    editDialogResetExceptionsString: 'Zurücksetzen auf Speichern',
    editDialogDescriptionString: 'Bezeichnung',
    editDialogResourceIdString: 'Kalender',
    editDialogStatusString: 'Status',
    editDialogColorString: 'Farbe',
    editDialogColorPlaceHolderString: 'Farbe wählen',
    editDialogTimeZoneString: 'Zeitzone',
    editDialogSelectTimeZoneString: 'Wählen Sie Zeitzone',
    editDialogSaveString: 'Sparen',
    editDialogDeleteString: 'Löschen',
    editDialogCancelString: 'Abbrechen',
    editDialogRepeatString: 'Wiederholen',
    editDialogRepeatEveryString: 'Wiederholen alle',
    editDialogRepeatEveryWeekString: 'woche(n)',
    editDialogRepeatEveryYearString: 'Jahr (en)',
    editDialogRepeatEveryDayString: 'Tag (e)',
    editDialogRepeatNeverString: 'Nie',
    editDialogRepeatDailyString: 'Täglich',
    editDialogRepeatWeeklyString: 'Wöchentlich',
    editDialogRepeatMonthlyString: 'Monatlich',
    editDialogRepeatYearlyString: 'Jährlich',
    editDialogRepeatEveryMonthString: 'Monate (n)',
    editDialogRepeatEveryMonthDayString: 'Day',
    editDialogRepeatFirstString: 'erste',
    editDialogRepeatSecondString: 'zweite',
    editDialogRepeatThirdString: 'dritte',
    editDialogRepeatFourthString: 'vierte',
    editDialogRepeatLastString: 'letzte',
    editDialogRepeatEndString: 'Ende',
    editDialogRepeatAfterString: 'Nach',
    editDialogRepeatOnString: 'Am',
    editDialogRepeatOfString: 'von',
    editDialogRepeatOccurrencesString: 'Eintritt (e)',
    editDialogRepeatSaveString: 'Vorkommen Speichern',
    editDialogRepeatSaveSeriesString: 'Save Series',
    editDialogRepeatDeleteString: 'Vorkommen löschen',
    editDialogRepeatDeleteSeriesString: 'Series löschen',
    editDialogStatuses:
      {
        free: 'Frei',
        tentative: 'Versuchsweise',
        busy: 'Beschäftigt',
        outOfOffice: 'Ausserhaus'
      }
  };

  ngAfterViewInit(): void {
    this.scheduler.ensureAppointmentVisible('id1');
  }

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  generateAppointments(): any {
    const appointments = new Array();
    const appointment1 = {
      id: 'id1',
      location: '',
      subject: 'Ouvert',
      calendar: 'Cours collectifs',
      start: new Date(2020, 10, 23, 9, 0, 0),
      end: new Date(2020, 10, 23, 16, 0, 0)
    };
    const appointment2 = {
      id: 'id2',
      description: '',
      location: '',
      subject: 'Ouvert',
      calendar: 'Musculation/Tonification',
      start: new Date(2020, 10, 24, 10, 0, 0),
      end: new Date(2020, 10, 24, 15, 0, 0)
    };
    const appointment3 = {
      id: 'id3',
      description: '',
      location: '',
      subject: 'Ouvert',
      calendar: '',
      start: new Date(2020, 10, 27, 11, 0, 0),
      end: new Date(2020, 10, 27, 13, 0, 0)
    };
    const appointment4 = {
      id: 'id4',
      description: '',
      location: '',
      subject: 'Ouvert',
      calendar: '',
      start: new Date(2020, 10, 23, 16, 0, 0),
      end: new Date(2020, 10, 23, 18, 0, 0)
    };
    const appointment5 = {
      id: 'id5',
      description: '',
      location: '',
      subject: 'Ouvert',
      calendar: 'Cours collectifs',
      start: new Date(2020, 10, 25, 15, 0, 0),
      end: new Date(2020, 10, 25, 17, 0, 0)
    };
    const appointment6 = {
      id: 'id6',
      description: '',
      location: '',
      subject: 'Ouvert',
      calendar: '',
      start: new Date(2020, 10, 26, 14, 0, 0),
      end: new Date(2020, 10, 26, 16, 0, 0)
    };
    appointments.push(appointment1);
    appointments.push(appointment2);
    appointments.push(appointment3);
    appointments.push(appointment4);
    appointments.push(appointment5);
    appointments.push(appointment6);
    return appointments;
  }


  change(e) {
    if (e == 'français') {
      this.scheduler.localization(this.francais);
      console.log('valeeeeur' + e);
    }
  }
}
