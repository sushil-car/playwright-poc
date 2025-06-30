pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.43.1-jammy'
            args '-p 4200:4200' // Expose Angular default port
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
