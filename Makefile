OUTPUTDIR = build

.PHONY: github

default: github

github: 
	ghp-import -n -c networkx.org $(OUTPUTDIR)
	git push -f git@github.com:networkx/networkx.github.io.git gh-pages:main
