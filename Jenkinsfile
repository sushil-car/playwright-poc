pipeline {
    environment {
        CI = 'true'
    }
    stages {
      stage('Run Playwright Tests') {
        script {
          docker.image('mcr.microsoft.com/playwright:v1.53.1-jammy').inside('--user root --shm-size 8g --ipc host') {
            sh "ls -l"
            sh "npx playwright test"
          }
        }
      }
    }
}
