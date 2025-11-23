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

export const GrStatusWarningSmall = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 12 12"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 6, 6)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" stroke="#000" strokeLinejoin="round" d="m6 1 5 9H1z" />
      </G>
    </Svg>
  );
};