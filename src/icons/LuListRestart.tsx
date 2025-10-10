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
        "d": "M21 5H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 12H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 10v4h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
