pipeline {
    stages {
        stage('Hello World') {
          sh 'echo "Hello World"'
        }
        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
