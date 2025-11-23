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

export const PiPentagonDuotone = (props: IconProps) => {
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
        <Path d="m223.61 102.83-32 107.62A8 8 0 0 1 184 216H72a8 8 0 0 1-7.62-5.55l-32-107.62a8 8 0 0 1 2.88-8.9l88-68.38a8 8 0 0 1 9.46 0l88 68.38a8 8 0 0 1 2.89 8.9" opacity={0.2} />
        <Path d="m225.56 87.56-87.92-68.31-.18-.14a15.93 15.93 0 0 0-18.92 0l-.18.14-87.92 68.31a16 16 0 0 0-5.7 17.63l32 107.54.06.17A15.94 15.94 0 0 0 72 224h112a15.94 15.94 0 0 0 15.23-11.1l.06-.17 32-107.54a16 16 0 0 0-5.73-17.63m-9.62 13L184 208H72L40 100.56l-.06-.17.18-.14L128 32l87.82 68.23.18.14Z" />
      </G>
    </Svg>
  );
};