

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiLens = (props: IconProps) => {

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
          <Path  d="M9.255 3.5H3.5v4.255l3.75 4.715ZM3.5 8.955v7.125h5.665ZM19.545 3.5H10.02L8.87 8.635Zm-.9 17H20.5v-8.4l-4.32-2.105Zm-5.79-12.95 7.645 3.72v-7.4ZM3.5 16.825V20.5h6.88l2.875-3.675zm7.83 3.675h6.545l-1.51-6.435zM0 0h24v24H0Z" />
        </G>
      </Svg>
    );
  }

