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
        "d": "M12 5v.5m0 3v1.5m0 3v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 15l-4 4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 15l4 4"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
