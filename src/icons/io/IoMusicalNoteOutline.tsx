

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMusicalNoteOutline = (props: IconProps) => {

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
          <Path  d="M240,343.31V424a32.28,32.28,0,0,1-21.88,30.65l-21.47,7.23c-25.9,8.71-52.65-10.75-52.65-38.32h0A34.29,34.29,0,0,1,167.25,391l50.87-17.12A32.29,32.29,0,0,0,240,343.24V92a16.13,16.13,0,0,1,12.06-15.66L360.49,48.2A6,6,0,0,1,368,54v57.76a16.13,16.13,0,0,1-12.12,15.67l-91.64,23.13A32.25,32.25,0,0,0,240,181.91V221.3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px" />
        </G>
      </Svg>
    );
  }

