pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.53.2-noble'
            args '-v $WORKSPACE:/workspace'
        }
    }
    options {
        timestamps()
    }
    environment {
        CI = 'true'
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Run Playwright Tests') {
            timestamps {
                steps {
                    sh 'ls -la'
                    sh 'yarn install --frozen-lockfile'
                    sh "npx playwright test --project='chromium'"
                    echo 'Playwright tests completed'
                    sh 'ls -la'
                }
            }
        }
        stage('Publish Playwright HTML Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Test Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: true
                ])
            }
        }
        stage('Clean up') {
            steps {
              sh 'ls -la'
//               cleanWs()
            }
        }
    }
}
