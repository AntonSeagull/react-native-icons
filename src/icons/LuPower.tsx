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
        "d": "M12 2v10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M18.4 6.6a9 9 0 1 1-12.77.04"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
