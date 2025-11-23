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

export const SiTransportforireland = (props: IconProps) => {
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
        <Path d="M0 0v12c0 6.62 5.38 12 12 12h12V11.978h-.022c0-6.62-5.38-11.978-12-11.978zm3.376 8.145h6.337v1.546h-2.33v6.12H5.706v-6.12h-2.33zm8.014 0h5.837V9.67h-4.138v1.633h3.659v1.546h-3.659v2.962H11.39zm7.535 0h1.678v7.666h-1.678Z" />
      </G>
    </Svg>
  );
};