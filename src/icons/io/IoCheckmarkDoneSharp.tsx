

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCheckmarkDoneSharp = (props: IconProps) => {

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
          <Polyline  points="465 127 241 384 149 292" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="44px" />
          <Line  x1="140" y1="385" x2="47" y2="292" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="44px" />
          <Line  x1="363" y1="127" x2="236" y2="273" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="44px" />
        </G>
      </Svg>
    );
  }

