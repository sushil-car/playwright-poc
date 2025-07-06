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
         stage('Install Dependencies') {
            steps {
                sh 'yarn install --frozen-lockfile'
            }
        }
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
