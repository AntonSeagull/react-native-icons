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

export const TfiCar = (props: IconProps) => {
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
        <Path d="m17 9.984-1.958.002L12.991 6H5.042L2.074 9.999 0 10v4.977h2.002L2 15c0 1.103.897 2 2 2s2-.897 2-2l-.002-.023h5.005q-.002.011-.003.023c0 1.103.897 2 2 2s2-.897 2-2l-.002-.023H17zm-3.082.003-3.897.004V7h2.36zM5.544 7h3.477v2.992l-5.701.005zM4 16c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1m3-2.023h-1.291C14.359 13.395 13.728 13 13 13s-1.359.395-1.709.977H5.709C5.359 13.395 4.728 13 4 13s-1.359.395-1.709.977H1V11l15-.015z" />
      </G>
    </Svg>
  );
};