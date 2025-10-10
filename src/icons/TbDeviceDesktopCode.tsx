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
        "d": "M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 20h4"
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
