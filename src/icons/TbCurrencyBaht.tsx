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
        "d": "M8 6h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 12h5a3 3 0 0 1 3 3v.143a2.857 2.857 0 0 1 -2.857 2.857h-5.143"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 6v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 4v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 18v2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
