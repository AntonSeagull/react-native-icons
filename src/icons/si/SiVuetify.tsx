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

export const SiVuetify = (props: IconProps) => {
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
        <Path d="M6.312 12.564 12.636 1.2H0zM14.94 1.2 7.464 14.64 12 22.8 24 1.2zm4.98 2.4L12 17.856l-1.788-3.216L16.344 3.6zM6.312 7.62 4.08 3.6h4.476z" />
      </G>
    </Svg>
  );
};