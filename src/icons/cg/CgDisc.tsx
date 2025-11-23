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

export const CgDisc = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0" clipRule="evenodd" />
        <Path fill="currentColor" d="M5 12a7 7 0 0 1 7-7v2a5 5 0 0 0-5 5zM12 17a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7z" />
        <Path fill="currentColor" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};