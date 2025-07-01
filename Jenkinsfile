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
        stage('Install Dependencies') {
            steps {
                sh 'npm ci || yarn install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
