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

export const PiTidalLogoLight = (props: IconProps) => {
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
        <Path d="m252.24 91.76-40-40a6 6 0 0 0-8.48 0L168 87.52l-35.76-35.76a6 6 0 0 0-8.48 0L88 87.52 52.24 51.76a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0L88 104.48 119.52 136l-35.76 35.76a6 6 0 0 0 0 8.48l40 40a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48L136.48 136 168 104.48l35.76 35.76a6 6 0 0 0 8.48 0l40-40a6 6 0 0 0 0-8.48M48 127.51 16.49 96 48 64.49 79.51 96Zm80 80L96.49 176 128 144.49 159.51 176Zm0-80L96.49 96 128 64.49 159.51 96Zm80 0L176.49 96 208 64.49 239.51 96Z" />
      </G>
    </Svg>
  );
};