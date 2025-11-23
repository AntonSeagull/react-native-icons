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

export const PiWechatLogoFill = (props: IconProps) => {
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
        <Path d="M232.07 186.76a80 80 0 0 0-62.49-114.17 80 80 0 1 0-145.65 66.17l-7.27 24.71a16 16 0 0 0 19.87 19.87l24.71-7.27a79 79 0 0 0 25.19 7.35 80 80 0 0 0 108.33 40.65l24.71 7.27a16 16 0 0 0 19.87-19.87ZM132 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12m-52 0a80.3 80.3 0 0 0 1.3 14.3 63.5 63.5 0 0 1-15.49-5.85 8 8 0 0 0-6-.63L32 168l8.17-27.76a8 8 0 0 0-.63-6 64 64 0 0 1 112.14-61.81A80.12 80.12 0 0 0 80 152m108 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12" />
      </G>
    </Svg>
  );
};