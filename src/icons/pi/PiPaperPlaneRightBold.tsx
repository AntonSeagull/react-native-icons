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

export const PiPaperPlaneRightBold = (props: IconProps) => {
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
        <Path d="M233.86 110.48 65.8 14.58a20 20 0 0 0-28.65 24.06L67.33 128l-30.18 89.36A20 20 0 0 0 56 244a20.1 20.1 0 0 0 9.81-2.58l.09-.06 168-96.07a20 20 0 0 0 0-34.81ZM63.19 215.26 88.61 140H144a12 12 0 0 0 0-24H88.61L63.18 40.72l152.76 87.17Z" />
      </G>
    </Svg>
  );
};