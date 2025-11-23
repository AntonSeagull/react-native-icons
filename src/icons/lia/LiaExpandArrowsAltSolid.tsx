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

export const LiaExpandArrowsAltSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 4v9h2V7.438L14.563 16 6 24.563V19H4v9h9v-2H7.438L16 17.438 24.563 26H19v2h9v-9h-2v5.563L17.438 16 26 7.438V13h2V4h-9v2h5.563L16 14.563 7.438 6H13V4Z" />
      </G>
    </Svg>
  );
};