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

export const IoArrowDownLeftBoxOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M123.636 269.236V90.546A42.545 42.545 0 0 1 166.182 48h255.273A42.546 42.546 0 0 1 464 90.545v255.273a42.54 42.54 0 0 1-42.545 42.546H242.764M48 331.636V464h132.364M296 216 48 464" />
      </G>
    </Svg>
  );
};