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

export const PiContactlessPaymentBold = (props: IconProps) => {
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
        <Path d="M152.58 66.35a130.61 130.61 0 0 1 0 123.3 12 12 0 1 1-21.17-11.3 106.7 106.7 0 0 0 0-100.7 12 12 0 1 1 21.16-11.3Zm-52.22 11.06a12 12 0 0 0-5 16.23 73 73 0 0 1 0 68.72 12 12 0 1 0 21.18 11.28 97 97 0 0 0 0-91.28 12 12 0 0 0-16.18-4.95M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84 84.09 84.09 0 0 0 84-84" />
      </G>
    </Svg>
  );
};