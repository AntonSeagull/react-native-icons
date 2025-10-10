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
        "d": "M15.59 5.41 5.41 15.59"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 22s-4-9-1.5-11.5S22 12 22 12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
