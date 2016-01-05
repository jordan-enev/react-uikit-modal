#React UIkit Modal

Displays dialogs prompts.

npm install react-uikit-modal --save;

// ES6  
import Modal from 'react-uikit-modal';  

// ES5  
var Modal = require('react-uikit-modal');  


###Example
    <const animateIn = (modal, dialog) => {
      velocity(modal, {opacity: 1}, {display: 'block'}, 300);
      velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
    };

    const animateOut = (modal, dialog) => {
      velocity(modal, {opacity:0}, { display: 'none' }, 300);
      velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
    };
    ...
    <Modal
      close
      trigger={{
        body: 'Open',
        animate: {
          'in': (modal, dialog) => animateIn(modal, dialog),
          out: (modal, dialog) => animateOut(modal, dialog)
        }
      }}
    >
      <h2>Headline</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
</Modal>


##Tests

`npm run test`to run tests with minimal output.  
`npm run test:spec` to run tests with detailed output.  
`npm run test:watch` watches all directories and run tests with minimal output on file changes.

##Build
`npm run build` to build files fro distribution.  
`npm run build:watch` watches src directory and builds files on changes.

##Lint
`npm run lint` lints scripts in src directory.  
`npm run lint:watch` watches src directory and lints scripts in src directory.

##License
MIT
