node{

    //init stage 시작
    stage("init"){
      sh "echo init"
    }

    //build stage 시작
    stage("build"){
      sh "echo 'start build' "
    }
 
    //deploy stage 시작
    stage("deploy"){
      sh "echo 'start deploy' "
    }
}