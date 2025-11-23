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

export const CgBlock = (props: IconProps) => {
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
        <Path fill="currentColor" d="M8.465 14.121a1 1 0 1 0 1.414 1.415l5.657-5.657a1 1 0 1 0-1.415-1.415z" />
        <Path fill="currentColor" fillRule="evenodd" d="M6.343 17.657A8 8 0 1 0 17.657 6.343 8 8 0 0 0 6.343 17.657m9.9-1.414a6 6 0 1 1-8.486-8.485 6 6 0 0 1 8.486 8.485" clipRule="evenodd" />
      </G>
    </Svg>
  );
};