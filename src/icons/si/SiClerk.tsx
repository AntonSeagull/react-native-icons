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

export const SiClerk = (props: IconProps) => {
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
        <Path d="m21.47 20.829-2.881-2.881a.57.57 0 0 0-.7-.084 6.85 6.85 0 0 1-7.081 0 .576.576 0 0 0-.7.084l-2.881 2.881a.576.576 0 0 0-.103.69.6.6 0 0 0 .166.186 12 12 0 0 0 14.113 0 .58.58 0 0 0 .239-.423.58.58 0 0 0-.172-.453m.002-17.668-2.88 2.88a.57.57 0 0 1-.701.084A6.857 6.857 0 0 0 8.724 8.08a6.86 6.86 0 0 0-1.222 3.692 6.86 6.86 0 0 0 .978 3.764.57.57 0 0 1-.083.699l-2.881 2.88a.567.567 0 0 1-.864-.063A11.993 11.993 0 0 1 6.771 2.7a11.99 11.99 0 0 1 14.637-.405.57.57 0 0 1 .232.418.57.57 0 0 1-.168.448m-7.118 12.261a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854" />
      </G>
    </Svg>
  );
};