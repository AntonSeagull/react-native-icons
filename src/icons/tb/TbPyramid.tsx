

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPyramid = (props: IconProps) => {

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
          <Path d="M11.105 21.788a1.994 1.994 0 0 0 1.789 0l8.092 -4.054c.538 -.27 .718 -.951 .385 -1.452l-8.54 -13.836a.999 .999 0 0 0 -1.664 0l-8.54 13.836a1.005 1.005 0 0 0 .386 1.452l8.092 4.054z" />
          <Path d="M12 2v20" />
        </G>
      </Svg>
    );
  }

