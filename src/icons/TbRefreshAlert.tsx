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
        "d": "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 9l0 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15l.01 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
