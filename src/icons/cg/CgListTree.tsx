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

export const CgListTree = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M9 1H1v8h8V6h2v14h4v3h8v-8h-8v3h-2V6h2v3h8V1h-8v3H9zm12 2h-4v4h4zm-4 14h4v4h-4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};