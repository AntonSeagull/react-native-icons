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

export const TbIkosaedr = (props: IconProps) => {
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
        <Path d="M21 8.007v7.986a2 2 0 0 1-1.006 1.735l-7 4.007a2 2 0 0 1-1.988 0l-7-4.007A2 2 0 0 1 3 15.993V8.007a2 2 0 0 1 1.006-1.735l7-4.007a2 2 0 0 1 1.988 0l7 4.007A2 2 0 0 1 21 8.007M3.29 6.97 7.5 9M20.71 6.97 16.5 9M20.7 17H3.3" />
        <Path d="M11.76 2.03 7.5 9l-4.3 7.84M12.24 2.03Q15.037 6.47 16.5 9t4.3 7.84" />
        <Path d="M12 17 7.5 9h9zM12 17v5" />
      </G>
    </Svg>
  );
};