/* npm is directly connected at the index.js but can be change
to initialise use npm init
then instale date-fns => npm i date-fns

the file .gitignore allow to not save file on github by naming them 

When you clone a repository and there is no node_modules
tapping npm install in the terminal read the package.json file and install the modules
*/

const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));



/*
Then we create a start and dev scritp to the package.json

after that install the modules uuid => generate ID 
*/

console.log(uuid());

/*
the documentation on npmjs.com provide any help needed by searching 
*/

/*
in package.json the series of number state for the version ('X(major version).X(minor version).X(patch)')
the '^' in front state for update the minor version and the patch
the '~' in front state for update the patch
the '*' alone alow to use any version
without anything in front of the version => unique version use

to install a specific version (ex: uuid 9.0.1)
in the terminal put => npm i uuid@9.0.1

to check if there are update
put npm update

to unistall 
put npm rm <module> 
or npm un(install) <module>

don't forget to change the scripts manully
*/