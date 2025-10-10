import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "16",
    "height": "16",
    "fill": "currentColor",
    "class": "bi bi-dash",
    "viewBox": "0 0 16 16"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
