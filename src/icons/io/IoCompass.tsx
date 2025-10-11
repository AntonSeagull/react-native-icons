

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCompass = (props: IconProps) => {

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
          <Path  d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM361.07,161.33l-46.88,117.2a64,64,0,0,1-35.66,35.66l-117.2,46.88a8,8,0,0,1-10.4-10.4l46.88-117.2a64,64,0,0,1,35.66-35.66l117.2-46.88A8,8,0,0,1,361.07,161.33Z" />
        </G>
      </Svg>
    );
  }

