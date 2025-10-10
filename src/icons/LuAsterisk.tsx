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
        "d": "M12 6v12"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.196 9 6.804 15"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m6.804 9 10.392 6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
