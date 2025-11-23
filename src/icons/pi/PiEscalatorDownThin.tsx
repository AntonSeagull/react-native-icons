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

export const PiEscalatorDownThin = (props: IconProps) => {
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
        <Path d="M173.17 82.83a4 4 0 0 1 5.66-5.66L196 94.34V48a4 4 0 0 1 8 0v46.34l17.17-17.17a4 4 0 1 1 5.66 5.66l-24 24a4 4 0 0 1-5.66 0ZM236 160v40a12 12 0 0 1-12 12h-56a4 4 0 0 1-2.94-1.29L70.25 108H32a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h56a4 4 0 0 1 2.94 1.29L185.75 148H224a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4h-40a4 4 0 0 1-2.94-1.29L86.25 52H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h40a4 4 0 0 1 2.94 1.29L169.75 204H224a4 4 0 0 0 4-4Z" />
      </G>
    </Svg>
  );
};