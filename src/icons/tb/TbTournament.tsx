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

export const TbTournament = (props: IconProps) => {
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
        <Path d="M2 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 20a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 12h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6" />
        <Path d="M6 4h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2M14 10h4" />
      </G>
    </Svg>
  );
};