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

export const RxGrid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M12.5 2H8v5h5V2.5a.5.5 0 0 0-.5-.5m.5 6H8v5h4.5a.5.5 0 0 0 .5-.5zM7 7V2H2.5a.5.5 0 0 0-.5.5V7zM2 8v4.5a.5.5 0 0 0 .5.5H7V8zm.5-7A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};