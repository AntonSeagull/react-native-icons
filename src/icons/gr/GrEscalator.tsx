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

export const GrEscalator = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeLinecap="round" strokeWidth={2} d="M22 9c0-1.105-.898-2-1.998-2H16L6 17H4c-1.105 0-2 .888-2 2h0c0 1.105.898 2 1.998 2H8l10-10h2c1.105 0 2-.888 2-2zM7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6v-2.505c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V14zm5-11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6V7.495c0-.273.232-.495.5-.495h0c.276 0 .5.214.5.505V9z" />
      </G>
    </Svg>
  );
};