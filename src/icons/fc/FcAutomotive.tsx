

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcAutomotive = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" stroke="#F44336" d="M7,20v-8c0-2.2,1.8-4,4-4h14c1.2,0,2.4,0.6,3.2,1.6 L35,18" strokeWidth="4" strokeMiterlimit="10" />
          <Path  fill="#F44336" d="M40.2,17L33,14H7c-1.2,0-2,0.8-2,2v10c0,1.2,0.8,2,2,2h1c0-2.8,2.2-5,5-5s5,2.2,5,5h12c0-2.8,2.2-5,5-5 s5,2.2,5,5h1c1.2,0,2-0.8,2-2v-5.2C43,19.2,41.8,17.6,40.2,17z" />
          <Path  d="M30.4,39c-0.3-0.6-0.4-1.3-0.4-2s0.2-1.4,0.4-2H17.6c0.3,0.6,0.4,1.3,0.4,2s-0.2,1.4-0.4,2H30.4z" />
        </G>
      </Svg>
    );
  }

