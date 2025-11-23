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

export const SiWebdriverio = (props: IconProps) => {
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
        <Path d="M1.875 0A1.87 1.87 0 0 0 0 1.875v20.25A1.87 1.87 0 0 0 1.875 24h20.25A1.87 1.87 0 0 0 24 22.125V1.875A1.87 1.87 0 0 0 22.125 0Zm.375 6H3v12h-.75Zm7.085 0h.79L5.29 18h-.791Zm6.79 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 .75a5.25 5.25 0 1 0 .001 10.501 5.25 5.25 0 0 0-.001-10.501" />
      </G>
    </Svg>
  );
};