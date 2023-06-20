# Hints
Usefull things

Порядок розміщення компонентів react-native:
контейнер (будь-який: View, ImageBackground, SafeAreaView...)
TouchableWithoutFeedback onPress={Keyboard.dismiss} - автозакриття клавіатури при тач за межами полів вводу
KeyboardAvoidingView - підняття полів вводу над клавіатурою (обов'язковий проп behavior={Platform.OS === "ios" ? "padding" : "height"})

npx create-expo-app (назва проекту) - щоб створити проект за допомогою Expo, ввести цю команду в терміналі
Бібліотеки для повсякчасної роботи:
1) @react-navigation/native - для роботи з навігацію взагалі (при роботі із Expo потрібно встановити ще додаткові пакети: npx expo install react-native-screens react-native-safe-area-context)
2) @reac-navigation/stack (або @react-navigation/native-stack, погано кастомізується)- для роботи з верхньою навігацією. Для роботи цієї біблотеки із Expo потрібно ще додатково встановити ось цю бібліотеку командою: npx expo install react-native-gesture-handler, а також додати імпорт цієї бібліотеки у найвищий файл в ієрархії проекту - App.js
3) @react-navigation/bottom-tabs - для роботи з нижньою навігацією

Бібліотека іконок @expo/vector-icons
Бібліотека для вбудовування власних svg-іконок react-native-svg
