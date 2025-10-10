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
        "d": "M15 12h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 12h.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
