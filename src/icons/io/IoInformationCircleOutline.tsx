

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoInformationCircleOutline = (props: IconProps) => {

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
          <Line  x1="208" y1="340" x2="296" y2="340" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z" fill="none" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

