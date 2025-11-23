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

export const PiSmileyMelting = (props: IconProps) => {
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
        <Path d="M176 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12m-48-48a12 12 0 1 0-12 12 12 12 0 0 0 12-12m73-38A104 104 0 0 0 50.48 197.33a8 8 0 1 0 11.92-10.67 88 88 0 1 1 131.19 0 8 8 0 0 0 11.93 10.67A104 104 0 0 0 201 54m-49 114h-16c-21.74 0-48-17.84-48-40a41.3 41.3 0 0 1 .55-6.68 8 8 0 1 0-15.78-2.64A57 57 0 0 0 72 128c0 14.88 7.46 29.13 21 40.15 12.4 10.07 28.07 15.85 43 15.85h16a8 8 0 0 1 0 16H96a24 24 0 0 0 0 48 8 8 0 0 0 0-16 8 8 0 0 1 0-16h56a24 24 0 0 0 0-48" />
      </G>
    </Svg>
  );
};