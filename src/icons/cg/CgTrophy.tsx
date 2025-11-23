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

export const CgTrophy = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M13 15.9a5 5 0 0 0 4-4.9V4H7v7a5 5 0 0 0 4 4.9V18H9v2h6v-2h-2zM9 6h6v5a3 3 0 1 1-6 0z" clipRule="evenodd" />
        <Path fill="currentColor" d="M18 6h2v5h-2zM6 6H4v5h2z" />
      </G>
    </Svg>
  );
};