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

export const GrCar = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M1 10.997c0-.55.44-.997 1.002-.997h19.996c.553 0 1.002.453 1.002.997v6.006c0 .55-.44.997-1.002.997H2.002A1.004 1.004 0 0 1 1 17.003zM6 2h12l4 8H2zm6 8.5L15 5M3 18h3v2.99c0 .558-.443 1.01-.999 1.01H3.999A1 1 0 0 1 3 20.99zm15 0h3v2.99c0 .558-.443 1.01-.999 1.01h-1.002A1 1 0 0 1 18 20.99zM5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7-2v2m2-2v2m-4-2v2" />
      </G>
    </Svg>
  );
};