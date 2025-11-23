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

export const PiChatSlashThin = (props: IconProps) => {
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
        <Path d="M51 37.31a4 4 0 0 0-6 5.38L53.5 52H40a12 12 0 0 0-12 12v160a11.89 11.89 0 0 0 6.93 10.88A12.1 12.1 0 0 0 40 236a12 12 0 0 0 7.74-2.87L81.49 204h110.19L205 218.69a4 4 0 0 0 3 1.31 4 4 0 0 0 3-6.69ZM80 196a4 4 0 0 0-2.61 1l-34.82 30a4 4 0 0 1-6.57-3V64a4 4 0 0 1 4-4h20.78l123.63 136ZM228 64v122a4 4 0 0 1-8 0V64a4 4 0 0 0-4-4H105.79a4 4 0 0 1 0-8H216a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};