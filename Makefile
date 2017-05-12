.PHONY: run publish

run:
	gitbook serve
publish:
	git add .
	git ci -a -m "update data"
	git pull origin master
	git push origin master
	ghp-import _book -p
