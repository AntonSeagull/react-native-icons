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
        "d": "M12 3l0 18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 7l0 10l5 0l-5 -10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 7l0 10l-5 0l5 -10"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
