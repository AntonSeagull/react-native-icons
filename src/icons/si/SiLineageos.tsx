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

export const SiLineageos = (props: IconProps) => {
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
        <Path d="M21.645 12.057a2.4 2.4 0 0 0-1.803.8l-.138-.054a18 18 0 0 0-2.867-.86 4.808 4.808 0 0 0-9.615 0H7.09a18 18 0 0 0-2.765.836l-.138.054a2.404 2.404 0 1 0 .559 1.07 16.6 16.6 0 0 1 2.578-.776 4.808 4.808 0 0 0 9.357 0 16.6 16.6 0 0 1 2.578.77 2.404 2.404 0 1 0 2.386-1.84M2.414 15.663a1.202 1.202 0 1 1 1.202-1.202 1.2 1.2 0 0 1-1.202 1.202m9.616 0a3.606 3.606 0 1 1 3.605-3.606 3.606 3.606 0 0 1-3.605 3.606m9.615 0a1.202 1.202 0 1 1 1.202-1.202 1.2 1.2 0 0 1-1.202 1.202m-7.812-3.606a1.803 1.803 0 1 1-1.803-1.803 1.803 1.803 0 0 1 1.803 1.803" />
      </G>
    </Svg>
  );
};