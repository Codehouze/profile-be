pipeline {
    agent any  // Adjust if specific agent required 
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    // sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Assuming deployment directory on server is 'public'
                    // sh 'scp -r ./build/* user@server_ip:/path/to/public/'
                    echo 'Deployment done'

                    // Optional: Additional deployment steps such as restarting a service

                }
            }
        }
        stage('End') {
            steps {
                script {
                    // Assuming deployment directory on server is 'public'
                    // sh 'scp -r ./build/* user@server_ip:/path/to/public/'
                    echo 'Done'

                    // Optional: Additional deployment steps such as restarting a services

                }
            }
        }
    }
}
