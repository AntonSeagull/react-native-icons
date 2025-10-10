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
        "d": "M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 13l5 7"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
