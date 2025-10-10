import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "version": "1.1",
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "width": "22",
    "height": "16",
    "viewBox": "0 0 22 16"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M0 3h14v3h-14v-3zM0 7h14v3h-14v-3zM0 11h14v3h-14v-3z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#000000",
        "d": "M15.5 7l3 3 3-3z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
