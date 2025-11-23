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

export const GiSuitcase = (props: IconProps) => {
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
        <Path d="M208 95c-3.583 0-7.736 1.925-9.977 4.613-2.24 2.69-2.99 5.447-3.4 7.907-.82 4.92-.247 9.48.5 13.96.316 1.897.698 3.748 1.096 5.52h18.534c-.67-2.54-1.387-5.542-1.877-8.48a41 41 0 0 1-.53-5.52h87.305a41 41 0 0 1-.53 5.52c-.49 2.938-1.205 5.94-1.876 8.48h18.535c.4-1.772.78-3.623 1.097-5.52.747-4.48 1.32-9.04.5-13.96-.41-2.46-1.16-5.218-3.4-7.907S307.583 95 304 95zm-105 16v18h50v-18zm256 0v18h50v-18zM96 145c-5 0-11.05 2.777-15.637 7.363S73 163 73 168v208c0 5 2.777 11.05 7.363 15.637S91 399 96 399h23V145zm41 0v254h238V145zm256 0v254h23c5 0 11.05-2.777 15.637-7.363S439 381 439 376V168c0-5-2.777-11.05-7.363-15.637S421 145 416 145z" />
      </G>
    </Svg>
  );
};