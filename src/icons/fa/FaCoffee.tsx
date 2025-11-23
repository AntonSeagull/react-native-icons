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

export const FaCoffee = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 640 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 320, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96M512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64" />
      </G>
    </Svg>
  );
};