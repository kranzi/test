node_version="v4.2.6"
npm_version="3.5.2"
gulp_version="3.9.1"
typescript_version="..."

. ./env

echo "Testing node..."
if node -v | grep -q $node_version
then
	echo "node works."
else
	echo "node error!"
	exit 1
fi

echo "Testing npm..."
if npm -v | grep -q $npm_version
then
	echo "npm works."
else
	echo "npm error!"
	exit 1
fi

echo "Testing gulp..."
if gulp -v | grep -q $gulp_version
then
	echo "gulp works."
else
	echo "gulp error!"
	exit 1
fi

echo "Testing typescript..."
if typescript -v | grep -q $typescript_version
then
	echo "typescript works."
else
	echo "typescript error!"
	exit 1
fi
