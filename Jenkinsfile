pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.53.2-noble'
            args '-v $WORKSPACE:/workspace'
        }
    }
    environment {
        CI = 'true'
        FORCE_COLOR = "false"
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Run Playwright Tests') {
            steps {
                sh 'ls -la'
                sh 'yarn install --frozen-lockfile'
                sh "npx playwright test --project='chromium'"
                echo 'Playwright tests completed'
                sh 'ls -la'
            }
            post {
                always {
                    echo "Publish Playwright HTML Report"
                    // System.setProperty('hudson.model.DirectoryBrowserSupport.CSP', "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';")
//                     System.setProperty('hudson.model.DirectoryBrowserSupport.CSP', "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';")
//                     System.setProperty('hudson.model.DirectoryBrowserSupport.CSP', "default-src 'self'; img-src 'self' data:; frame-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';")
//                     System.setProperty('hudson.model.DirectoryBrowserSupport.CSP', "default-src 'self'; img-src 'self' data:; frame-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';")
                    publishHTML(target: [
                        reportDir: 'monocart-report',
                        reportFiles: 'index.html',
                        reportName: 'Playwright tests report',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                }
           }
        }
//         stage('Publish Playwright HTML Report') {
//             steps {
//                 sh 'echo "Stage: Publish Playwright HTML Report - $(date)"'
//
//                 publishHTML(target: [
//                     reportDir: 'playwright-report',
//                     reportFiles: 'index.html',
//                     reportName: 'Playwright tests report',
//                     keepAll: true,
//                     alwaysLinkToLastBuild: true,
//                     allowMissing: true
//                 ])
//             }
//         }
        stage('Clean up') {
            steps {
              sh 'ls -la'
//               cleanWs()
            }
        }
    }
}
