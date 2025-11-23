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

export const TbWhirl = (props: IconProps) => {
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
        <Path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0" />
        <Path d="M12 21c-3.314 0-6-2.462-6-5.5S8.686 10 12 10" />
        <Path d="M21 12c0 3.314-2.462 6-5.5 6S10 15.314 10 12" />
        <Path d="M12 14c3.314 0 6-2.462 6-5.5S15.314 3 12 3" />
        <Path d="M14 12c0-3.314-2.462-6-5.5-6S3 8.686 3 12" />
      </G>
    </Svg>
  );
};