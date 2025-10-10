import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "class": "lucide lucide-file-bar-chart",
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
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14 2v4a2 2 0 0 0 2 2h4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 18v-2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 18v-4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 18v-6"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
