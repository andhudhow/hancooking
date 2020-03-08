export const scrollTop = () => {
  document.documentElement.style.height = "";
  document.body.style.height = "auto";
  document.documentElement.style.width = "auto";
  document.body.style.width = "auto";
  window.scrollTo(0,0);
}

export const removeScrollTop = () => {
  document.documentElement.style.height = "";
  document.body.style.height = "";
  document.documentElement.style.width = "";
  document.body.style.width = "";
}