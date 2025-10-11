

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandPushover = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M6.16 10.985c-.83 -1.935 1.53 -7.985 8.195 -7.985c3.333 0 4.645 1.382 4.645 3.9c0 2.597 -2.612 6.1 -9 6.1" />
          <Path d="M12.5 6l-5.5 15" />
        </G>
      </Svg>
    );
  }

