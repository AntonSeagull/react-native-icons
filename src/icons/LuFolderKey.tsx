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
        "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m22 14-4.5 4.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m21 15 1 1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
