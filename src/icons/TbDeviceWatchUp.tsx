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
        "d": "M12 18h-3a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18v3h3.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 6v-3h6v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 22v-6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M22 19l-3 -3l-3 3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
