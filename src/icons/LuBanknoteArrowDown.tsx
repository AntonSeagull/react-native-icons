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
        "d": "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m16 19 3 3 3-3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 12h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 12h.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
