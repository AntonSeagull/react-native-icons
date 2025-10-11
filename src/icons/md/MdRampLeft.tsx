

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdRampLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M13,21h-2V6.83L9.41,8.41L8,7l4-4l4,4l-1.41,1.41L13,6.83V9c0,4.27,4.03,7.13,6,8.27l-1.46,1.46 c-1.91-1.16-3.44-2.53-4.54-4.02L13,21z" />
        </G>
      </Svg>
    );
  }

