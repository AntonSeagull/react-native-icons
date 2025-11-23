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

export const RiGalleryLine = (props: IconProps) => {
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
        <Path d="M20 13c-1.678 0-3.249.46-4.593 1.259A15 15 0 0 1 18.147 19H20zm-3.996 6C14.044 14.302 9.408 11 4 11v8zM4 9c3.83 0 7.323 1.435 9.974 3.796A10.95 10.95 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4zm14-8v4h-8V3h6V1zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
      </G>
    </Svg>
  );
};