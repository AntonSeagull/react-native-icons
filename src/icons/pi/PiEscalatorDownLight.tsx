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

export const PiEscalatorDownLight = (props: IconProps) => {
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
        <Path d="M171.76 84.24a6 6 0 0 1 8.48-8.48L194 89.51V48a6 6 0 0 1 12 0v41.51l13.76-13.75a6 6 0 0 1 8.48 8.48l-24 24a6 6 0 0 1-8.48 0ZM238 160v40a14 14 0 0 1-14 14h-56a6 6 0 0 1-4.41-1.93L69.37 110H32a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14h56a6 6 0 0 1 4.41 1.93L186.63 146H224a14 14 0 0 1 14 14m-12 0a2 2 0 0 0-2-2h-40a6 6 0 0 1-4.41-1.93L85.37 54H32a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h40a6 6 0 0 1 4.41 1.93L170.63 202H224a2 2 0 0 0 2-2Z" />
      </G>
    </Svg>
  );
};