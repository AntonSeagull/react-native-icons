

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiBoxingRing = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M80 16H48l96 176c10.6 18.9 174.6 14.1 176 0zm377 184.9l-.1 158H487l.1-158zm-432.01.2v158l30-.1V201.1zM73 217.5v18.1c125.7 12.5 240.5 12.5 366 .1v-18c-125.8 12.5-240.1 12.5-366-.2zm0 48.1v18.1c125.5 12.5 240.4 12.4 366 0v-18.1c-125.8 12.6-240.1 12.6-366 0zM439 313c-126.3 13.1-240.6 13.3-366 1.2v18.2c125.1 12 240.1 11.5 366-1.3zM25 377v110l462 .1.1-110.1z" />
        </G>
      </Svg>
    );
  }

