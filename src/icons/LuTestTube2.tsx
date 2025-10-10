import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-test-tube-2",
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
        "d": "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m16 2 6 6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 16H4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
