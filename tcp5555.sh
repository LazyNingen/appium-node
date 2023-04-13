RT=5555
STATUS=$(adb tcpip $PORT 2>&1)

if [[ $STATUS == *"restarting in"* ]]; 
then
echo "Port $PORT is already open."
else
adb tcpip $PORT
echo "Port $PORT is now open."
fi
