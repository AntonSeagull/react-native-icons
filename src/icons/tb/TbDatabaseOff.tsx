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

export const TbDatabaseOff = (props: IconProps) => {
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
        <Path d="M12.983 8.978C16.938 8.796 20 7.532 20 6c0-1.657-3.582-3-8-3-1.661 0-3.204.19-4.483.515M4.734 4.743C4.263 5.125 4 5.551 4 6c0 1.22 1.944 2.271 4.734 2.74" />
        <Path d="M4 6v6c0 1.657 3.582 3 8 3 .986 0 1.93-.067 2.802-.19m3.187-.82C19.24 13.46 20 12.762 20 12V6" />
        <Path d="M4 12v6c0 1.657 3.582 3 8 3 3.217 0 5.991-.712 7.261-1.74M20 16v-4M3 3l18 18" />
      </G>
    </Svg>
  );
};