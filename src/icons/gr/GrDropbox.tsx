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

export const GrDropbox = (props: IconProps) => {
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
        <Path fill="#007EE5" fillRule="evenodd" d="M7.06 1 0 5.61l4.882 3.908L12 5.124zM0 13.428l7.06 4.61L12 13.914 4.882 9.52zm12 .486 4.94 4.124 7.06-4.61-4.882-3.91zM24 5.61 16.94 1 12 5.124l7.118 4.395zM12.014 14.8 7.06 18.913l-2.12-1.385v1.552l7.074 4.243 7.075-4.243v-1.552l-2.12 1.385z" />
      </G>
    </Svg>
  );
};