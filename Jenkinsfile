pipeline{
    agent any
    stages{
        stage("Test"){
            steps{
                sh '''
                       echo "Hello World from abatans"
                   '''
            }
        }
        stage("Build"){
            steps{
                sh '''
                      ## Get the project
                       
                       sudo apt update

                       sudo systemctl enable nginx

                       sudo docker build -t abatan/pixer:latest .

                       sudo docker run -d -p 801:80 abatan/pixer:latest
                   
                   
                   
                   '''
            }
        }
    }
}