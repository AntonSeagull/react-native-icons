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
        "d": "M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8"
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
        "d": "M22 19l-3 3l-3 -3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
