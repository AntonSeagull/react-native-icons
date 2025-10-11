

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFilterCircleOutline = (props: IconProps) => {

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
          <Line  fill="none" x1="144" y1="208" x2="368" y2="208" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          <Line  fill="none" x1="176" y1="272" x2="336" y2="272" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          <Line  fill="none" x1="224" y1="336" x2="288" y2="336" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          <Path  fill="none" d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" strokeWidth="32" strokeMiterlimit="10" />
        </G>
      </Svg>
    );
  }

