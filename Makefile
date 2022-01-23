update:
	git checkout .
	git checkout main
	git pull
	npm ci

clean: 
	git reset --hard
	git clean -fdx
	git pull
	npm ci
