var $progressValue = 0;
var resultList = [];



let nms = ["Академическая мотивация", "Самоорганизация", "Саморегуляция эмоций", "Навыки общения", "Навыки речи", "Цифровая компетентность"];
const quizdata = [
  {
    question: "Большинство учебных предметов вызывает у меня искренний интерес ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Изучение  учебных предметов в вузе является частью моего саморазвития",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Все, что связано с моим обучением, имеет для меня личную значимость",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Учеба в университете обычно приносит мне положительные эмоции",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Часто я не могу взяться за учебные дела из-за лени",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 1
  },
  {
    question: "Я могу понять, с чем связано изменение моего интереса к изучению какого-либо предмета ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Я знаю, как найти новые, интересные темы в скучном на первый взгляд предмете ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "В начале изучения нового учебного предмета я обычно задумываюсь, что он даст для моего развития как личности и профессионала",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Перед началом нового учебного семестра я обычно ставлю себе цели в обучении и стараюсь продумать план их достижения",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Обычно я задумываюсь, почему в изучении одного предмета я нахожу смысл, а в изучении другого нет",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Если какое-то задание оказалось слишком легким и от этого скучным, я стараюсь перейти к выполнению более сложного, чтобы не терять интерес ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Иногда мне удается найти смысл в задании, которое сначала казалось мне бессмысленным - самостоятельно или с помощью других людей ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Если я не могу приступить к выполнению какого-либо задания, то задумываюсь о причинах своего нежелания сделать это ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Обсуждения с однокурсниками и преподавателями помогают мне лучше понять, зачем нужно изучать тот или иной предмет ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Если лень мешает мне заниматься учебой, то чаще всего я могу понять ее причину ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 1
  },
  {
    question: "Обычно я успеваю своевременно и в полном объеме выполнять все, что мне нужно по учебе",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Я стараюсь не оставлять выполнение учебных заданий на последний момент ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Я понимаю, что есть более важные задания и стараюсь выполнять их в первую очередь",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Обычно еще до выполнения задания я могу оценить примерное время и другие ресурсы, которые потребуются для этого",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Занимаясь самостоятельно учебными делами, я постоянно отвлекаюсь на что-то другое",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 2
  },
  {
    question: "Я понимаю, какие у меня могут быть сложности при выполнении того или иного учебного задания ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "При возникновении сложностей обычно я могу сказать, что именно делаю не совсем удачно для организации своего обучения ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Получив не очень высокие баллы за какое-либо задание, я пытаюсь понять, что делаю не так",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Мне нравиться пробовать хотя бы иногда различные способы хранения информации, необходимой для организации своего обучения (новые формы блокнотов, приложения на смартфоне и т.п.), чтобы находить еще более удобные и эффективные для меня ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Если у меня появляются новые более сложные для меня учебные задачи, я могу изменить организацию своей учебной работы, чтобы успешно с ними справляться ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Планируя выполнение учебных заданий, я стараюсь учитывать и наилучшим образом использовать условия, которые влияют на мою работоспособность (время суток, организация рабочего места и т.п.) ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Если в моей жизни происходят какие-то изменения, не связанные напрямую с вузом, я обращаю внимание на то, как это влияет на мое обучение ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Время от времени я с интересом читаю статьи или книги, смотрю ролики или онлайн-курсы, посвященные теме самоорганизации и тайм-менеджмента, а также стараюсь попробовать наиболее интересные мне рекомендации из них ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Я знаю, какой способ планирования учебной работы наиболее эффективен для меня (например: ведение списков задач, распределение по датам выполнения и др.) ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Мне бывает интересно узнавать о “лайфхаках”, приемах успешной организации своего обучения, которыми пользуются мои однокурсники и другие знакомые мне студенты (а также родные и знакомые, которые учились в вузе раньше) ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 2
  },
  {
    question: "Волнение часто мешает мне успешно выступить на учебном занятии ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 3
  },
  {
    question: "Я часто сомневаюсь в правильности выполнения заданий для самостоятельной работы и это мешает мне сосредоточиться на работе с ними ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 3
  },
  {
    question: "Критические замечания и дополнительные вопросы преподавателя во время занятия сильно “выбивают меня из колеи” и я могу почувствовать растерянность ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 3
  },
  {
    question: "Мой ответ на экзамене часто бывает неполным, путаным и недостаточно логичным из-за волнения, даже если я хорошо знаю содержание экзаменационного билета",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 3
  },
  {
    question: "К ситуации оценивая (выступление на занятии, экзамен) я обычно отношусь как к хорошей возможности проявить себя с лучшей стороны и продемонстрировать свои знания ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Я замечаю, какие учебные ситуации вызывают у меня волнение, а в каких я остаюсь спокойным (спокойной) ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Если взрослый человек очень эмоционален и сильно переживает по разным поводам (в том числе, учебным), то с этим ничего уже нельзя сделать ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 3
  },
  {
    question: "Если я начинаю переживать по поводу какой-то учебной ситуации больше обычного, то могу понять, есть ли для этого действительно существенная причина ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Если в учебной ситуации я начинаю сильно волноваться, то стараюсь использовать какой-то из известных мне приемов, чтобы успокоиться ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Если мне встречаются публикации или видеоролики о способах управления своим эмоциональным состоянием, то я стараюсь как бы “примерить” их на себя и свое обучение ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Я понимаю, как отношение родителей к моему обучению повлияло на те эмоции, которые у меня возникают по поводу моей учебы в вузе сейчас ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Я понимаю, как отношение ко мне школьных учителей повлияло на мои эмоции по поводу любого обучения, в том числе сейчас в вузе ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Я могу организовать свою учебную деятельность так, чтобы получать от нее положительные эмоции ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Я знаю, какие мои действия помогают чувствовать себя спокойно и уверенно во время экзаменов и при подготовке к ним ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Я думаю, что если тревога, опасения и других негативные эмоции мешают в каких то ситуациях, в том числе учебных, то чтобы справиться с этим стоит обратиться за помощью к психологу ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 3
  },
  {
    question: "Иногда мне бывает сложно обсудить какие-то учебные проблемы с однокурсниками ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 4
  },
  {
    question: "В моей учебной группе есть хорошо работающие способы коммуникации (например, общегрупповой чат, группа в социальной сети и т.п.), которые позволяют мне не пропустить ничего важного ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Участие в выполнении самостоятельного группового задания, которое нужно сделать вместе с кем-то из однокурсников, обычно вызывает у меня много трудностей ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 4
  },
  {
    question: "Даже если преподаватель мне чем-то не нравится, я почти всегда могу конструктивно взаимодействовать с ними по поводу изучаемого предмета ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "В общении с преподавателями я нахожу для себя много ценных примеров профессионализма ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Я задумываюсь о том, какое мнение обо мне складывается у моих однокурсников ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Умение успешно общаться с другими людьми, будь то ситуация обучения или любая другая - это способность, которой невозможно научиться ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 4
  },
  {
    question: "Благодаря обучению в вузе я стал(а) лучше понимать других людей и более эффективно выстраивать свое взаимодействие с ними ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Когда мои однокурсники предлагают какие-то новые правила, способы общения по поводу наших общих учебных задач (например, использовать другое приложение для обмена информацией, как-то иначе организоваться для совместной работы и т.п.) мне бывает сложно изменить свои привычки ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 4
  },
  {
    question: "Общаясь с однокурсниками в реальном взаимодействии и с помощью мессенджеров, социальных сетей и других цифровых технологий, я замечаю, какие способы коммуникации более эффективны для меня ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "При возникновении разногласий или конфликтов с кем-то из однокурсников или преподавателей я могу понять, в чем именно расходятся мои интересы и интересы другой стороны ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Когда с нами начинает работать незнакомый ранее преподаватель, я стараюсь понять, что он за человек, и с каким лучше взаимодействовать ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Наблюдение за другими людьми во время общения с ними помогает мне развивать свои умения и навыки в этой сфере ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Я замечаю, чем именно неписаные нормы и правила общения в том месте, где я учусь сейчас, отличаются от других мест моего обучения (школы, колледжа, другого вуза и т.п.) ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "При возникновении конфликтов или сложностей в общении с кем-то из преподавателей или однокурсников я смогу найти, к кому обратиться за помощью в налаживании отношений ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 4
  },
  {
    question: "Я умею выражать свои мысли достаточно точно и содержательно ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Я испытываю затруднения при написании текстов в научном стиле ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 5
  },
  {
    question: "Часто я просто вставляю в свои письменные работы фрагменты из найденных где-либо текстов, так как у меня все равно не получится написать об этом также хорошо",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 5
  },
  {
    question: "Для меня не составляет труда удерживать в уме логику дискуссии ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Часто моего словарного запаса оказывается недостаточно, чтобы выразить сложную мысль ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Я задумываюсь о том, насколько точно мне удается выражать свои мысли в речи",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Ответы на семинарах и активное участие в дискуссиях на занятиях - это хорошая практика, которая помогает мне развивать навыки устной речи ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Я понимаю, каких именно умений мне не хватает для написания объемных текстов - например, курсовой работы, отчета по практике и т.п. ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Во время написания текста я задумываюсь о цели этой работы и предполагаемом воздействии на читателя ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Бесполезно предпринимать какие-то усилия, чтобы научиться лучше писать или говорить: просто кому-то это “дано от природы”, а кому-то нет ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 5
  },
  {
    question: "Читая профессиональные, в том числе научные, тексты, я обращаю внимание на типичные фразы, стиль изложения и другие особенности, чтобы использовать это при написании своих текстов ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Во время устного выступления я обращаю внимание на реакцию слушателей и стараюсь при этом понять, что мне удалось выразить лучше, а что - хуже",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "После написания текста я прошу кого-нибудь (знакомого, родственника и т.п.) прочитать его, чтобы обратить мое внимание на ошибки и сложные для понимания фрагменты ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Когда я слушаю лекции и публичные выступления, то стараюсь не только понять содержание, но и обратить внимание на более и менее эффективные приемы устной речи ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "Я замечаю, что во время обучения мой словарный запас пополняется профессиональными терминами ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 5
  },
  {
    question: "При изучении объемной темы я прибегаю к разным способам ее наглядного представления - в виде схем, таблиц и т.д. ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Я храню информацию в сгруппированном по темам виде, чтобы упростить последующий доступ к ней ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Для меня не составляет труда совместно работать с однокурсниками над решением учебной задачи в интернет-пространстве (например, с помощью Google-сервисов, мессенджеров и т.п.) ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "В процессе поиска информации в интернете я обычно не обращаю внимание на особенности сайтов, на которых она размещена ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 6
  },
  {
    question: "При использовании какой-либо информации в своих письменных работах обычно я просто копирую и вставляю фрагмент текста, не указывая ссылку на источник, из которого взят этот фрагмент ",
    options: ["Верно", "Неверно"],
    answer: "Неверно",
    category: 6
  },
  {
    question: "Я знаю, с помощью каких приемов (составление схем, конспектов, ментальных карт и т.д.) мне легче понять и запомнить информацию при изучении новой темы ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Я задумываюсь о необходимости соблюдения норм цитирования при использовании идей других авторов",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "При столкновении со сложным для меня текстом я стараюсь найти и попробовать новый способ его понимания ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Когда это необходимо, я нахожу способ быстро и точно зафиксировать необходимую информацию ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Получив новое задание, я продумываю, где буду искать необходимую для его выполнения информацию",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Если у меня возникают трудности в работе с информацией, я могу обратиться за помощью, чтобы научиться делать что-то иначе ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Когда у меня появляются новые учебные задачи, я стараюсь найти и освоить эффективные для их решения способы поиска, представления и хранения информации ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Я обращаю внимание на то, насколько мои привычки в отношении хранения информации удачны для решения текущих учебных задач ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Когда я замечаю, что мне становится трудно найти сделанный мной или сохраненный из сети документ, то стараюсь внести изменения в привычную мне систему хранения информации",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  },
  {
    question: "Я задумываюсь о том, что мне мешает, а что помогает в понимании сложных для меня текстов ",
    options: ["Верно", "Неверно"],
    answer: "Верно",
    category: 6
  }
];
/** Random shuffle questions **/
function shuffleArray(question) {
  var shuffled = question.sort(function () {
    return .5 - Math.random();
  });
  return shuffled;
}

function shuffle(a) {
  for (var i = a.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    var _ref = [a[j], a[i - 1]];
    a[i - 1] = _ref[0];
    a[j] = _ref[1];
  }
}

/*** Return shuffled question ***/
function generateQuestions() {
  var questions = shuffleArray(quizdata);
  return questions;
}

/*** Return list of options ***/
function returnOptionList(opts, i) {

  var optionHtml = '<li class="myoptions">' +
    '<input value="' + opts + '" name="optRdBtn" type="radio" id="rd_' + i + '">' +
    '<label for="rd_' + i + '">' + opts + '</label>' +
    '<div class="bullet">' +
    '<div class="line zero"></div>' +
    '<div class="line one"></div>' +
    '<div class="line two"></div>' +
    '<div class="line three"></div>' +
    '<div class="line four"></div>' +
    '<div class="line five"></div>' +
    '<div class="line six"></div>' +
    '<div class="line seven"></div>' +
    '</div>' +
    '</li>';

  return optionHtml;
}

/** Render Options **/
function renderOptions(optionList) {
  var ulContainer = $('<ul>').attr('id', 'optionList');
  for (var i = 0, len = optionList.length; i < len; i++) {
    var optionContainer = returnOptionList(optionList[i], i)
    ulContainer.append(optionContainer);
  }
  $(".answerOptions").html('').append(ulContainer);
}

/** Render question **/
function renderQuestion(question) {
  $(".question").html("<h1>" + question + "</h1>");
}

/** Render quiz :: Question and option **/
function renderQuiz(questions, index) {
  var currentQuest = questions[index];
  renderQuestion(currentQuest.question);
  renderOptions(currentQuest.options);
  console.log("Question");
  console.log(questions[index]);
}

/** Return correct answer of a question ***/
function getCorrectAnswer(questions, index) {
  return questions[index].answer;
}

/** pushanswers in array **/
function correctAnswerArray(resultByCat) {
  var arrayForChart = [];
  for (var i = 0; i < resultByCat.length; i++) {
    arrayForChart.push(resultByCat[i].correctanswer);
  }

  return arrayForChart;
}
/** Generate array for percentage calculation **/
function genResultArray(results) {
  var resultByCat = resultByCategory(results);
  var arrayForChart = correctAnswerArray(resultByCat);

  return arrayForChart
}

/** percentage Calculation **/
function percentCalculation(array, total) {
  var percent = array.map(function (d, i) {
    return (100 * d / total).toFixed(2);
  });
  return percent;
}

/*** Get percentage for chart **/


/** count right and wrong answer number **/
function countAnswers(results) {

  var countCorrect = 0, countWrong = 0;

  for (var i = 0; i < results.length; i++) {
    if (results[i].iscorrect == true)
      countCorrect++;
    else countWrong++;
  }

  return [countCorrect, countWrong];
}

/**** Categorize result *****/
function resultByCategory(results) {

  const categoryCount = [];
  var ctArray = results.reduce(function (res, value) {
    if (!res[value.category]) {
      res[value.category] = {
        category: value.category,
        correctanswer: 0
      };
      categoryCount.push(res[value.category])
    }
    var val = (value.iscorrect == true) ? 1 : 0;
    res[value.category].correctanswer += val;
    return res;
  }, {});

  categoryCount.sort(function (a, b) {
    return a.category - b.category;
  });

  return categoryCount;
}


/** Total score pie chart**/
function totalPieChart(_upto, _cir_progress_id, _correct) {


  $("#" + _cir_progress_id).find("._text_cor").html("Correct : " + _correct);

  var unchnagedPer = _upto;

  _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

  var _progress = 0;

  var _cir_progress = $("#" + _cir_progress_id).find("._cir_P_y");
  var _text_percentage = $("#" + _cir_progress_id).find("._cir_Per");

  var _input_percentage;
  var _percentage;

  var _sleep = setInterval(_animateCircle, 25);

  function _animateCircle() {
    //2*pi*r == 753.6 +xxx=764
    _input_percentage = (_upto / 100) * 764;
    _percentage = (_progress / 100) * 764;

    _text_percentage.html(_progress + '%');

    if (_percentage >= _input_percentage) {
      _text_percentage.html('<tspan x="50%" dy="0em">' + unchnagedPer + '% </tspan><tspan  x="50%" dy="1.9em">Your Score</tspan>');
      clearInterval(_sleep);
    } else {

      _progress++;

      _cir_progress.attr("stroke-dasharray", _percentage + ',764');
    }
  }
}

function renderBriefChart(correct, total) {
  var percent = (100 * correct / total);
  if (Math.round(percent) !== percent) {
    percent = percent.toFixed(2);
  }

  totalPieChart(percent, '_cir_progress', correct)

}
/*** render chart for result **/
function renderChart(data) {
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["Мотивация",
        "Самоорганизация",
        "Саморегуляция эмоций",
        "Цифровая компетентность",
        "Навыки устной и письменной речи",
        "Навыки общения"
      ],
      datasets: [
        {
          label: 'Ваши результаты',
          data: data,

          backgroundColor: 'rgb(77, 131, 233, 0.7)',
          borderColor: 'rgb(18, 95, 239)',
          pointBackgroundColor:'rgb(58, 126, 251)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor:'rgb(58, 126, 251)',
          borderWidth: 1
        }, {
          label: 'Средние по группе',
          data: [10, 11, 7, 13, 13, 14],
          fill: true,
          backgroundColor: 'rgba(235, 54, 54, 0.43)',
          borderColor: 'rgb(245, 37, 26)',
          pointBackgroundColor: 'rgb(245, 37, 26)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          borderWidth: 1,
          pointHoverBorderColor: 'rgb(245, 37, 26)'
        }

      ]
    },
    options: {
      pieceLabel: {
        render: 'percentage',
        fontColor: 'black',
        precision: 2
      },
      scales: {
        r: {

          suggestedMax: 15,
          suggestedMin: 0
        }
      }
    }

  });
}

/** List question and your answer and correct answer  

*****/
function getAllAnswer(results) {
  var innerhtml = "";
  for (var i = 0; i < results.length; i++) {

    var _class = ((results[i].iscorrect) ? "item-correct" : "item-incorrect");
    var _classH = ((results[i].iscorrect) ? "h-correct" : "h-incorrect");


    var _html = '<div class="_resultboard ' + _class + '">' +
      '<div class="_header">' + resultByCat[i].correctanswer + '</div>' +
      '<div class="_yourans ' + _classH + '">' + results[i].clicked + '</div>';

    var html = "";
    if (!results[i].iscorrect)
      html = '<div class="_correct">' + results[i].answer + '</div>';
    _html = (_html + html) + '</div>';
    innerhtml += _html;
  }

  $(".allAnswerBox").html('').append(innerhtml);
}
/** render  Brief Result **/
function renderResult(resultList) {

  var results = resultList;
  console.log(results);
  var countCorrect = countAnswers(results)[0];



  renderBriefChart(countCorrect, resultList.length);
}

function renderChartResult() {
  var results = resultList;
  var countCorrect = countAnswers(results)[0];

  var dataForChart = genResultArray(resultList);
  renderChart(dataForChart);
  console.log(dataForChart);
}

/** Insert progress bar in html **/
function getProgressindicator(length) {
  var progressbarhtml = " ";
  for (var i = 0; i < length; i++) {
    progressbarhtml += '<div class="my-progress-indicator progress_' + (i + 1) + ' ' + ((i == 0) ? "active" : "") + '"></div>';
  }
  $(progressbarhtml).insertAfter(".my-progress-bar");
}

/*** change progress bar when next button is clicked ***/
function changeProgressValue() {
  $progressValue += 1.1112;
  if ($progressValue >= 100) {

  } else {
    if ($progressValue == 99) $progressValue = 100;
    $('.my-progress')
      .find('.my-progress-indicator.active')
      .next('.my-progress-indicator')
      .addClass('active');
    $('progress').val($progressValue);
  }
  $('.js-my-progress-completion').html($('progress').val() + '% complete');

}
function addClickedAnswerToResult(questions, presentIndex, clicked) {
  var correct = getCorrectAnswer(questions, presentIndex);
  var result = {
    index: presentIndex,
    question: questions[presentIndex].question,
    clicked: clicked,
    iscorrect: (clicked == correct) ? true : false,
    answer: correct,
    category: questions[presentIndex].category
  }
  resultList.push(result);

  console.log("result");
  console.log(result);

}

$(document).ready(function () {

  var presentIndex = 0;
  var clicked = 0;

  var questions = generateQuestions();
  renderQuiz(questions, presentIndex);
  getProgressindicator(questions.length);

  $(".answerOptions ").on('click', '.myoptions>input', function (e) {
    clicked = $(this).val();

    if (questions.length == (presentIndex + 1)) {
      $("#submit").removeClass('hidden');
      $("#next").addClass("hidden");
    }
    else {

      $("#next").removeClass("hidden");
    }



  });



  $("#next").on('click', function (e) {
    e.preventDefault();
    addClickedAnswerToResult(questions, presentIndex, clicked);

    $(this).addClass("hidden");

    presentIndex++;
    renderQuiz(questions, presentIndex);
    changeProgressValue();
  });

  $("#submit").on('click', function (e) {
    addClickedAnswerToResult(questions, presentIndex, clicked);
    $('.multipleChoiceQues').hide();
    $('.needtohide').hide();
    $('.girlimage').hide();
    $(".resultArea").show();
    $(".viewchart").show();
    renderChartResult();
    resultByCategory(resultList);


  });




  $(".resultArea").on('click', '.viewchart', function () {
    $(".resultPage2").show();
    $(".resultPage1").hide();
    $(".resultPage3").hide();
    renderChartResult();
  });

  $(".resultArea").on('click', '.backBtn', function () {
    $(".resultPage1").show();
    $(".resultPage2").hide();
    $(".resultPage3").hide();
    renderResult(resultList);
  });

  $(".resultArea").on('click', '.viewanswer', function () {
    $(".resultPage3").show();
    $(".main").show();
    $(".resultPage2").hide();
    $(".resultPage1").hide();
    // getAllAnswer(resultList);
    let arr = resultByCategory(resultList)

    for (let i = 0; i < arr.length; i++) {
      let element = arr[i],
        cat = element.category,
        answ = element.correctanswer

      let table = $('#newtable')
      table.append(`<tr><td>${nms[cat - 1]}</td><td>${answ}</td></tr>`)

    }

    document.getElementById('newtable')
    console.log(arr)
  });

  $(".resultArea").on('click', '.replay', function () {
    window.location.reload(true);
  });

});