# Node
Usefull things

Відповідність методів бібліотек валідації даних:
Mongoose  - Joi
match: - pattern() - відповідність регулярному виразу (заключати регулярний вираз в /.../; при присвоєнні змінній або через присвоєння об'єкта new RegExp("..."))
enum: valid() - відповідність масиву значень
minlentgth:, maxlentgth: - min(), max() - довжина рядка
min:, max: - min(), max() - мінімальне та максимальне значення числа

співпадають - required,

Призначення бібліотек:

morgan - логування запитів до веб-сервера 

dotenv - робота із змінними оточення (в т.ч. власними, що прописані у файлі .env) Підключення - require("dotenv").config()

cors - міждоменні запити, викликати як функцію (без параметрів, якщо дозволені запити із будь-якого домену) всередині middleware use

bcrypt (для хешування пароля у стабільних версіх Node) bcryptjs (для хешування пароля в експериментальних версіх Node). 
Методи (усі асинхронні): hash(пароль, кількість солей) - створення хешованого пароля, compare(пароль, хешований пароль) - повертає буль, який вказує на валідність пароля

jsonwebtoken - для створення jwt-токена. 
Методи (усі синхронні): sign(об'єкт payload, секретний ключ, об'єкт налаштувань із властивістю {expiresIn: <1d, 1w, 1h etc.>) - повертає сформований jwt-токен,
verify(jwt-токен, секрений ключ) - повертає payload, при невдачі викидає помилку, тому потрібно обрамляти в конструкцію try{} catch{}

multer - для отримання даних із frontend разом з бінарними даними. Розподіляє текстові поля в req.body, а бінарні файли в req.file (якщо один файл), або в req.files (якщо кілька файлів).
Методом multer({storadge: {destination: <назва папки для тимчасового зберігання файлів>, filename: (req, file, callback)=>callback(null, <логіка перейменування файлів або file.originalname>)}}) створюється middleware, в якій є методи: single(назва поля з одним файлом), array(назва поля з кількома файлами, кількість файлів) fields(масив об'єктів у форматі: {name: <назва поля>, maxCount: <кількість файлів>})

Методи express:
express() - ініціалізує веб-сервер
json() - отримання із req.body та відсилання даних в res.body у форматі json, викликати всередині middleware use
static(папка для роздачі файлів) - відкриває вказану папку для передачі файлів на frontend, викликати всередині middleware use
listen(порт, колбек після запуску) - запуск веб-сервера на вказаному порту



Деплой проєкту проєкту Node.js на -https://render.com/ (https://www.youtube.com/watch?v=39ngI2PF43Q)
У разі виявлення проблем, окремо вкажіть в package.json версію node, так як по замовчуванню Render бере 14 версію, яка не підтримує нові методи строк/масивів. В строці - build command - yarn - НІЧОГО НЕ ЗМІНЮЙТЕ, start command - npm run start - ваш скрипт start для запуску повинен починатись зі слова node - це обов‘язково, бо без цього не буде запускатись.
задля уникнення конфліктів з https://render.com/ використовуйте mongoose версії 6.9.2
як прописати в swagger завантаження зображення https://swagger.io/docs/specification/describing-request-body/file-upload/ , https://www.youtube.com/watch?v=ZwcXLmeSm70
для збереження файлів використовуйте хмарне сховище https://cloudinary.com/ - легка реєстрація, зручне апі, готові модулі для підключення
//router
router.post('/user', authenticate, upload.single('avatar'), ctrl.addAvatar);

//middleware upload
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Determine the folder based on file properties or request data
    let folder;
    if (file.fieldname === 'avatar') {
      folder = 'avatars';
    } else if (file.fieldname === 'documents') {
      folder = 'documents';
    } else {
      folder = 'misc';
    }
    return {
      folder: folder,
      allowed_formats: ['jpg', 'png'], // Adjust the allowed formats as needed
      public_id: file.originalname, // Use original filename as the public ID
    };
  },
});

const upload = multer({ storage });

module.exports = upload;

Валідація даних в моделі Mongoose (порівняння даних часу, що записані в базу у вигляді рядка): 
{
    endTime: {
      type: String,
      match: timeRegexp,
      required: true,
      validate: {
        validator: function (value) {
       
          return value >= this.startTime;
        },
        message: 'Your message',
      },
    },
    // ... rest of your schema fields ...
  },

Прописування текстів помилок в схемі Joi:
  password: Joi.string().pattern(passwordRegexp).min(7).required().empty(false).messages({
    'string.base': 'The password must be a string.',
    'any.required': 'The password field is required.',
    'string.empty': 'The password must not be empty.',
    'string.min': 'The password must be not less 7 symbols.',
    'string.pattern.base': 'The password must consist of 6 English letters and 1 number.',
  }),
