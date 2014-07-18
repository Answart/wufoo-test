Wufoo's Node API wrapper
---
https://github.com/jusx/node-wufoo




Wufoo Integration
http://help.wufoo.com/articles/en_US/SurveyMonkeyArticleType/Webhooks
http://knowledgebase.wbpsystems.com/content/Save_data_from_WuFoo_Forms_into_Heap_CRM
------------------------
Create a form
Go to Form Manager (Form Tab)
Click Notifications on the desired form.
Under Notifications Settings you will want to Add Integration to a Webhook
Add in your WebHook URL (URL to show form information) and your WebHook Handshake Key (create a handshake key to use later)



      console.log(form.hash);
      console.log(form.name);
      console.log(form.description);
      console.log("+++++++++++++")