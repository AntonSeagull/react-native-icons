

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcNook = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M8,39V9c0-3.3,2.7-6,6-6h20c3.3,0,6,2.7,6,6v30c0,3.3-2.7,6-6,6H14C10.7,45,8,42.3,8,39z" fill="#90A4AE" />
          <Path d="M34,7H14c-1.1,0-2,0.9-2,2v26c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V9C36,7.9,35.1,7,34,7z" fill="#ECEFF1" />
          <Path d="M22,43v-1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v1" fill="none" />
        </G>
      </Svg>
    );
  }

