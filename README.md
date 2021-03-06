# My Personal Website

My personal website's source code is available here. It is a portfolio website that uses basic html, css, 
and javascript that is deployed and served from a node.js server running in a droplet from digital ocean.

To run this code locally, follow the following steps.


To run this code it will be assumed that you have node and npm (node package manager) installed. If you do not I recommend [this guide for windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows) as well as [this guide for mac](https://treehouse.github.io/installation-guides/mac/node-mac.html) as it is an easy way to get set up and finally [this guide for linux users](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/).

First open Visual Studio Code and open a terminal.
![image](https://user-images.githubusercontent.com/71666828/120891143-bc154980-c5bb-11eb-8274-4c119b2934b4.png)

Next move into a directory that you want to work in using cd (change directory): cd "directory you want to work in"

![image](https://user-images.githubusercontent.com/71666828/120891177-fbdc3100-c5bb-11eb-9fac-0bc14b653a1a.png)


Now use the command mkdir to make a directory for you to work in, for this I used the exact command: "mkdir example"

![image](https://user-images.githubusercontent.com/71666828/120891212-2e862980-c5bc-11eb-824b-8decfc977ef2.png)

![image](https://user-images.githubusercontent.com/71666828/120891216-33e37400-c5bc-11eb-9f75-c1bf691c9dcc.png)

Now initialize the git repository using the command "git init"

![image](https://user-images.githubusercontent.com/71666828/120891230-507fac00-c5bc-11eb-9549-e578e6d85f92.png)

Now head to the github page for this project and navigate to the stable branch of your choosing and click where the mouse is hovering in the following screenshot:

![image](https://i.imgur.com/dQUpXUi.png)

Now back to your Visual Studio Code window where you will enter the following command "git clone https://github.com/ARheault/GameAtlas.git".
Note, you can either copy paste it from here or type git clone and press control v to paste the value we copied in the previous step.

![image](https://i.imgur.com/Y6SuF1L.png)

Now you've cloned the project! Only three more steps!

First, enter the following command to make sure you're in the branch dedicated to local deployment.

"git checkout -b Local"

Now use cd to move into the directory of the repository.

Next enter npm i

Lastly you will cd into the the next level down at PersonalWebsite/PersonalWebsite and enter npm i again.

After this you should be able to enter "node server.js" and it will start the server locally!

The local server can be accessed using a web browser and navigating to http://localhost:8000/
