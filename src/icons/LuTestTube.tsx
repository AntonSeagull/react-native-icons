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
        "d": "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 2h7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.5 16h-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
