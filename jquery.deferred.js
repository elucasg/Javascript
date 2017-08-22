function successCallback() {
    this.d.resolve(this.list);
}
 
function failCallback() {
    this.d.reject("something bad happened");
}
 
function getList(name) {
    var d = $.Deferred();
 
    var clientContext = SP.ClientContext.get_current();
    var list = clientContext.get_web().get_lists().getByTitle(name);
 
    var o = {d: d, list:list};
    clientContext.executeQueryAsync(Function.createDelegate(o, successCallback), Function.createDelegate(o, failCallback));
 
    return d.promise();
}
 
var p = getList("Documents");
p.done(function(result) {
    var list = result;
});
p.fail(function(result) {
    var error = result;
    console.log(error);
});
