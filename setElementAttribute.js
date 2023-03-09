function setElementAttribute(elementRef, attributeName, valueOfAttribute) {
  if (valueOfAttribute) {
    elementRef.setAttribute(attributeName, `${valueOfAttribute}`);
  } else {
    elementRef.removeAttribute(attributeName);
  }
}
