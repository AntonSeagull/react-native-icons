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
        "d": "M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 15l3 -3l3 3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12l0 9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
