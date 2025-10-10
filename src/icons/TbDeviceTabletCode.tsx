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
        "d": "M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12.344 16.06a1 1 0 0 0 -1.07 1.627"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 21l2 -2l-2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 17l-2 2l2 2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
