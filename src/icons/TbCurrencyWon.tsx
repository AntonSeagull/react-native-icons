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
        "d": "M4 6l3.245 11.358a.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a.85 .85 0 0 0 1.624 -.035l3.245 -11.358"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 10h-18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 14h-18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
