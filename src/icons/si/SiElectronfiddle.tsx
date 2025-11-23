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

export const SiElectronfiddle = (props: IconProps) => {
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
        <Path d="M8 0c-.631 0-1.143.512-1.143 1.143V15A4.573 4.573 0 0 0 8 24a4.571 4.571 0 0 0 1.143-8.999v-4.715h4.735c.54 0 .98-.512.98-1.143S14.417 8 13.877 8H9.143V2.286h10.286a1.143 1.143 0 1 0 0-2.286Zm0 17.143a2.286 2.286 0 1 1 0 4.571 2.286 2.286 0 0 1 0-4.571" />
      </G>
    </Svg>
  );
};