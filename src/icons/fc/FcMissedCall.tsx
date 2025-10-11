

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcMissedCall = (props: IconProps) => {

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
          <Path d="M44.5,30.8l-2.4-2.4c-8.5-8.3-28.9-7.1-36.2,0l-2.4,2.4c-0.7,0.7-0.7,1.7,0,2.4l4.8,4.7 c0.7,0.7,1.7,0.7,2.4,0l5.3-5.1l-0.4-5.6c1.7-1.7,15.1-1.7,16.8,0L32.1,33l5.1,4.9c0.7,0.7,1.7,0.7,2.4,0l4.8-4.7 C45.2,32.5,45.2,31.4,44.5,30.8z" fill="#009688" />
        </G>
      </Svg>
    );
  }

