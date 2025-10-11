

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdViewStream = (props: IconProps) => {

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
          <Path  d="M3,17v-2c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v2c0,1.1-0.9,2-2,2H5C3.9,19,3,18.1,3,17z M3,7v2c0,1.1,0.9,2,2,2h14 c1.1,0,2-0.9,2-2V7c0-1.1-0.9-2-2-2H5C3.9,5,3,5.9,3,7z" />
        </G>
      </Svg>
    );
  }

