


## ✅ Authenticate github Account from  VSCode


- brew install gh
- gh auth login



## ✅ Create github Repo from Vs Code

- gh repo create  <!-- The follow promps -->





## ✅  Example from scratch: 

mkdir my-project
cd todo-today
git init
echo "# My Project" > README.md
git add .
git commit -m "Initial commit"
gh repo create my-project --public --source=. --remote=origin --push


gh repo create todo-today --public --source=. 
--remote=origin --push