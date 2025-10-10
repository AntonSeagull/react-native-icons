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
        "d": "M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 7a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 20h-6a3 3 0 0 1 -3 -3v-2a3 3 0 0 1 3 -3h10.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 8v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 16v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
