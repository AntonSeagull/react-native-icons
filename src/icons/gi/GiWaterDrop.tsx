

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiWaterDrop = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M406.043 316c24.11 96.443-50.59 180-150 180s-174.405-82.38-150-180c15-60 90-150 150-300 60 150 135 240 150 300z" fill="#000" />
        </G>
      </Svg>
    );
  }

