
CHANNEL_NAME=ekycchannel1

cd test-network

echo '---------------------------------------------------------'
echo '------------ Shutting down existing network -------------'
echo '---------------------------------------------------------'

./network.sh down

echo '---------------------------------------------------------'
echo '---------------- Starting a new network -----------------'
echo '---------------------------------------------------------'

./network.sh up createChannel -c $CHANNEL_NAME -ca

echo '---------------------------------------------------------'
echo '----------- Adding the third organization ---------------'
echo '---------------------------------------------------------'

cd addOrg3
./addOrg3.sh up -c $CHANNEL_NAME -ca

echo '---------------------------------------------------------'
echo '--------------- Deploying the chaincode -----------------'
echo '---------------------------------------------------------'

cd ..
# ./network.sh deployCC -ccn ekycchain -ccp ../../ekycchain/ -ccl javascript


export PATH=${PWD}/../bin:$PATH

export FABRIC_CFG_PATH=$PWD/../config/

echo '---------------------------------------------------------'
echo '----------- Finished setting up the network -------------'
echo '---------------------------------------------------------'