var brigades = {}
_.forEach(window._brigades, function(brigade){
  brigade.github = brigade.projects_list_url.split('github.com/')[1]
  brigade.loaded = m.prop(false)
  brigades[brigade.id] = m.prop(brigade)
})
domready(function () {
  
})
