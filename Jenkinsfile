pipeline {
    agent any

    stages {
        stage('Hello World') {
            steps {
                sh 'echo "Hello World"'
            }
        }
        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
