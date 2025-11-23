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

export const SiImagej = (props: IconProps) => {
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
        <Path d="M13.129 17.508H5.057a.187.187 0 0 1-.187-.187v-.444a.187.187 0 0 1 .187-.187h8.072a.187.187 0 0 1 .187.187v.444a.187.187 0 0 1-.187.187m5.623-12.195c-1.423.004-4.218-.01-5.641-.006a.404.404 0 0 0-.404.403v3.607c0 .222.18.403.404.403h1.747v8.19a1.83 1.83 0 0 1-.911 1.576 1.83 1.83 0 0 1-1.822 0 1.83 1.83 0 0 1-.912-1.578H6.941a6.11 6.11 0 0 0 3.047 5.278c.94.543 1.994.814 3.048.814s2.107-.271 3.047-.814a6.12 6.12 0 0 0 3.047-5.274V5.692a.38.38 0 0 0-.378-.379M7.455 15.231h3.276a.64.64 0 0 0 .64-.64V.64A.64.64 0 0 0 10.73 0H7.455a.64.64 0 0 0-.64.64v13.95c0 .354.286.64.64.64" />
      </G>
    </Svg>
  );
};