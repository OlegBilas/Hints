# Hints
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
Методи (усі асинхронні): hash(пароль, кількість солей) - створення хешованого пароля, compare(пароль, хешований пароль) - повертає буль, який вказуэ на валыднысть пароля

jsonwebtoken - для створення jwt-токена. 
Методи (усі синхронні): sign(об'єкт payload, секретний ключ, об'єкт налаштувань із властивістю {expiresIn: <1d, 1w, 1h etc.>) - повертає сформований jwt-токен,
verify(jwt-токен, секрений ключ) - повертає payload, при невдачі викидає помилку, тому потрібно обрамляти в конструкцію try{} catch{}

multer - для отримання даних із frontend разом з бінарними даними. розподіляє текстові поля в req.body, а бінарні файли в req.file

Методи express:
json() - отримання із req.body та відсилання даних в res.body у форматі json
listen(порт, колбек після запуску) - запуск веб-сервера на вказаному порту


