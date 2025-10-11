

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoShareSocial = (props: IconProps) => {

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
          <Path  d="M384,336a63.78,63.78,0,0,0-46.12,19.7l-148-83.27a63.85,63.85,0,0,0,0-32.86l148-83.27a63.8,63.8,0,1,0-15.73-27.87l-148,83.27a64,64,0,1,0,0,88.6l148,83.27A64,64,0,1,0,384,336Z" />
        </G>
      </Svg>
    );
  }

