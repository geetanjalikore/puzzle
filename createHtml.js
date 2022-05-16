const openTag = function (tag, attributes = '') {
  return '<' + tag + ' ' + attributes + '>';
};

const closeTag = function (tag) {
  return '</' + tag + '>';
};

const element = function (tag, content, attributes) {
  return openTag(tag, attributes) + content + closeTag(tag);
};

const style = (styles) => {
  const properties = Object.entries(styles).map(([key, val]) => {
    return key + ':' + val;
  }).join(';');
  return 'style="' + properties + '"';
};

const attribute = (name, value) => name + '="' + value + '"';

exports.element = element;
exports.style = style;
exports.attribute = attribute;
