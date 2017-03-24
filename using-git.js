





/*
lets learn to deploy our projects to live serevrs instead of local hosting
1- Download and install git(next next)
    https://git-scm.com/
2-after installation make sure that the git can be accessed from cmd
    #git --version
3- open the cmd in our project to be uploaded to get
    #git init
4- ensure that a hidden folder (.get) is created 
    #dir /ah
 - this folder not to be changed manually
 - git is responsible for keeping track of the changes to our project but by default it doesnt actually track any of our files
 - we should tell get about the files we want to keep track of
5- to show the status of files want to keep track of
    #git status
 - this command will look for (.get) folder and if not found -> Error
6- the files/folders we want to keep track of are:
    public
    views
    package.json
    server.js
 - the node_modules folder not to be tracked as the modules are installed using npm according to the npm version get installed and the operating system we're using
    -This folder easily generated using ( #npm install ) command depending on package.json file
7- lets add the files we want to keep track of:
    #git add package.json
    #git status //to show if the file added or not

    #git add public/
    #git add views/
    #git add server.js
8- we can add node_modules folder but let the git to ignore it:
    - make file called (.gitignore) and inside it the file/folder to be added but ignored. In our case, we'll write inside it:
        node_modules/
        server.log
    -save the file and try 
        #git status
        will notice the folder(node_modules) and the file (server.log) are hidden from the Untracked files
9- add .gitignore file
    #git add .gitignore
10- to save(commit) these file to the git repository
    #git commit -m "initial commit" //Dont use single qoute ( ' )
    - m -> message
        it is very important to use these messages so if some one digging into the commoit history know the changes happened to the project
By that we have a local git repository. Lets move to the nect tutorial to upload it on live server


*/