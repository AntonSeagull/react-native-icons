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

export const GiRss = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M27.906 27.28v91.44a365.765 365.765 0 0 1 365.75 365.78h91.438A457.207 457.207 0 0 0 27.906 27.28m0 154.157v88.813a214.234 214.234 0 0 1 214.22 214.25h88.843A303.063 303.063 0 0 0 27.905 181.437zM88.75 359.125a62.703 62.703 0 0 0-60.844 62.656 62.703 62.703 0 0 0 125.375 0 62.703 62.703 0 0 0-64.53-62.655z" />
      </G>
    </Svg>
  );
};