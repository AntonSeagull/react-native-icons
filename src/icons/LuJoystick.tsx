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
        "d": "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 15v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15V9"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
