# This is the CIL-web application code, to keep this up and running, please follow these steps mentioned below


## Usage
1. `git clone https://github.com/HCL-Innovationlab/CIL-WebApplication`
2. `npm install`
3. `npm start`
4. Go to `localhost:8080`

In case you get some errors like following on console, then follow the steps below that ,

ERROR in ./src/index.js
Module not found: Error: Cannot resolve module 'style' in C:\Users\INNOVATION LA                                                       B\Desktop\Sim\CIL-WebApplication\src
 @ ./src/index.js 9:0-47

ERROR in ./src/components/App.js
Module not found: Error: Cannot resolve module 'style' in C:\Users\INNOVATION LA                                                       B\Desktop\Sim\CIL-WebApplication\src\components
 @ ./src/components/App.js 15:0-21

ERROR in ./src/components/landingPage/landing-page.js
Module not found: Error: Cannot resolve module 'style' in C:\Users\INNOVATION LA                                                       B\Desktop\Sim\CIL-WebApplication\src\components\landingPage
 @ ./src/components/landingPage/landing-page.js 13:0-29

ERROR in ./src/components/dashboard/Dashboard.js
Module not found: Error: Cannot resolve module 'style' in C:\Users\INNOVATION LA                                                       B\Desktop\Sim\CIL-WebApplication\src\components\dashboard
 @ ./src/components/dashboard/Dashboard.js 13:0-27

ERROR in ./src/components/App.js
Module not found: Error: Cannot resolve module 'style' in C:\Users\INNOVATION LA                                                       B\Desktop\Sim\CIL-WebApplication\src\components
 @ ./src/components/App.js 13:0-44
webpack: Failed to compile.

1. npm install style-loader --save
2. npm install sass-loader --save
3. npm install node-sass --save

then after this, start the server by runnning `npm start`
then Go to `localhost:8080`
