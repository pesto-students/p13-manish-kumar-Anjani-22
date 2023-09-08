function displayWindowProperties()
{
    console.log("window.navigator.userAgent : " + window.navigator.userAgent);
    console.log("window.screen.width : " + window.screen.width);
    console.log("window.screen.height : " + window.screen.height);
    console.log("window.location.href : " + window.location.href + " , window.location.pathname:  " + window.location.pathname);
    console.log("window.sessionStorage.displayWindowProperties : " + window.sessionStorage.displayWindowProperties);
    console.log("window.localStorage.displayWindowProperties : " + window.localStorage.displayWindowProperties);
    window.sessionStorage.setItem("nameId","John");
    console.log("window.sessionStorage.getItem(nameId) : " + window.sessionStorage.getItem("nameId"));
    window.localStorage.setItem("frindName","John")
    console.log("window.localStorage.getItem(frindName) : " + window.localStorage.getItem("frindName"));
}
