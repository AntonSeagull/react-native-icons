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

export const TfiBell = (props: IconProps) => {
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
        <Path d="M15.312 14.125c-.014-.013-1.312-1.294-1.312-3.21V7.623C14 4.522 11.532 2 8.5 2S3 4.522 3 7.623v3.292c0 1.861-1.306 3.203-1.318 3.216l-.843.853h15.357zm-12.26-.141c.444-.692.948-1.764.948-3.069V7.623C4 5.074 6.019 3 8.5 3S13 5.074 13 7.623v3.292c0 1.32.495 2.383.938 3.069zM9 2H8V1h1zm0 13h1c0 .827-.673 1.5-1.5 1.5S7 15.827 7 15h1a.5.5 0 0 0 1 0" />
      </G>
    </Svg>
  );
};