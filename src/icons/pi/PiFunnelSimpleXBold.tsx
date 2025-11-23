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

export const PiFunnelSimpleXBold = (props: IconProps) => {
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
        <Path d="M192 148H64a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24m40-72H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-104 96h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m96.49-4.49a12 12 0 0 0-17 0L192 183l-15.51-15.52a12 12 0 0 0-17 17L175 200l-15.52 15.51a12 12 0 0 0 17 17L192 217l15.51 15.52a12 12 0 0 0 17-17L209 200l15.52-15.51a12 12 0 0 0-.03-16.98" />
      </G>
    </Svg>
  );
};