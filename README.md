# 📱 Mobile Automation con WebdriverIO + TypeScript

Proyecto listo para automatizar pruebas en apps móviles Android usando **WebdriverIO v8**, **Appium**, **TypeScript** y el patrón **Page Object Model (POM)**. Incluye formateo con **Prettier**, linting con **ESLint** y estructura modular.

---

## 🚀 Requisitos

- Node.js v16 o superior
- NPM
- Java JDK 8+
- Android Studio + AVD configurado

---

## 📦 Instalación y primer uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/eavendano01/webdriverio-android-sample.git
   cd mobile-automation-completo
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. (Opcional) Revisa y ajusta las capabilities en `test/config/wdio.android.conf.ts` para tu dispositivo/emulador:
   ```ts
   'appium:deviceName': 'Emulator-name',
   'appium:platformVersion': 'android-version',
   'appium:app': path.resolve('./android-sample-app.apk'),
   'appium:automationName': 'UiAutomator2'
   ```
4. Asegúrate de tener un emulador Android corriendo o un dispositivo conectado.

---

## 🧪 Estructura del proyecto

```
mobile-automation-completo/
├── test/
│   ├── specs/android/               # Casos de prueba (login, home, etc)
│   ├── pageobjects/android/         # Page Objects (LoginScreen, HomeScreen)
│   └── config/                      # Configuraciones WDIO por plataforma
├── wdio.conf.base.ts                # Configuración base de WDIO
├── android-sample-app.apk           # APK de ejemplo
├── tsconfig.json                    # Configuración TypeScript
├── .eslintrc.js                     # Configuración ESLint
├── .prettierrc                      # Configuración Prettier
├── .gitignore                       # Exclusiones para git
├── package.json                     # Dependencias y scripts
```

---

## 🏃‍♂️ Cómo correr las pruebas

1. Levanta el emulador Android o conecta tu dispositivo.
2. Ejecuta las pruebas:
   ```bash
   npm run test:android
   ```
   Puedes correr un test específico:
   ```bash
   npm run test:android -- --spec ./test/specs/android/login.android.spec.ts
   ```

---

## 🧼 Lint y formato

Para revisar errores de estilo:

```bash
npm run lint
```

Para formatear el código automáticamente:

```bash
npm run format
```

---

## 🆕 Cambios y recomendaciones

- Se agregaron page objects para Home y Login.
- Se crearon tests para login y home usando la estructura POM.
- Se configuró `.gitignore` para excluir archivos innecesarios.
- Se recomienda instalar Appium y drivers con:
  ```bash
  npm install --save-dev appium
  npx appium driver install uiautomator2
  ```
- Si usas otro APK, actualiza la ruta en la configuración.

---

## 📄 Licencia

MIT
Author: Eduardo Avendaño
