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

export const RxCrosshair2 = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v1.307A5.624 5.624 0 0 1 13.007 7H14.5a.5.5 0 0 1 0 1h-1.511A5.625 5.625 0 0 1 8 12.989V14.5a.5.5 0 0 1-1 0v-1.493A5.624 5.624 0 0 1 1.807 8H.5a.5.5 0 0 1 0-1h1.289A5.624 5.624 0 0 1 7 1.789V.5a.5.5 0 0 1 .5-.5M8 12.032V9.5a.5.5 0 0 0-1 0v2.554A4.675 4.675 0 0 1 2.763 8H5.5a.5.5 0 0 0 0-1H2.742A4.674 4.674 0 0 1 7 2.742V5.5a.5.5 0 0 0 1 0V2.763A4.675 4.675 0 0 1 12.054 7H9.5a.5.5 0 0 0 0 1h2.532A4.675 4.675 0 0 1 8 12.032" clipRule="evenodd" />
      </G>
    </Svg>
  );
};