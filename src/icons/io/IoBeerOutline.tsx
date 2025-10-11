

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBeerOutline = (props: IconProps) => {

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
          <Line  x1="224" y1="256" x2="224" y2="416" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="288" y1="256" x2="288" y2="416" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="160" y1="256" x2="160" y2="416" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M352,200V440a40.12,40.12,0,0,1-40,40H136a40.12,40.12,0,0,1-40-40V224" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M352,224h40a56.16,56.16,0,0,1,56,56v80a56.16,56.16,0,0,1-56,56H352" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M320,112a48,48,0,0,1,0,96c-13.25,0-29.31-7.31-38-16H160c-8,22-27,32-48,32a48,48,0,0,1,0-96,47.91,47.91,0,0,1,26,9" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M91.86,132.43a40,40,0,1,1,60.46-52S160,91,160,96" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M145.83,64.71C163.22,44.89,187.57,32,216,32c52.38,0,94,42.84,94,95.21A95,95,0,0,1,308.33,145" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

