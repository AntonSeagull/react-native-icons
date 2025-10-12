

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiIraq = (props: IconProps) => {

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
          <Path  d="M17.03 246.5l25.73 60.7 265.44 143 82.2 6.9 38.1-47.1 66.5 4.1-33.5-52.1-5.2-38-116.5-107.9 39-53.8-72.3-100.65-95.4-6.77-69.5 49.82-16.4 97.2z" />
        </G>
      </Svg>
    );
  }

