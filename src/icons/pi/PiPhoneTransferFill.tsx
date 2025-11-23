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

export const PiPhoneTransferFill = (props: IconProps) => {
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
        <Path d="M136 72a8 8 0 0 1 8-8h52.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L196.69 80H144a8 8 0 0 1-8-8m78.36 94.46-47.11-21.11-.11-.06a16 16 0 0 0-15.18 1.4 8 8 0 0 0-.75.56L126.87 168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L89.54 41.64a16 16 0 0 0-16.62-9.51A56.24 56.24 0 0 0 24 88c0 79.4 64.6 144 144 144a56.24 56.24 0 0 0 55.87-48.92 16 16 0 0 0-9.51-16.62" />
      </G>
    </Svg>
  );
};