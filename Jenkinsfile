pipeline {
    agent any
    
    stages {
     
      stage('Set Up Enviornment') {
            steps {
            
              sh 'npm install'
                
            }
        }
         stage('Build & Test') {
            steps {
                 parallel (
                     'build':{
                        echo 'Running Builds'
                        sh 'npm run build:prod'
                     },
                     'test':{
                        echo 'Running Tests'
                     },
                     'package':{
                        echo 'Packaging Files'
                     }
                 )
                
            }
        }
        stage('Deploy') {
            steps {
             parallel (
                     'deploy':{
                        echo 'Deploying...'
                    
                     },
                     'start':{
                        echo 'Server Starting...'
                     }
                 )
            
                
            }
        }
    }
   post {
    success {
   
      emailext (
          subject: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
          body: """<p>SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
            <p>Check console output at '<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>'</p>""",
          recipientProviders: [[$class: 'RequesterRecipientProvider']]
        )
    }

    failure {

      emailext (
          subject: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
          body: """<p>FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
            <p>Check console output at '<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>'</p>""",
          recipientProviders: [[$class: 'RequesterRecipientProvider']]
        )
    }
  }
    
}