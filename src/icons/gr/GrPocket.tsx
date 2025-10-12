

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPocket = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Polyline  stroke="#FFF" points="6 9 12.404 15 18 9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <Path  fill="#F50057" d="M12,2 L2,2 C0.8954305,2 0,2.8954305 0,4 C0,7 0,9 0,12 C0,17.9821415 6,23 12,23 C18,23 24,17.9821415 24,12 C24,9 24,7 24,4 C24,2.8954305 23.1045695,2 22,2 L12,2 Z" />
        </G>
      </Svg>
    );
  }

