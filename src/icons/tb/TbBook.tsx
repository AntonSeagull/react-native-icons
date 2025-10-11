

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBook = (props: IconProps) => {

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
          <Path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <Path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <Path d="M3 6l0 13" />
          <Path d="M12 6l0 13" />
          <Path d="M21 6l0 13" />
        </G>
      </Svg>
    );
  }

