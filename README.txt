On Google cloud

Laucnh the Google Cloud Console.
Laucnh Unicorn process : 
gunicorn -w 10 streaming_api:app

### You can change the number of workers

pkill -f gunicorn 
### To kill all unicorn processes


The server answers at this address https://backend.brightness-agency.com/stream_chat


## restrat Nginx
sudo systemctl restart nginx