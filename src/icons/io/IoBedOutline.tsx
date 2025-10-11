

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBedOutline = (props: IconProps) => {

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
          <Path  d="M384,240H96V136a40.12,40.12,0,0,1,40-40H376a40.12,40.12,0,0,1,40,40V240Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M48,416V304a64.19,64.19,0,0,1,64-64H400a64.19,64.19,0,0,1,64,64V416" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M48,416v-8a24.07,24.07,0,0,1,24-24H440a24.07,24.07,0,0,1,24,24v8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M112,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M256,240V224a32.09,32.09,0,0,1,32-32h80a32.09,32.09,0,0,1,32,32v16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

