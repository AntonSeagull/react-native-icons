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

export const PiRadioThin = (props: IconProps) => {
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
        <Path d="M100 168a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4m-4-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m132-52v112a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V72a4 4 0 0 1 2.85-3.81l160-48a4 4 0 0 1 2.3 7.66L59.25 68H216a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H36v116a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Zm-24 56a36 36 0 1 1-36-36 36 36 0 0 1 36 36m-8 0a28 28 0 1 0-28 28 28 28 0 0 0 28-28m-92-36H64a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};