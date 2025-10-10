import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "16",
    "height": "16",
    "fill": "currentColor",
    "class": "bi bi-music-note-beamed",
    "viewBox": "0 0 16 16"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill-rule": "evenodd",
        "d": "M14 11V2h1v9zM6 3v10H5V3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
