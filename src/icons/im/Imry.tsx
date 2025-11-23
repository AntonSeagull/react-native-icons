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

export const Imry = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m3.002 10.699C10.39 11.181 9.275 10.5 8 10.5s-2.389.681-3.002 1.699l-1.286-.772C4.586 9.973 6.179 9 8 9s3.414.973 4.288 2.427zm.983-7.82a.5.5 0 0 1-.364.606c-.275.07-.602.189-.89.334A.998.998 0 0 1 9.999 7a1 1 0 0 1-1-1l.002-.054c.032-.741.706-1.234 1.275-1.518.543-.271 1.08-.407 1.102-.413a.5.5 0 0 1 .606.364zm-7.97 0a.5.5 0 0 1 .606-.364c.023.006.559.141 1.102.413.568.284 1.243.776 1.275 1.518L7 6a1 1 0 1 1-1.732-.681 4.6 4.6 0 0 0-.89-.334.5.5 0 0 1-.364-.606z" />
      </G>
    </Svg>
  );
};