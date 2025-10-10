import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
