# challenge-template
Template for official code-check contents.

Every challenge should have following files
1. README.md - For rules please refer [this](https://github.com/code-check/docs/blob/master/readme_rules.md) document 
2. [README_ja.md](README_ja.md)
3. [.gitignore](.gitignore)
4. [challenge.json](challenge.json) with all the options
5. [codecheck.yml](codecheck.yml) - Please refer [this](https://github.com/code-check/codecheck/blob/master/README.md) for options in codecheck.yml file
6. answer.md for user's point of view while solving the challenge.


- Run following command in your root folder to create db.sqlite database from [create.sql](sql/create.sql) file 'sqlite3 sql/db.sqlite < sql/create.sql'