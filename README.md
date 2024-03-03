
# Payslip home task

This ionic app allows the user to view their payslips, get specific details and also download the original payslip file.

## How to Run
### Installing Dependencies
- Clone the repository with

    ```git clone https://github.com/Michael-Girma/payslip-viewer.git```

- Run the following set of commands to install all necessary dependencies

    ```
        cd payslip-viewer && npm install
    ```

### Running the Application
From here on out we'll be using ionic cli so install that first with

```npm install -g @ionic/cli```

#### Running on Web
-    The application can be started for the web right away with ```ionic serve``` executed at the parent directory

#### Running on iOS
- For iOS, it can be ran using a simulator on mac. For this, XCode will have to be installed prior. After all is prepared, one can run ```ionic cap run ios -l --external``` in the parent directory. This should ask for a device in the console and should open a simulator once done building

#### Running on Android
- For Android, it can be ran using the a simulator as well. For this Android Studio will have to be installed and a JAVA 17. After all is prepared, one can run ```ionic cap run android -l --external``` in the parent directory. This should also ask for the preferred device and open the application afterwards.