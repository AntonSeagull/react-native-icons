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

export const TfiCss3 = (props: IconProps) => {
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
        <Path d="m16.5 1.26-2.407 12.064-7.277 2.416L.5 13.324l.643-3.223h2.688l-.263 1.33 3.818 1.457 4.398-1.457.614-3.068H1.469l.524-2.686h10.94l.345-1.73H2.347L2.88 1.26z" />
      </G>
    </Svg>
  );
};