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

export const TfiControlShuffle = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m8.94 6.871 1.081-1.34-.004-.003A4.5 4.5 0 0 1 13.395 4h1.898l-1.646-1.646.707-.707L17.207 4.5l-2.854 2.854-.707-.707L15.293 5h-1.898c-.989 0-1.931.425-2.595 1.159L9.72 7.498zm-3.089 3.825-.011-.008A3.48 3.48 0 0 1 3.107 12H0v1h3.107a4.48 4.48 0 0 0 3.503-1.676l.011.009.941-1.166-.777-.629zm7.795-.342L15.293 12h-1.898a3.48 3.48 0 0 1-2.7-1.281L6.426 5.454l-.01.008A4.5 4.5 0 0 0 3.107 4H0v1h3.107c.998 0 1.948.428 2.611 1.17l4.161 5.132-.005.004A4.49 4.49 0 0 0 13.394 13h1.898l-1.646 1.646.707.707 2.854-2.854-2.854-2.854z" />
      </G>
    </Svg>
  );
};