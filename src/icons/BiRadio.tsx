import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "m20.25 5.025-7.898-2.962-.703 1.873L14.484 5H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.018-.767-1.85-1.75-1.975zM4 19v-7h16v-2H4V7h16l.001 12H4z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 15h4.999v2H6z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
