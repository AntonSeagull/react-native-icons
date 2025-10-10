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
        "d": "M4 10h16"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.5 4.5l11 11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.5 15.5l11 -11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 10v-8"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 15v7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
