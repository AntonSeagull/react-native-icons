

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSkullOutline = (props: IconProps) => {

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
          <Line  x1="256" y1="448" x2="256" y2="480" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="208" y1="448" x2="208" y2="480" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="304" y1="448" x2="304" y2="480" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M448,225.64v99a64,64,0,0,1-40.23,59.42l-23.68,9.47A32,32,0,0,0,364.6,417l-10,50.14A16,16,0,0,1,338.88,480H173.12a16,16,0,0,1-15.69-12.86L147.4,417a32,32,0,0,0-19.49-23.44l-23.68-9.47A64,64,0,0,1,64,324.67V224C64,118.08,149.77,32.19,255.65,32S448,119.85,448,225.64Z" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

