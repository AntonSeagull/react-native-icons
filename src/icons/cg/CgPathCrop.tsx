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

export const CgPathCrop = (props: IconProps) => {
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
        <Path stroke="currentColor" strokeWidth={2} d="M6 6h8v8H6z" opacity={0.5} />
        <Path fill="currentColor" fillRule="evenodd" d="M9 9h10v10H9zm6 2h2v6h-6v-2h4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};