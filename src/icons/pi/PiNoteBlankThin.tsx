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

export const PiNoteBlankThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h108.69a11.93 11.93 0 0 0 8.48-3.51l51.32-51.32a11.93 11.93 0 0 0 3.51-8.48V48a12 12 0 0 0-12-12M44 208V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4v108h-52a4 4 0 0 0-4 4v52H48a4 4 0 0 1-4-4m120-1.66V164h42.35Z" />
      </G>
    </Svg>
  );
};