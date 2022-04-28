function introduction(firstName = "Aki"){
  return(`Hi, my name is ${firstName}.`);
}

function introductionWithLanguage(name = "Aki", language = "Ember.js"){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name = "Aki", language = "JavaScript"){
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
