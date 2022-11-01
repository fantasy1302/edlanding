<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Опросник АК</title>
  <link rel="icon" type="image/x-icon" href="images/favicon.ico">
  <link rel="stylesheet" id="abc" href="css/day.css">
  <script src="hidegirl.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
  <script src="https://raw.githubusercontent.com/emn178/Chart.PieceLabel.js/master/src/Chart.PieceLabel.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="css/quiz.css">
  <script src="js/quiz.js"></script>
  <script>var btn = document.getElementById("next");
    btn.addEventListener("click", function () {
      this.classList.add("nextnew");
    });</script>
  <meta charset="utf-8">
  <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="HandheldFriendly" content="true" />


  <!-- swiper css link  -->
  <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />

  <!-- font awesome cdn link  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

  <!-- custom css file link  -->

  <link rel="stylesheet" type="text/css" href=css/app.css">


</head>

<body>
  <header class="header">

    <section class="flex">

      <a href="index.html" class="logo">Опросник академической <br> компетентности</a>

      <nav class="navbar">
        <a href="index.html">Домой</a>
        <a href="#about">Об опроснике</a>
        <a href="#courses">Наш курс</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contact">Связаться с нами</a>
      </nav>



      <div id="menu-btn" class="fas fa-bars"></div>

    </section>

  </header>
  <div class="backk">
    <div id="mainText" class="mainText">
      <div class="girlimage"><img class="girl" id="girlimagehide" src="images/oak.svg" alt=""></div>
      <div class="needtohide" id="needtohide">
        <h1 style="font-size:19pt;">Добрый день, уважаемые студенты!</h1>
        <p style="border-bottom: 1px solid lightgray; font-size: 14pt;">Предлагаем вам принять участие в исследовании
          академической компетентности и ответить на ряд вопросов о ваших навыках, знаниях и умениях, полезных в
          учебной деятельности.</p>
        <p style="font-size: 14pt;">Внимательно прочитайте каждое утверждение, прежде
          чем дать ответ. Если утверждение в полной мере соответствует или скорее соответствует вашему опыту обучения
          в вузе, нажмите на кнопку "Верно". Если утверждение имеет слабое или отдаленное отношение к вашему опыту
          учебной деятельности, то нажмите на кнопку "Неверно".</p>
      </div>

      <div class="multipleChoiceQues">
        <div class="my-progress">
          <progress class="my-progress-bar" min="0" max="100" value="0" step="9"
            aria-labelledby="my-progress-completion"></progress>
          <p id="my-progress-completion" class="js-my-progress-completion sr-only" aria-live="polite">0% complete</p>
        </div>
        <div class="quizBox">
          <div class="question"> </div>
          <div class="answerOptions"></div>
          <div class="buttonArea">
            <button id="next" class="hidden">Дальше</button>
            <button id="submit" onclick="hd()" class="hidden">Подтвердить</button>
          </div>
        </div>
      </div>
      <div class="resultArea">
        <div class="resultPage1">
          <h1>Ваши данные</h1>
          <div class="finalform">
            <form class="firstrowform">
              <div class="form-row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Электронная почта">
                </div>
                <div class="col">
                  <select type="text" name="university" size="1" value="<?= isset($_GET['red']) ? $product['university'] : ''; ?>" class="selectcourse" required>
                    <option value="" disabled selected>Выберите вуз из списка</option>
                    <option value="1">ВГСПУ – Волгоградский государственный социально-педагогический университет</option>
                    <option value="2">ВолгГТУ – Волгоградский государственный технический университет</option>
                    <option value="3">ВГАФК – Волгоградская государственная академия физической культуры</option>
                    <option value="4">ВИУ РАНХиГС – Волгоградский институт управления – филиал РАНХиГС (Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации)</option>
                    <option value="5">ВолгГМУ – Волгоградский государственный медицинский университет</option>
                    <option value="6">ВолГУ – Волгоградский государственный университет</option>
                    <option value="7">ВолГАУ – Волгоградский государственный аграрный университет</option>
                    <option value="8">ВГИИК – Волгоградский государственный институт искусств и культуры</option>
                    <option value="9">Другое (Волгоград)</option>
                    <option value="10">Другое (Москва)</option>
                    <option value="11">Другое (Россия)</option>
                 </select>
                </div>
                <div class="col">
                  <select  name="directs" size="1" value="<?= isset($_GET['red']) ? $product['directs'] : ''; ?>" class="selectcourse" required>
                    <option selected>Выберите направление подготовки</option>
                    <option value="1">44.03.02 Психолого-педагогическое образование</option>
                    <option value="2">37.03.01 Психология</option>
                    <option value="3">44.03.03 Специальное (дефектологическое) образование</option>
                    <option value="4">44.03.05 Педагогическое образование (с двумя профилями подготовки)</option>
                    <option value="5">45.03.02 Лингвистика</option>
                    <option value="6">54.03.01 Дизайн</option>
                    <option value="7">43.03.02 Туризм</option>
                    <option value="8">42.03.01 Реклама и связи с общественностью</option>
                    <option value="9">39.03.02 Социальная работа</option>
                    <option value="10">38.03.03 Управление персоналом</option>
                    <option value="11">Другое (гуманитарное)</option>
                    <option value="12">Другое (техническое)</option>
        
                 </select>
                 </div>
              </div>
              
            </form>
            <div class="form-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Направление">
              </div>
              <div class="col">
                <select  name="age" size="1" value="<?= isset($_GET['red']) ? $product['age'] : ''; ?>" class="selectcourse" required>
                  <option selected>Выберите возрастную группу</option>
                  <option value="1">17-18 лет</option>
                  <option value="2">19-20 лет</option>
                  <option value="3">21-22 лет</option>
                  <option value="4">23-24 лет</option>
                  <option value="5">25-26 лет</option>
               </select>
              </div>
              <div class="col">
                <span>Пол</span>
                <div class="radio">
                  <input type="radio" name="gender" value="male" id="male">
                  <label for="male">Мужской</label>
                  <input type="radio" name="gender" value="female" id="female">
                  <label for="female">Женский</label>
               </div>
              </div>
              </div>
            </form>
          </div>
          <div class="resultBox">
            <h1>Ваш профиль академической компетентности</h1>
          </div>
          <div class="briefchart">
            <canvas id="myChart" width="400" height="400"></canvas>
          </div>

          <div class="resultBtns">
            <button class="viewanswer">Показать рекомендации</button>
            <button class="replay"><i class="fa fa-repeat" style="font-size:1em;"></i> <br />Повторить</button>
            <button onclick="hide()" class="viewchart">Завершить</button>
          </div>
        </div>

        <div class="resultPage2">
          <h1>Your Result</h1>
          <div class="chartBox">
            <canvas id="myChart" width="400" height="400"></canvas>
          </div>
          <button class="backBtn">Назад</button>
        </div>

        <div class="resultPage3">
          <div id="buttons"></div>
          <h1>Your Answers</h1>
          <div class="allAnswerBox"></div>
          <table id="table" class="table">
            <tbody id="newtable">
              <tr>
                <th>Сфера АК</th>
                <th>Результат</th>
              </tr>

              <!-- <tr>
                <td>АМ</td>
                <td id="coll" data-col="1">15</td>
              </tr>
              <tr>
                <td>СО</td>
                <td>19</td>
              </tr>
              <tr>
                <td>СЭ</td>
                <td>9</td>
              </tr>
              <tr>
                <td>О</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Р</td>
                <td>16</td>
              </tr>
              <tr>
                <td>ЦК</td>
                <td>18</td>
              </tr> -->
            </tbody>
          </table>
          <button class="backBtn">Назад</button>
        </div>

      </div>





      <script>
        function switchTheme() {
          document.getElementById("abc").href = 'css/style.css';
        }
      </script>
      <script type="text/javascript" src="js/app.js"></script>
      <script type="text/javascript" src="js/hide.js"></script>
</body>

</html>