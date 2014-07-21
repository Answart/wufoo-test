Wufoo's Node API wrapper
---
https://github.com/jusx/node-wufoo

##Routes

####EXAMPLE

#####To View all forms:
http://localhost:3000/api/v1/getForms?username=answart&apikey=2BJ3-IKC6-LSJU-227P
#####To View a form:
http://localhost:3000/api/v1/getFormEntries?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6
#####To View entries in a form:
http://localhost:3000/api/v1/getFormEntries?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6


Routes which require just a username and apikey:

- getForms
- getReports

Routes which require a username, apikey, and formhash:

- getForm
- getFormEntries
- getFields
- getComments
- getCommentCount

Routes which require a username, apikey, and reporthash:

- getReport
- getReportEntries
- getWidgets


##NOTES

###LINKS
- http://help.wufoo.com/articles/en_US/SurveyMonkeyArticleType/Webhooks
- http://knowledgebase.wbpsystems.com/content/Save_data_from_WuFoo_Forms_into_Heap_CRM

###WUFOO account/form/report info
- http://localhost:3000/api/v1/getForm?username=answart&apikey=2BJ3-IKC6-LSJU-227P&formhash=q2260j51chrkf6

- username: answart
- apikey: 2BJ3-IKC6-LSJU-227P
- formhash: q2260j51chrkf6
- reporthash: z1bsn3ar155c37e
- heroku app: http://arcane-eyrie-8261.herokuapp.com/
- wufoo forms url: utilities.bislr.net:3333