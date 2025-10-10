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
        "d": "M16 16v-8h2a2 2 0 1 1 0 4h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 8v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 8h4l-4 8h4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
