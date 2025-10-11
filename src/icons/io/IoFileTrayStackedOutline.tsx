

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoFileTrayStackedOutline = (props: IconProps) => {

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
          <Line  x1="48" y1="336" x2="192" y2="336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="320" y1="336" x2="464" y2="336" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="48" y1="192" x2="192" y2="192" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Line  x1="320" y1="192" x2="464" y2="192" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M48,336v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V336" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M192,336a64,64,0,0,0,128,0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M384,32H128c-26,0-43,14-48,40L48,192v96a48.14,48.14,0,0,0,48,48H416a48.14,48.14,0,0,0,48-48V192L432,72C427,45,409,32,384,32Z" fill="none" strokeLinejoin="round" strokeWidth="32px" />
          <Path  d="M192,192a64,64,0,0,0,128,0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

