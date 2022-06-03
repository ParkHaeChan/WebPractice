pipeline {

    agent any

    stages{
      //init stage 시작
      stage("init"){
        steps {
          sh "echo init"
        }
      }

      //build stage 시작
      stage("build"){
        steps {
          sh "sudo rm -r node_modules"
          sh "sudo rm -r package-lock.json"
          sh "sudo npm install"
          sh "sudo npx webpack"
        }
      }
  
      //deploy stage 시작
      stage("deploy"){
        steps {
          sh "echo 'start deploy' "
        }
      }
    }
}