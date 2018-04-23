$URI = "http://127.0.0.1:8000/checkin/curl"
$Body = @{
    serial="testserial123"
    recovery_password="B8HM"
    username="gavin"
    macname="gavin-mbp"
} 
Invoke-WebRequest -Uri $URI -Body $Body -Method Post