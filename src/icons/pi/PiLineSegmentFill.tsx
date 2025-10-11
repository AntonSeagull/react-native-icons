

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLineSegmentFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M211.81,83.79a28,28,0,0,1-33.12,4.83L88.62,178.69a28,28,0,1,1-44.43-6.48h0a28,28,0,0,1,33.12-4.83l90.07-90.07a28,28,0,1,1,44.43,6.48Z" />
        </G>
      </Svg>
    );
  }

