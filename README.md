# Hints
Usefull things

Корисні бібліотеки:
clsx, classnames (аналог) - класи для модульного css

styled-components, @emotion/react +  @emotion/styled (аналог) - СТИЛІЗАЦІЯ КОМПОНЕНТІВ

prop-types - опис типів даних (заміна TypeScript на малих та середніх проєктах)

nanoid, shortid, uuid - генерація унікальних id для елементів форми

formik - форми для Реакта (із вбудованим станом)

react-debounce-input - denounce для поля вводу у реакт

react-select - кастомний тег селект для реакта

react-video - рендеринг відео (незалежно від джерела)

yup - валідвація форм

react-loader-spinner - анімація прогресу завантаження даних (лоадер), react-content-loader - скелетон для завантаження 

react-icons - іконки для React

react-toastify - повідомлення в React



Підключення svg-іконок (обов'язковий рядок: import {ReactComponent as ..} from 'шлях до файла svg-іконки')

Хуки:
useState() - повертає масив з двох елементів: стану та методу для зміни стану (setState)

useEffect() - аналог componentDidMount, componentDidUpdate та componentWillUnmount класових компонентів. З пустим масивом залежностей - разове спрацьовування в режимі componentDidMount, без залежностей - при кожному рендері, з масивом залежностей - при зміні значень залежностей.

useParams() - повертає об'єкт динамічних параметрів з рядка URL, застосовна декструктуризація у змінні

useSearchParams() - повертає масив: об'єкт URLSearchParams та метод для його зміни (в метод передати новий об'єкт URLSearchParams)

useNavigate() - повертає метод navigate() для прямого переходу на певну сторінку. Останній приймає рядок URL.

useMemo() - збереження даних в залежності від значень масиву залежностей, синтаксис такий самий, як і у useState(), але із присвоєнням у змінну. 

useLocation() - повертає об'єкт location із складовими поточного рядка URL. Для повернення на задану сторінку у такій сторінці компонентy Link передається пропс state={location}, на цільовій сторінці компоненту Link задається пропс to={location.state}

Збереження даних між рендерами: якщо є залежності, то використовується useMemo(), якщо немає - то ref = useRef() із властивістю ref.current

setState, setSearchParams (тобто методи, які запускають повторний рендер) потрібно використовувати всередині хуків із залежностями (useEffect(), наприклад) інакше виникає безкінечний рендеринг

Ресурси для роботи на проєкті по React:
Робота з формами та їх валідація
https://formik.org/docs/api/useFormik + https://formik.org/docs/guides/validation
Календар
https://mui.com/x/react-date-pickers/getting-started/
https://reactdatepicker.com/
Pобота з завантаженням зображень
<input type=«file»>
https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL для створення передперегляду фото
https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData для відправлення файлу і значення форми на бекенд
Статистика
https://recharts.org/en-US/
Робота з датами
https://date-fns.org/
https://dance2die.github.io/calendar-dates/#/
import { startOfMonth, endOfMonth, endOfWeek, eachDayOfInterval, startOfWeek } from ‘date-fns’ - для роботи з днями місяця
import { startOfWeek, eachDayOfInterval } from ‘date-fns’ - для роботи з днями тижня
Helpers
UI-бібліотеки
https://mui.com/x/react-date-pickers/getting-started/
https://blueprintjs.com/
Додаткові фічі
Перетягування тасок:
https://www.npmjs.com/package/react-beautiful-dnd
Mультимовність:
https://www.i18next.com/
Google-кнопка авторизації
https://www.youtube.com/watch?v=oQaoymCOW8o
https://github.com/NadyaHristuk/lesson-swagger-googleOAUTH2
Онбордінг
https://www.npmjs.com/package/@reactour/tour
Лайфхакі
Зручне розширення для роботи з гілками репозиторія Git Graph
