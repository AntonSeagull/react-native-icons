

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoReorderFourSharp = (props: IconProps) => {

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
          <Line  x1="102" y1="304" x2="410" y2="304" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44px" />
          <Line  x1="102" y1="208" x2="410" y2="208" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44px" />
          <Line  x1="102" y1="112" x2="410" y2="112" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44px" />
          <Line  x1="102" y1="400" x2="410" y2="400" fill="none" strokeLinecap="square" strokeLinejoin="round" strokeWidth="44px" />
        </G>
      </Svg>
    );
  }

