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

export const PiPrinterBold = (props: IconProps) => {
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
        <Path d="M214.67 68H204V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v28H41.33C25.16 68 12 80.56 12 96v80a12 12 0 0 0 12 12h28v28a12 12 0 0 0 12 12h128a12 12 0 0 0 12-12v-28h28a12 12 0 0 0 12-12V96c0-15.44-13.16-28-29.33-28M76 52h104v16H76Zm104 152H76v-32h104Zm40-40h-16v-4a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v4H36V96c0-2.17 2.44-4 5.33-4h173.34c2.89 0 5.33 1.83 5.33 4Zm-16-44a16 16 0 1 1-16-16 16 16 0 0 1 16 16" />
      </G>
    </Svg>
  );
};