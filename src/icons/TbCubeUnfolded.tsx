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
        "d": "M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 15v-5h5v5h5v-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
