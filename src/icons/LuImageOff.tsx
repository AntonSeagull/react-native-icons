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
        "d": "M10.41 10.41a2 2 0 1 1-2.83-2.83"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 15V5a2 2 0 0 0-2-2H9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
