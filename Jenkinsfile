pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.53.2-noble'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Run Playwright Tests') {
            steps {
                sh 'ls -la'
                sh "npx playwright test --project='chromium'"
                echo 'Playwright tests completed'
                sh 'ls -la'
            }
        }
        stage('Publish Playwright HTML Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report/html/',
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
