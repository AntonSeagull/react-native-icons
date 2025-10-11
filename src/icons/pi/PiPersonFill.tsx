

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPersonFill = (props: IconProps) => {

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
          <Path  d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM215.42,140.78l-45.25-51.3a28,28,0,0,0-21-9.48H106.83a28,28,0,0,0-21,9.48l-45.25,51.3a16,16,0,0,0,22.56,22.69L89,142.7l-19.7,74.88a16,16,0,0,0,29.08,13.35L128,180l29.58,51a16,16,0,0,0,29.08-13.35L167,142.7l25.9,20.77a16,16,0,0,0,22.56-22.69Z" />
        </G>
      </Svg>
    );
  }

