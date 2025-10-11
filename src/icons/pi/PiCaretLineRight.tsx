

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretLineRight = (props: IconProps) => {

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
          <Path  d="M149.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32-11.32L132.69,128,58.34,53.66A8,8,0,0,1,69.66,42.34ZM184,40a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V48A8,8,0,0,0,184,40Z" />
        </G>
      </Svg>
    );
  }

