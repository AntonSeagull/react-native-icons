import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const PiBankLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M24 102h26v68H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12h-18v-68h26a6 6 0 0 0 3.14-11.11l-104-64a6 6 0 0 0-6.28 0l-104 64A6 6 0 0 0 24 102m38 0h36v68H62Zm84 0v68h-36v-68Zm48 68h-36v-68h36ZM128 39l82.8 51H45.2Zm118 169a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h224a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};