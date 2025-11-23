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

export const PiCurrencyNgnDuotone = (props: IconProps) => {
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
        <Path d="M192 112v98l-51.51-66H64V46l51.51 66Z" opacity={0.2} />
        <Path d="M216 136h-16v-16h16a8 8 0 0 0 0-16h-16V46a8 8 0 0 0-16 0v58h-64.58L70.31 41.08A8 8 0 0 0 56 46v58H40a8 8 0 0 0 0 16h16v16H40a8 8 0 0 0 0 16h16v58a8 8 0 0 0 16 0v-58h64.58l49.11 62.92A8 8 0 0 0 192 218a7.8 7.8 0 0 0 2.6-.44A8 8 0 0 0 200 210v-58h16a8 8 0 0 0 0-16m-32-16v16h-39.61l-12.49-16ZM72 69.25 99.12 104H72ZM72 136v-16h39.61l12.49 16Zm112 50.75L156.88 152H184Z" />
      </G>
    </Svg>
  );
};