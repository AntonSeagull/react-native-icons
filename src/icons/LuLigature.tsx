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
        "d": "M14 12h2v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 20h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 12h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 20h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 20V8a4 4 0 0 1 7.464-2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
