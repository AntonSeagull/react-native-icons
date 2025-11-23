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

export const CgDropInvert = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 1.136 5.636 7.5a9 9 0 0 0 7.227 15.323A9 9 0 0 0 18.364 7.5zM7.05 8.914 12 3.964v16.9a7 7 0 0 1-4.95-11.95" clipRule="evenodd" />
      </G>
    </Svg>
  );
};