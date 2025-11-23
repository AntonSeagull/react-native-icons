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

export const CiGrid31 = (props: IconProps) => {
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
        <Path d="M11.434 20.936H5.563a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 2.5-2.5h5.871a2.5 2.5 0 0 1 2.5 2.5v2.933a2.5 2.5 0 0 1-2.5 2.503M5.563 14a1.5 1.5 0 0 0-1.5 1.5v2.933a1.5 1.5 0 0 0 1.5 1.5h5.871a1.5 1.5 0 0 0 1.5-1.5V15.5a1.5 1.5 0 0 0-1.5-1.5ZM18.435 20.936a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 5 0v2.934a2.5 2.5 0 0 1-2.5 2.502m0-6.934a1.5 1.5 0 0 0-1.5 1.5v2.934a1.5 1.5 0 0 0 3 0V15.5a1.5 1.5 0 0 0-1.5-1.5ZM18.435 11H5.563a2.5 2.5 0 0 1-2.5-2.5V5.564a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5V8.5a2.5 2.5 0 0 1-2.5 2.5M5.563 4.064a1.5 1.5 0 0 0-1.5 1.5V8.5a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V5.564a1.5 1.5 0 0 0-1.5-1.5Z" />
      </G>
    </Svg>
  );
};