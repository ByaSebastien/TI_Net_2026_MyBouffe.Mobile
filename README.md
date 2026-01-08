# Instalation

- install ionic
- ```shell
  npm i -g @ionic/cli
  ```
- install jdk
  - mettre la variable d env JAVA_HOME
- intall graddle
  - set env variable
    - C:\Gradle\gradle-8.14.3
- install sdk
  - https://developer.android.com/studio/index.html#command-line-tools-only
  - ```shell
    sdkmanager --licenses
    sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0"
    ```
  - set env variables 
    - ANDROID_HOME = C:\Android
    - PATH += %ANDROID_HOME%\cmdline-tools\latest\bin
    - PATH += %ANDROID_HOME%\platform-tools
    - PATH += %ANDROID_HOME%\emulator
    - %ANDROID_HOME%\cmdline-tools\latest\bin
    - %ANDROID_HOME%\platform-tools
    - %ANDROID_HOME%\build-tools\34.0.0

# Demarrer un projet :

```shell
ionic start <NomDeLApp>
```

# Pour avoir sur le tel en live reload
```shell
ionic build
npm install @capacitor/android
npx cap add android
npx cap sync android
```

# Lancer le projet

```shell
ionic cap run android --external --livereload
```

# Lancer le projet en wifi

1. Activer le debug wifi sur tel
2. Associer tel via code
3. Memoriser ip:port + code association
4. ```shell
   adb pair <host-ip>:<port>
   ```
5. Rentrer le code


# Acceder au debugger

sur navigateur chromium : chrome://inspect
