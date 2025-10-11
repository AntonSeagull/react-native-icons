

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFemaleOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="336" x2="256" y2="480" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          <Line  x1="314" y1="416" x2="198" y2="416" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

