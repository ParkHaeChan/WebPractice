node{

    //init stage 시작
    stage("init"){
      sh "echo init"
    }

    //build stage 시작
    stage("build"){
      steps {
        sh "npm install"
        sh "npm run build"
      }
    }
 
    //deploy stage 시작
    stage("deploy"){
      sh "echo 'start deploy' "
    }
}