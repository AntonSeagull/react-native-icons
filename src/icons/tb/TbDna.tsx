

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDna = (props: IconProps) => {

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
          <Path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
          <Path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" />
          <Path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
        </G>
      </Svg>
    );
  }

