pipeline{
    agent any
    stages{
        stage("Test"){
            steps{
                sh '''
                       echo "Hello World from abatan"
                   '''
            }
        }
        stage("Build"){
            steps{
                sh '''
                      ## Get the project
                       
                       sudo apt update

                       sudo apt install -y nginx

                       sudo systemctl enable nginx

                       sudo docker build -t abatan/pixer:latest .

                       sudo docker run -d -p 802:80 abatan/pixer:latest
                   
                   
                   
                   '''
            }
        }
    }
}       
