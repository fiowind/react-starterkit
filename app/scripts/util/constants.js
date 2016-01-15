'use strict';

const sourceUrl="//61.174.13.156:1188/"

const ApiUrl = {
    "home": sourceUrl+'node/2/?json=1',
    "default": sourceUrl+'node/1/?json=1',
    "plans": sourceUrl+'/h5/plans',
    "account": sourceUrl+'/h5/my-account',
    "register": sourceUrl+'/h5/register',
    "aboutUs": sourceUrl+'/h5/company',
    "help": sourceUrl+'/h5/help-center'
};


export default ApiUrl;