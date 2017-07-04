import _ from 'lodash'
import $ from 'jquery'
import './jack.less'

function component() {
  var $div = $('<div/>')

  $div.html( _.join(['Hello', 'Jirengu'], ' ') )

  return $div
}

$(document.body).append(component())
