pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.43.1-jammy'
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
                she 'npx playwright install chrome'
                sh 'npx playwright test'
            }
        }
    }
}
