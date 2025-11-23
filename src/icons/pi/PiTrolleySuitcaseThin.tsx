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

export const PiTrolleySuitcaseThin = (props: IconProps) => {
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
        <Path d="M88 156h128a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v20H88a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12m44-116a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v20h-40ZM84 72a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v72a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm0 152a12 12 0 1 1-12-12 12 12 0 0 1 12 12m144 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12m16-40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h12V75.31a4 4 0 0 0-1.17-2.83L21.17 50.83a4 4 0 0 1 5.66-5.66l21.66 21.66A12 12 0 0 1 52 75.31V180h188a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};