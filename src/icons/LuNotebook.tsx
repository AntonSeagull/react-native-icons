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
        "d": "M2 6h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 10h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 14h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 18h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 2v20"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
