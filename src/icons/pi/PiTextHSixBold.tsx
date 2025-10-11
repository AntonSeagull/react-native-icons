

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextHSixBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M217.06,140.33l13.24-22.18a12,12,0,1,0-20.6-12.3l-32.25,54c-.09.15-.17.31-.25.47a40,40,0,1,0,39.86-20ZM212,196a16,16,0,1,1,16-16A16,16,0,0,1,212,196ZM156,56V176a12,12,0,0,1-24,0V128H52v48a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0v48h80V56a12,12,0,0,1,24,0Z" />
        </G>
      </Svg>
    );
  }

