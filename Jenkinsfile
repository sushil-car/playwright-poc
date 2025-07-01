pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.53.1-jammy'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Run Playwright Tests') {
            steps {
              sh "./node_modules/.bin/playwright test"
            }
        }
    }
}
