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
        "d": "M13.5 16h-9.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v6.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 20h8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 16v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 22v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
