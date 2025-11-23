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

export const CgCopy = (props: IconProps) => {
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
        <Path fill="currentColor" d="M13 7H7V5h6zM13 11H7V9h6zM7 15h6v-2H7z" />
        <Path fill="currentColor" fillRule="evenodd" d="M3 19V1h14v4h4v18H7v-4zm12-2V3H5v14zm2-10v12H9v2h10V7z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};