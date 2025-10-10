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
        "d": "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
