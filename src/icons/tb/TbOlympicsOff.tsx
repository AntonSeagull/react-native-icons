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

export const TbOlympicsOff = (props: IconProps) => {
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
        <Path d="M6 6a3 3 0 1 0 3 3M15 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M9 9a3 3 0 0 0 3 3m2.566-1.445a3 3 0 0 0-4.135-4.113M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
        <Path d="M12.878 12.88a3 3 0 0 0 4.239 4.247m.586-3.431a3 3 0 0 0-1.43-1.414M3 3l18 18" />
      </G>
    </Svg>
  );
};