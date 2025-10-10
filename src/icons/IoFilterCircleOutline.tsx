import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "none",
        "stroke": "#000",
        "stroke-width": "32",
        "stroke-miterlimit": "10",
        "d": "M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
