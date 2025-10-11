

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowURightDown = (props: IconProps) => {

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
          <Path  d="M221.66,181.66l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L160,204.69V88a48,48,0,0,0-96,0v88a8,8,0,0,1-16,0V88a64,64,0,0,1,128,0V204.69l34.34-34.35a8,8,0,0,1,11.32,11.32Z" />
        </G>
      </Svg>
    );
  }

