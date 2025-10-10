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
        "d": "M20.986 12.502a9 9 0 1 0 -5.973 7.98"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 7v5l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 16v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 22v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
