// 1. Variable Initialization
var macro, proxy, linkedinEmail, linkedinPassword, linkedinSearch, i, j;

macro = '';

proxy = '';

linkedinEmail = 'EMAIL';

linkedinPassword = 'YOUR PASSWORD';

linkedinSearch = 'LINKEDIN SEARCH URL';


// 2. Macro Initialization

macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';


// 3. Clear cookie, cache and set a proxy

macro += "CLEAR" + "\n";

if (proxy !== "") {
  macro += "PROXY ADDRESS=" + proxy + "\n";
}


// 4. LinkedIn Sign In

macro += 'TAB T=1' + '\n';

macro += 'TAB CLOSEALLOTHERS' + '\n';

macro += 'WAIT SECONDS=1' + '\n';

macro += 'URL GOTO=https://www.linkedin.com/uas/login' + '\n';

macro += 'TAG POS=1 TYPE=INPUT:TEXT FORM=ID:login ATTR=ID:session_key-login CONTENT=' + linkedinEmail + '\n';

macro += 'TAG POS=1 TYPE=INPUT:PASSWORD FORM=ID:login ATTR=NAME:session_password CONTENT=' + linkedinPassword + '\n';

macro += 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:login ATTR=NAME:signin' + '\n';

macro += 'WAIT SECONDS=2' + '\n';


// 5. Search for people to visit

macro += 'URL GOTO=' + linkedinSearch + '\n';

macro += 'WAIT SECONDS=2' + '\n';


// 6. Auto-visit and close profiles / 100 pages
for (i = 2; i <= 4; i++) {

    for (j = 1; j <= 11; j++) {
        macro += 'EVENT TYPE=CLICK SELECTOR="#results>LI:nth-of-type(' + j + ')>DIV>H3>A" BUTTON=0 MODIFIERS="meta"' + '\n';
        macro += 'WAIT SECONDS=2' + '\n';
    }

    macro += 'WAIT SECONDS=20' + '\n';
    
    macro += 'TAB CLOSEALLOTHERS' + '\n';
    
    macro += 'TAG POS=1 TYPE=A ATTR=TXT:' + i + '\n';
}


// 7. Run de Macro

iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);