OUTPUTDIR = build

.PHONY: github

default: github

github: 
	ghp-import -n $(OUTPUTDIR)
	git push -f git@github.com:networkx/networkx.github.io.git gh-pages:master
