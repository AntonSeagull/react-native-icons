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
        "d": "M12 3a9 9 0 1 0 9 9"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 12a9 9 0 0 0 -9 -9",
        "opacity": ".5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 9v6l5 -3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
