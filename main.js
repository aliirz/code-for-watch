var brigades = {}
_.forEach(window._brigades, function(brigade){
  brigades[brigade.id] = m.prop(brigade)
})
domready(function () {
  
})
