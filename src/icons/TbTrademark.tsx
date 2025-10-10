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
        "d": "M4.5 9h5m-2.5 0v6"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M13 15v-6l3 4l3 -4v6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
