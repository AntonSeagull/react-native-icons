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
        "d": "M10 2v6.292a7 7 0 1 0 4 0V2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 15h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 2h7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
