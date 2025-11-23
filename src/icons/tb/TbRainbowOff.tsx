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

export const TbRainbowOff = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M22 17c0-5.523-4.477-10-10-10q-.462 0-.914.041m-3.208.845A10 10 0 0 0 2 17M11.088 11.069A6 6 0 0 0 6 17M14 17a2 2 0 1 0-4 0M3 3l18 18" />
      </G>
    </Svg>
  );
};