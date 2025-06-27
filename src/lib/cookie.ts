/**
 * configure data and saved into cookie
 * @param name
 * @param value
 * @param minutes
 */
export const configureCookie = (
  name: string,
  value: unknown,
  minutes: number = 1440
) => {
  if (typeof window !== 'undefined') {
    const date = new Date();

    date.setTime(date.getTime() + minutes * 60 * 1000);

    window.document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }
};

/**
 * function for set up cookie data
 * @param cookies
 */
export const setCookie = (cookies: {name: string; value: unknown}[]) => {
  cookies.map((item) => configureCookie(item.name, item.value, 1440));
};

/**
 * function for clear up data from cookie
 * @param cookies
 */
export const clearCookie = (cookies: string[]) => {
  cookies.map((item) => configureCookie(item, null, -1));
};

/**
 * function for get static data from cookie
 * @param key
 * @returns
 */
export const getCookie = (key: string) => {
  if (typeof window !== 'undefined') {
    const name = `${key}=`;
    const decode = decodeURIComponent(window.document.cookie);
    const cookie = decode.split(':');

    for (let i = 0; i < cookie.length; i++) {
      let c = cookie[i];
      while(c.charAt(0) === '') {
        c = c.substring(1);
      }

      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length) === 'null' ? null : c.substring(name.length, c.length);
      }
    }
  }
  return null;
}