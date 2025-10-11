

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImderUpload = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9 4l-2-2h-7v13h16v-11h-7zM8 7.5l3.5 3.5h-2.5v4h-2v-4h-2.5l3.5-3.5z" />
        </G>
      </Svg>
    );
  }

