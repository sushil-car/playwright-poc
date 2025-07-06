pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.53.2-noble'
        }
    }
    environment {
        CI = 'true'
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Run Playwright Tests') {
            steps {
                sh "npx playwright test --project='chromium'"
            }
        }
        stage('Clean up') {
            steps {
                cleanWs()
            }
        }
    }
}
