const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");
const finTable = document.getElementById("table").rows[1].cells[1];
const instruct = document.getElementById("mainText");

if (this.current > 1)
	instruct.style.visibility = "hide";
else (this.current <= 1)
instruct.style.visibility = "visible";

//Класс, который представляет сам тест
class Quiz {
	constructor(type, questions, results) {
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;

	}

	Click(index) {
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if (value >= 1) {
			correct = index;
		}
		else {
			//Иначе ищем, какой ответ может быть правильным
			for (let i = 0; i < this.questions[this.current].answers.length; i++) {
				if (this.questions[this.current].answers[i].value >= 1) {
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next() {
		this.current++;

		if (this.current >= this.questions.length) {
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End() {
		for (let i = 0; i < this.results.length; i++) {
			if (this.results[i].Check(this.score)) {
				this.result = i;
			}
		}
	}
}

//Класс, представляющий вопрос
class Question {
	constructor(text, answers) {
		this.text = text;
		this.answers = answers;
	}

	Click(index) {
		return this.answers[index].value;
	}
}
class QuestionSO {
	constructor(text, answers) {
		this.text = text;
		this.answers = answers;
	}

	Click(index) {
		return this.answers[index].value;
	}
}
//Класс, представляющий ответ
class Answer {
	constructor(text, value) {
		this.text = text;
		this.value = value;
	}
}

//Класс, представляющий результат
class Result {
	constructor(text, value) {
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value) {
		if (this.value <= value) {
			return true;
		}
		else {
			return false;
		}
	}
}

//Массив с результатами
const results =
	[
		new Result("Вам многому нужно научиться", 0),
		new Result("Вы уже неплохо разбираетесь", 2),
		new Result("Ваш уровень выше среднего", 4),
		new Result("Вы в совершенстве знаете тему", 6)
	];

//Массив с вопросами
const questions =
	[
		new Question("Большинство учебных предметов вызывает у меня искренний интерес ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Изучение  учебных предметов в вузе является частью моего саморазвития ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Все, что связано с моим обучением, имеет для меня личную значимость",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Учеба в университете обычно приносит мне положительные эмоции",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Часто я не могу взяться за учебные дела из-за лени",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Я могу понять, с чем связано изменение моего интереса к изучению какого-либо предмета ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Я знаю, как найти новые, интересные темы в скучном на первый взгляд предмете ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),
		new Question("В начале изучения нового учебного предмета я обычно задумываюсь, что он даст для моего развития как личности и профессионала",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Перед началом нового учебного семестра я обычно ставлю себе цели в обучении и стараюсь продумать план их достижения",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Обычно я задумываюсь, почему в изучении одного предмета я нахожу смысл, а в изучении другого нет",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Если какое-то задание оказалось слишком легким и от этого скучным, я стараюсь перейти к выполнению более сложного, чтобы не терять интерес ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Иногда мне удается найти смысл в задании, которое сначала казалось мне бессмысленным - самостоятельно или с помощью других людей ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Если я не могу приступить к выполнению какого-либо задания, то задумываюсь о причинах своего нежелания сделать это  ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Обсуждения с однокурсниками и преподавателями помогают мне лучше понять, зачем нужно изучать тот или иной предмет ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new Question("Если лень мешает мне заниматься учебой, то чаще всего я могу понять ее причину ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Обычно я успеваю своевременно и в полном объеме выполнять все, что мне нужно по учебе",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),


		new QuestionSO("Я стараюсь не оставлять выполнение учебных заданий на последний момент ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Я понимаю, что есть более важные задания и стараюсь выполнять их в первую очередь",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Обычно еще до выполнения задания я могу оценить примерное время и другие ресурсы, которые потребуются для этого",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Занимаясь самостоятельно учебными делами, я постоянно отвлекаюсь на что-то другое",
			[
				new Answer("Верно", 0),
				new Answer("Неверно", 1)

			]),

		new QuestionSO("Я понимаю, какие у меня могут быть сложности при выполнении того или иного учебного задания ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("При возникновении сложностей обычно я могу сказать, что именно делаю не совсем удачно для организации своего обучения ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),
		new QuestionSO("Получив не очень высокие баллы за какое-либо задание, я пытаюсь понять, что делаю не так",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),
		new QuestionSO("Мне нравиться пробовать хотя бы иногда различные способы хранения информации, необходимой для организации своего обучения (новые формы блокнотов, приложения на смартфоне и т.п.), чтобы находить еще более удобные и эффективные для меня ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),
		new QuestionSO("Если у меня появляются новые более сложные для меня учебные задачи, я могу изменить организацию своей учебной работы, чтобы успешно с ними справляться ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),
		new QuestionSO("Планируя выполнение учебных заданий, я стараюсь учитывать и наилучшим образом использовать условия, которые влияют на мою работоспособность (время суток, организация рабочего места и т.п.)  ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Если в моей жизни происходят какие-то изменения, не связанные напрямую с вузом, я обращаю внимание на то, как это влияет на мое обучение ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Время от времени я с интересом читаю статьи или книги, смотрю ролики или онлайн-курсы, посвященные теме самоорганизации и тайм-менеджмента, а также стараюсь попробовать наиболее интересные мне рекомендации из них ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Я знаю, какой способ планирования учебной работы наиболее эффективен для меня (например: ведение списков задач, распределение по датам выполнения и др.) ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			]),

		new QuestionSO("Мне бывает интересно узнавать о “лайфхаках”, приемах успешной организации своего обучения, которыми пользуются мои однокурсники и другие знакомые мне студенты (а также родные и знакомые, которые учились в вузе раньше) ",
			[
				new Answer("Верно", 1),
				new Answer("Неверно", 0)

			])
	];

//Сам тест
const quiz = new Quiz(1, questions, results);

Update();
//Обновление теста
function Update() {
	//Проверяем, есть ли ещё вопросы
	if (quiz.current < quiz.questions.length) {
		//Если есть, меняем вопрос в заголовке

		console.log(quiz.questions[quiz.current].text)

		if (headElem) {
			headElem.innerHTML = quiz.questions[quiz.current].text;
		}

		if (buttonsElem) {
			//Удаляем старые варианты ответов
			buttonsElem.innerHTML = "";
			//Создаём кнопки для новых вариантов ответов
			for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
				let btn = document.createElement("button");
				btn.className = "button";

				btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

				btn.setAttribute("index", i);

				buttonsElem.appendChild(btn);
			}
		}

		if (pagesElem) {
			//Выводим номер текущего вопроса
			pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;
			pagesElem.style = `color: black;
			font-weight: bold;
			width: 100px;
			text-align: center;
			padding:10px;
		  `;
		}



		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
		// document.getElementById("tables").style.visibility = "hidden";
		// document.getElementById("radar").style.visibility = "hidden";


	}
	else {
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
		finTable.innerHTML = quiz.score;
		document.getElementById("tables").style.visibility = "visible";
		document.getElementById("radar").style.visibility = "visible";

	}
}

function Init() {
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for (let i = 0; i < btns.length; i++) {
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}




function Click(index) {
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);


	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for (let i = 0; i < btns.length; i++) {
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if (quiz.type == 1) {
		if (correct >= 0) {
			btns[correct].className = "button button_correct";
		}

		if (index != correct) {
			btns[index].className = "button button_wrong";
		}
	}
	else {
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "#6477EB;";
	}



	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}

