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

export const TiZoomOutOutline = (props: IconProps) => {
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
        <Path d="M13 12H8c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h5c.275 0 .5.225.5.5s-.225.5-.5.5m6.381 3.956-2.245-2.283A6.9 6.9 0 0 0 17.5 11.5c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.761 0 1.488-.137 2.173-.364l2.397 2.386a3.28 3.28 0 0 0 2.104.783 3.134 3.134 0 0 0 3.131-3.131c0-.84-.328-1.628-.924-2.218m-3.901-1.11 2.492 2.531c.205.203.332.486.332.797 0 .625-.507 1.131-1.131 1.131-.312 0-.594-.127-.816-.313l-2.512-2.511a6.1 6.1 0 0 0 1.635-1.635M5.5 11.5c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5" />
      </G>
    </Svg>
  );
};