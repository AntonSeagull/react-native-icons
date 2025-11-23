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

export const PiPushPinSimpleLight = (props: IconProps) => {
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
        <Path d="M216 170h-11L183.15 46H192a6 6 0 0 0 0-12H64a6 6 0 0 0 0 12h8.85L51 170H40a6 6 0 0 0 0 12h82v58a6 6 0 0 0 12 0v-58h82a6 6 0 0 0 0-12M85 46h86l21.88 124H63.15Z" />
      </G>
    </Svg>
  );
};