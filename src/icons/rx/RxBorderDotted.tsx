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

export const RxBorderDotted = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M1.5 6.625a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m4 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75m3.125.875a.875.875 0 1 1 1.75 0 .875.875 0 0 1-1.75 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};