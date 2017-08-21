$(document).ready(function () {
    var scriptbase = _spPageContextInfo.webServerRelativeUrl + "/_layouts/15/";
    $.getScript(scriptbase + "SP.Runtime.js", function () {
        $.getScript(scriptbase + "SP.js", function () {
            $.getScript(scriptbase + "SP.Taxonomy.js", GetTermsFromTaxonomyStore);
        });
    });
});

function GetTermsFromTaxonomyStore() {

    var context = SP.ClientContext.get_current();
    var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    var termStore = taxSession.getDefaultSiteCollectionTermStore();

    var termsetName = "Owners";
    var termSets = termStore.getTermSetsByName(termsetName, 1033);
    var termSet = termSets.getByName(termsetName);
    var terms = termSet.getAllTerms();

    context.load(terms);
    context.executeQueryAsync(function () {
        var termEnumerator = terms.getEnumerator();
        while (termEnumerator.moveNext()) {
            var currentTerm = termEnumerator.get_current();
            var termName = currentTerm.get_name();
        }
    }, function (sender, args) {
        console.log(args.get_message());
    });
}
