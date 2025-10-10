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
        "d": "M17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M7 19h-2a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
