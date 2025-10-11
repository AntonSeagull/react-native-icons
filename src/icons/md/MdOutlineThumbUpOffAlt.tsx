

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineThumbUpOffAlt = (props: IconProps) => {

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
          <Path  d="M9,21h9c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,12.5,23,12.26,23,12v-2c0-1.1-0.9-2-2-2h-6.31l0.95-4.57l0.03-0.32 c0-0.41-0.17-0.79-0.44-1.06L14.17,1L7.58,7.59C7.22,7.95,7,8.45,7,9v10C7,20.1,7.9,21,9,21z M9,9l4.34-4.34L12,10h9v2l-3,7H9V9z M1,9h4v12H1V9z" />
        </G>
      </Svg>
    );
  }

