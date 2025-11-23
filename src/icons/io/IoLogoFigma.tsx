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

export const IoLogoFigma = (props: IconProps) => {
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
        <Path d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160 80 80 0 0 0 0 160 80 80 0 1 0 80 80V176Z" />
        <Circle cx={336} cy={256} r={80} />
      </G>
    </Svg>
  );
};