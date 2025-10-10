import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 9v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
