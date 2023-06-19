# Hints
Usefull things

Порядок розміщення компонентів react-native:
контейнер (будь-який: View, ImageBackground, SafeAreaView...)
TouchableWithoutFeedback onPress={Keyboard.dismiss} - автозакриття клавіатури при тач за межами полів вводу
KeyboardAvoidingView - підняття полів вводу над клавіатурою (обов'язковий проп behavior={Platform.OS === "ios" ? "padding" : "height"})



Бібліотека іконок @expo/vector-icons
Бібліотека для вбудовування власних svg-іконок react-native-svg
