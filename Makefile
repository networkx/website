# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
BUILDDIR      = _build
SOURCEDIR     = .
OUTPUTDIR     = $(BUILDDIR)/html

# Internal variables.
ALLSPHINXOPTS   = -d $(BUILDDIR)/doctrees $(SPHINXOPTS) $(SOURCEDIR)

.PHONY: help clean html linkcheck doctest github

default: html

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  html     : make standalone HTML files"
	@echo "  linkcheck: check all external links for integrity"
	@echo "  doctest  : run all doctests embedded in the documentation (if enabled)"
	@echo "  github   : upload the web site via ghp-import"

clean:
	-rm -rf $(BUILDDIR)/*
	-rm -f *~

html: clean
	$(SPHINXBUILD) -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."

linkcheck: site
	$(SPHINXBUILD) -b linkcheck $(ALLSPHINXOPTS) $(BUILDDIR)/linkcheck
	@echo
	@echo "Link check complete; look for any errors in the above output " \
	      "or in $(BUILDDIR)/linkcheck/output.txt."

doctest:
	$(SPHINXBUILD) -b doctest $(ALLSPHINXOPTS) $(BUILDDIR)/doctest
	@echo "Testing of doctests in the sources finished, look at the " \
	      "results in $(BUILDDIR)/doctest/output.txt."

github: html
	ghp-import -n $(OUTPUTDIR)
	git push -f git@github.com:networkx/networkx.github.io.git gh-pages:master
