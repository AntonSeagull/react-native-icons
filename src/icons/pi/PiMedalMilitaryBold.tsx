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

export const PiMedalMilitaryBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M207 36H49a21 21 0 0 0-21 21v49.21a21 21 0 0 0 12.31 19.11l56 25.47a52 52 0 1 0 63.32 0l56-25.47A21 21 0 0 0 228 106.21V57a21 21 0 0 0-21-21m-79 102.82-28-12.73V60h56v66.09ZM52 60h24v55.18l-24-10.91Zm76 160a28 28 0 1 1 28-28 28 28 0 0 1-28 28m76-115.73-24 10.91V60h24Z" />
      </G>
    </Svg>
  );
};