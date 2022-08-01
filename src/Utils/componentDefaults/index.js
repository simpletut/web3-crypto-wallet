function formatClassNameProp(className) {
  if (typeof className === 'string') {
    return [className];
  }
  else if (Array.isArray(className)) {
    return className;
  }

  return null;
}

const includeClassNames = (classNames, traits=[]) => {
  classNames.forEach(className => traits.push(className));
}

const css = (arr=[]) => {
  if (!Array.isArray(arr) || arr.length < 1) return '';
  return arr.join(' ');
}

export {
  css,
  formatClassNameProp,
  includeClassNames,
};
