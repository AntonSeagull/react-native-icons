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

export const TfiCalendar = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M14 2V1h-3v1H6V1H3v1H0v15h17V2zm-2 0h1v2h-1zM4 2h1v2H4zm12 14H1V7.079h15zM1 6.079V3h2v2h3V3h5v2h3V3h2v3.079z" />
      </G>
    </Svg>
  );
};