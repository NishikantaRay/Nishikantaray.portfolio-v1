import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsServiceService {
  getData(){
    const arrproject:any =[
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/javascript.svg",
        "name":"JAVASCRIPT"
      },
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/angularjs.svg",
        "name":"ANGULAR"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/bootstrap.svg",
        "name":"BOOTSTRAP"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg",
        "name":"GITHUB"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/nodejs.svg",
        "name":"NODEJS"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/express.svg",
        "name":"EXPRESS"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/mongodb.svg",
        "name":"MONGODB"
      },
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/c.svg",
        "name":"C"
      },
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg",
        "name":"HTML"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg",
        "name":"CSS"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/java.svg",
        "name":"JAVA"
      }
      ,
      {
        "url":"https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
        "name":"GOOGLE CLOUD"
      }
      ,
      {
        "url":"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        "name":"GIT"
      }
      ,
      {
        "url":"https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "name":"TYPESCRIPT"
      }
      ,
      {
        "url":"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        "name":"TAILWINDCSS"
      }
    ];
    return arrproject;
  }
  constructor() { }
}
