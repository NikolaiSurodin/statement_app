export default {
    promptLabels: {
        actionRemove: 'Вы уверены, что хотите удалить эту заявку?',
        actionExclude: 'Вы действительно хотите удалить эту заявку?',
        actionCancel: 'Вы уверены, что хотите отменить эту заявку?',
        actionUncancel: 'Вы уверены, что хотите отменить это мероприятие?',
        actionSetStart: 'Вы уверены, что хотите установить это вхождение первым?',
        actionSetEnd: 'Вы уверены, что хотите установить это событие как последнее?',
        actionMove: 'Вы уверены, что хотите переместить это мероприятие?',
        actionInclude: 'Вы уверены, что хотите добавить событие?',
        move: 'Вы уверены, что хотите переместить это мероприятие?',
        toggleAllDay: 'Вы уверены, что хотите изменить, будет ли это событие происходить весь день?',
        removeExistingTime: 'Вы уверены, что хотите удалить все события, произошедшие сейчас?'
    },
    placeholder: {
        noTitle: 'Нет заголовка'
    },
    patterns: {
        lastDay: (day) => 'Последний день месяца',
        lastDayOfMonth: (day) => 'Последний день ' + day.format('MMMM'),
        lastWeekday: (day) => 'Последний ' + day.format('dddd') + ' в ' + day.format('MMMM')
    },
    colors: [
        {text: 'Red'},
        {text: 'Pink'},
        {text: 'Purple'},
        {text: 'Deep Purple'},
        {text: 'Indigo'},
        {text: 'Blue'},
        {text: 'Glue'},
        {text: 'Light Blue'},
        {text: 'Cyan'},
        {text: 'Teal'},
        {text: 'Green'},
        {text: 'Light Green'},
        {text: 'Lime'},
        {text: 'Yellow'},
        {text: 'Amber'},
        {text: 'Orange'},
        {text: 'Deep Orange'},
        {text: 'Brown'},
        {text: 'Blue Gray'},
        {text: 'Gray'},
        {text: 'Black'}
    ],
    icons: [
        {text: 'Alarm'},
        {text: 'Star'},
        {text: 'Love'},
        {text: 'Action'},
        {text: 'Assignment'},
        {text: 'Warning'},
        {text: 'Money'},
        {text: 'Charge'},
        {text: 'Home'},
        {text: 'Play'},
        {text: 'Email'},
        {text: 'Phone'},
        {text: 'Chart'},
        {text: 'Biking'},
        {text: 'Travel'}
    ],
    defaults: {
        dsDay: {
            formats: {
                month: 'MMM'
            }
        },
        dsCalendarApp: {
            types: [
                {label: 'День'},
                {label: 'Неделя'},
                {label: 'Месяц'},
                {label: 'Год'},
                {label: 'График'},
                {label: '4 дня'}
            ],
            formats: {
                today: 'dddd, MMMM D',
                xs: 'MMM'
            },
            labels: {
                next: (type) => type ? 'Следующий ' + type.label.toLowerCase() : 'Следующий',
                prev: (type) => type ? 'Предыдущий ' + type.label.toLowerCase() : 'Предыдущий',
                moveCancel: 'Cancel move',
                moveSingleEvent: 'Move event',
                moveOccurrence: 'Move just this event occurrence',
                moveAll: 'Move all event occurrences',
                moveDuplicate: 'Add event occurrence',
                promptConfirm: 'Да',
                promptCancel: 'Нет',
                today: 'Сегодня'
            }
        },
        dsAgendaEvent: {
            formats: {
                firstLine: 'ddd',
                secondLine: 'MMM Do',
                start: 'dddd, MMMM D',
                time: 'h:mm a'
            },
            labels: {
                allDay: 'All day',
                options: 'Options',
                close: 'Close',
                day: ['day', 'days'],
                days: ['day', 'days'],
                minute: ['minute', 'minutes'],
                minutes: ['minute', 'minutes'],
                hour: ['hour', 'hours'],
                hours: ['hour', 'hours'],
                week: ['week', 'weeks'],
                weeks: ['week', 'weeks'],
                busy: 'Занят',
                free: 'Свободен'
            }
        },
        dsCalendarEventChip: {
            formats: {
                fullDay: 'ddd MMM Do YYYY',
                timed: 'ddd MMM Do YYYY'
            }
        },
        dsCalendarEventPopover: {
            formats: {
                start: 'dddd, MMMM D',
                time: 'h:mm a'
            },
            labels: {
                allDay: 'All day',
                options: 'Options',
                close: 'Close',
                day: ['day', 'days'],
                days: ['day', 'days'],
                minute: ['minute', 'minutes'],
                minutes: ['minute', 'minutes'],
                hour: ['hour', 'hours'],
                hours: ['hour', 'hours'],
                week: ['week', 'weeks'],
                weeks: ['week', 'weeks'],
                busy: 'Занят',
                free: 'Free'
            }
        },
        dsCalendarEventCreatePopover: {
            formats: {
                start: 'dddd, MMMM D',
                time: 'h:mm a'
            },
            labels: {
                title: 'Добавить заголовок',
                allDay: 'Весь день',
                close: 'Закрыть',
                save: 'Сохранить',
                day: ['День', 'Дни'],
                days: ['День', 'Дни'],
                minute: ['Минута', 'Минуты'],
                minutes: ['Минута', 'Минуты'],
                hour: ['Час', 'hours'],
                hours: ['Час', 'hours'],
                week: ['Неделя', 'weeks'],
                weeks: ['Неделя', 'weeks'],
                busy: 'Занят',
                free: 'Свободен',
                location: 'Add location',
                description: 'Описание',
                calendar: 'Calendar',
            },
            busyOptions: [
                {text: 'Занят'},
                {text: 'Свободен'}
            ]
        },
        dsSchedule: {
            labels: {
                editCustom: 'Редактировать'
            }
        },
        dsEvent: {
            labels: {
                cancel: 'Отменить изменения',
                save: 'Сохранить',
                title: 'Заголовок',
                exclusions: 'These are events or spans of time where a normally occurring event was excluded from the schedule. Events are excluded here if an event occurrence is moved.',
                inclusions: 'These are events or spans of time where events were added outside the normally occurring schedule. Events are added here if an event occurrence is moved.',
                cancelled: 'These are events or spans of time where events were cancelled.',
                edit: 'Редактировать событие',
                add: 'Добавить событие',
                location: 'Add location',
                description: 'Добавить описание',
                calendar: 'Calendar',
                tabs: {
                    details: 'Детали события',
                    forecast: 'Прогноз',
                    removed: 'Удаленный',
                    added: 'Добавленный',
                    cancelled: 'Отмененный'
                }
            },
            busyOptions: [
                {text: 'Занят'},
                {text: 'Свободен'}
            ]
        },
        dsScheduleActions: {
            labels: {
                remove: 'Удалить это событие по всем датам',
                exclude: 'Удалить событие',
                cancel: 'Завершить событие',
                uncancel: 'Восстановить событие',
                move: 'Поменять дату события',
                include: 'Дублировать событие',
                setStart: 'Установить это событие первым',//occurrence
                setEnd: 'Установить это событие последним',
                pickerOk: 'OK',
                pickerCancel: 'Отмена'
            }
        },
        dsScheduleForecast: {
            labels: {
                prefix: 'The forecast shows previous & next',
                suffix: 'event occurrences within a years time.'
            }
        },
        dsScheduleFrequencyDay: {
            labels: {
                type: 'Days'
            },
            options: [
                {text: 'Любой день'},
                {text: 'В слудующие дни...'},
                {text: 'Каждый _ дней, начиная с _'}
            ],
            types: [
                {text: 'День месяца'},
                {text: 'Последниый день месяца'},
                {text: 'День года'}
            ]
        },
        dsScheduleFrequencyDayOfWeek: {
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четрвег', 'Пятница', 'Суббота'],
            labels: {
                type: 'Days of week'
            },
            options: [
                {text: 'В любой день недели'},
                {text: 'В следующие дни недели...'},
                {text: 'Каждый _ будний день, начиная с _'},
                {text: 'Выходные'},
                {text: 'Будние дни'}
            ]
        },
        dsScheduleFrequencyMonth: {
            labels: {
                type: 'Месяц'
            },
            months: [
                'Январь',
                'Февраль',
                'Март',
                'Апрель',
                'Мая',
                'Июнь',
                'Июль',
                'Август',
                'Сентябрь',
                'Октябрь',
                'Ноябрь',
                'Декабрь'
            ],
            options: [
                {text: 'В любой месяц'},
                {text: 'В следующие месяцы...'},
                {text: 'Каждые _ месяцев, начиная с _'}
            ]
        },

        dsScheduleFrequencyWeek: {
            labels: {
                type: 'Weeks'
            },
            options: [
                {text: 'Любая неделя'},
                {text: 'В следующие недели...'},
                {text: 'Каждую _ неделю, начиная с_'}
            ],
            types: [
                {text: 'Неделя месяца (у первой недели четверг)'},
                {text: 'Продолжительность недели месяца (начинается в первого дня месяца)'},
                {text: 'Полная неделя месяца (0-я = предыдущая неделя, если таковая была)'},
                {text: 'Последняя неделя месяца (начинается в последнего дня месяца)'},
                {text: 'Последняя полная неделя месяца (0-я = следующая неделя, если таковая имеется)'},
                {text: 'Неделя года (у первой недели четверг)'},
                {text: 'Неделя года (начинается в первый день года)'},
                {text: 'Полная неделя года (0-я = предыдущая неделя, если таковая была)'},
                {text: 'Последняя неделя года (начинается в последнего дня года)'},
                {text: 'Последняя полная неделя года (0-я = следующая неделя, если таковая имеется)'}
            ]
        },

        dsScheduleFrequencyYear: {
            labels: {
                type: 'Years'
            },
            options: [
                {text: 'В любой год'},
                {text: 'В следующие годы...'},
                {text: 'Каждый _ год, начиная с _'}
            ]
        },

        dsScheduleSpan: {
            labels: {
                startless: 'Начальное время',
                endless: 'Заверешние'
            },
            formats: {
                start: 'MMMM Do, YYYY',
                end: 'MMMM Do, YYYY'
            }
        },

        dsScheduleTime: {
            labels: {
                remove: 'Удалить время',
                add: 'Добавить время'
            }
        },

        dsScheduleTimes: {
            labels: {
                all: 'Весь день',
                minute: 'Минута',
                minutes: 'Минуты',
                hour: 'Час',
                hours: 'Часы',
                day: 'День',
                days: 'Дни',
                week: 'Неделя',
                weeks: 'Недели',
                month: 'Месяц',
                months: 'Месяцы',
            }
        },

        dsScheduleType: {
            formats: {
                date: 'LL'
            }
        },

        dsScheduleTypeCustomDialog: {
            labels: {
                save: 'Сохранить',
                cancel: 'Отмена'
            }
        },

        dsWeekDayHeader: {
            formats: {
                weekday: 'ddd'
            }
        },

        dsWeeksView: {
            weekdays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        },

        dsDaysView: {
            hours: [
                '    ', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
                '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
            ]
        },

        dsDayPicker: {
            weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            labels: {
                prevMonth: 'Предыдущий месяц',
                nextMonth: 'Следующий месяц'
            }
        }
    }
}