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
        "d": "M3 3v18h18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 18v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 16v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 11c6 0 5 -5 9 -5s3 5 9 5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
