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
        "d": "M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 14v7"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9 18h3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
