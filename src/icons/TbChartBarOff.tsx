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
        "d": "M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-10"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 11v-6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1 -1 -1v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M4 20h14"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M3 3l18 18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
